import { dirname } from 'node:path'
import { Command } from 'commander'
import ora, { type Ora } from 'ora'
import { createClient } from '#cli/figma/api.ts'
import { parse } from '#cli/figma/parse.ts'
import pkg from '#package.json' with { type: 'json' }
import { difference, formatDiff, versionIncrement } from '#src/changes.ts'
import { generateAndroid } from '#src/generate/android.ts'
import { generateTypescript } from '#src/generate/typescript.ts'
import type { Icon, Logo, Manifest } from '#src/manifest.ts'
import {
  copyRecursive,
  mkdirp,
  moveRecursive,
  readManifest,
  rmrf,
  writeFile,
  writeManifest,
} from '#utils/fs.ts'
import { dedent } from '#utils/string.ts'
import { optimizeIcon, optimizeLogo } from '#utils/svg.ts'

export const syncCommand = new Command('sync')
  .description('Export icons from Figma')
  .option(
    '-t, --access-token <token>',
    'OAuth token for Figma API (defaults to environment variable FIGMA_ACCESS_TOKEN)',
  )
  .option(
    '-k, --file-key <key>',
    'Override Figma file (or branch) key (defaults to environment variable FIGMA_FILE_KEY)',
  )
  .option('-f, --force', 'Force export even if icons are up to date', false)
  .action(syncAction)

interface Options {
  accessToken?: string
  fileKey?: string
  force: boolean
}

async function syncAction(options: Options) {
  const fileKey = options.fileKey ?? process.env.FIGMA_FILE_KEY
  if (!fileKey) {
    throw new Error(
      'Figma file key is required. Please provide it via the --file-key option or FIGMA_FILE_KEY environment variable',
    )
  }

  const accessToken = options.accessToken ?? process.env.FIGMA_ACCESS_TOKEN
  if (!accessToken) {
    throw new Error(
      'Figma access token is required. Please provide it via the --access-token option or FIGMA_ACCESS_TOKEN environment variable',
    )
  }

  const figma = createClient(accessToken)

  let prevManifest: Manifest
  try {
    prevManifest = readManifest(`lib/manifest.json`)
  } catch (_err) {
    prevManifest = {
      version: 0,
      assets: [],
    }
  }
  const manifest = structuredClone(prevManifest)
  let spinner: Ora

  spinner = ora(`Fetching Figma data`).start()
  const [latestReleaseResponse, componentSetsResponse, componentsResponse] = await Promise.all([
    figma.getLatestRelease(fileKey),
    figma.getFileComponentSets(fileKey),
    figma.getFileComponents(fileKey),
  ])
  if (latestReleaseResponse.error) {
    spinner.fail()
    console.error(`Error fetching latest release: ${latestReleaseResponse.error.message}`)
    return
  }
  if (componentSetsResponse.error) {
    spinner.fail()
    console.error(`Error fetching component sets: ${componentSetsResponse.error.message}`)
    return
  }
  if (componentsResponse.error) {
    spinner.fail()
    console.error(`Error fetching components: ${componentsResponse.error.message}`)
    return
  }

  const fileVersion = latestReleaseResponse.data.id
  const componentSets = componentSetsResponse.data.meta.component_sets
  const components = componentsResponse.data.meta.components
  spinner.succeed()

  manifest.version = findLatestTimestamp(componentSets.concat(components))
  if (prevManifest.version >= manifest.version && !options.force) {
    console.log('Icons are up to date. Use --force to re-export.')
    return
  }

  spinner = ora('Parsing icons').start()
  const assets = parse(componentSets, components)
  manifest.assets = assets

  const icons = assets.filter(({ kind }) => kind === 'icon') as Icon[]
  const logos = assets.filter(({ kind }) => kind === 'logo') as Logo[]
  spinner.succeed(`Parsing icons: found ${icons.length} icons and ${logos.length} logos`)

  spinner = ora('Resolving image URLs for download').start()
  const imageUrls: Map<string, string | null> = new Map()
  try {
    const componentIds = new Set(assets.map((asset) => asset.componentNodeId))
    const chunks = splitIntoChunks(componentIds, 250)
    for (const chunk of chunks) {
      const { error, data } = await figma.getImageUrls(fileKey, {
        ids: chunk.join(','),
        version: fileVersion,
        format: 'svg',
      })

      if (error) {
        throw new Error(error.message)
      }

      for (const [nodeId, url] of Object.entries(data.images)) {
        if (url !== null) {
          imageUrls.set(nodeId, url)
        }
      }
    }

    const resolvedIds = new Set(imageUrls.keys())
    const missing = componentIds.difference(resolvedIds)
    if (missing.size > 0) {
      throw new Error(
        `Failed to resolve image URLs for the following node IDs: ${Array.from(missing).join(', ')}`,
      )
    }
  } catch (err) {
    spinner.fail()
    console.error((err as Error).message)
    return
  }

  spinner.succeed()

  spinner = ora('Downloading and optimizing SVGs').start()
  rmrf('.tmp')
  try {
    await Promise.all(
      assets.map(async (icon) => {
        const url = imageUrls.get(icon.componentNodeId)!
        const svg = await fetch(url).then((res) => res.text())
        const optimized = await (icon.kind === 'logo' ? optimizeLogo(svg) : optimizeIcon(svg))
        mkdirp(`.tmp/${dirname(icon.file)}`)
        writeFile(`.tmp/${icon.file}`, optimized)
      }),
    )
  } catch (err) {
    spinner.fail()
    console.error(`Error downloading or optimizing SVGs: ${(err as Error).message}`)
    return
  }

  try {
    moveRecursive('lib/icons', '.tmp/backup/icons')
    moveRecursive('lib/logos', '.tmp/backup/logos')

    copyRecursive('.tmp/lib/icons', 'lib/icons')
    copyRecursive('.tmp/lib/logos', 'lib/logos')
    spinner.succeed()

    spinner = ora('Generating files: TypeScript').start()
    generateTypescript(manifest)
    spinner.succeed()

    spinner = ora('Generating files: Android').start()
    await generateAndroid(manifest)
    spinner.succeed()

    spinner = ora('Calculating changes').start()
    const diff = difference(prevManifest.assets, manifest.assets)
    spinner.succeed()

    spinner = ora('Creating changeset').start()
    writeFile(
      `.changeset/figma-sync.md`,
      dedent`
        ---
        '${pkg.name}': ${versionIncrement(diff) ?? 'patch'}
        ---

        ${formatDiff(diff)}
      `,
    )
    spinner.succeed()

    spinner = ora('Writing manifest').start()
    writeManifest('lib/manifest.json', manifest)
    spinner.succeed()

    rmrf('.tmp/backup')
  } catch (err) {
    spinner.fail()
    console.error(`Error during sync: ${(err as Error).message}`)
    // rollback
    rmrf('lib/icons')
    rmrf('lib/logos')
    moveRecursive('.tmp/backup/icons', 'lib/icons')
    moveRecursive('.tmp/backup/logos', 'lib/logos')
  }
}

function splitIntoChunks<T>(iterable: Iterable<T>, chunkSize: number): T[][] {
  const array = Array.from(iterable)
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

function findLatestTimestamp(items: { updated_at: string }[]): number {
  return items.reduce((latest, item) => Math.max(latest, new Date(item.updated_at).getTime()), 0)
}
