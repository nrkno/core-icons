import { basename } from 'node:path'
import { Command } from 'commander'
import ora, { type Ora } from 'ora'
import { optimize, type PluginConfig } from 'svgo/browser'
import { createClient } from '#cli/figma/api.ts'
import { findListSection, iconVariant, iconVariantName } from '#cli/figma/parse.ts'
import { writeGenerated } from '#src/generate/typescript.ts'
import compat from '#utils/backwards-compatibility.ts'
import { readFile } from '#utils/fs.ts'
import { dedent, toExportedName, toCamelCase, toPascalCase } from '#utils/string.ts'
import { toInlinedSvg, toSvgSymbol } from '#utils/svg.ts'

interface Options {
  accessToken?: string
  fileKey?: string
}

const previousExports = {
  effective: new Set(compat.effective),
  expressive: new Set(compat.expressive),
  logo: new Set(compat.logo),
  logoLarge: new Set(compat.logoLarge),
  jsxEffective: new Set(compat.jsxEffective),
  jsxExpressive: new Set(compat.jsxExpressive),
  jsxLogo: new Set(compat.jsxLogo),
  jsxLogoLarge: new Set(compat.jsxLogoLarge),
}

export const syncCompatCommand = new Command('sync-compat')
  .description('Generate mappings for old icon names for backwards compatibility')
  .option(
    '-t, --access-token <token>',
    'OAuth token for Figma API (defaults to environment variable FIGMA_ACCESS_TOKEN)',
  )
  .option(
    '-k, --file-key <key>',
    'Override Figma file (or branch) key (defaults to environment variable FIGMA_FILE_KEY)',
  )
  .action(syncCompatAction)

async function syncCompatAction(options: Options) {
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

  let spinner: Ora
  spinner = ora(`Fetching Figma data`).start()
  const [componentSetsResponse, componentsResponse] = await Promise.all([
    figma.getFileComponentSets(fileKey),
    figma.getFileComponents(fileKey),
  ])
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
  const components = componentsResponse.data.meta.components
  const componentSets = new Map(
    componentSetsResponse.data.meta.component_sets.map((set) => [set.node_id, set]),
  )
  spinner.succeed()

  spinner = ora('Parsing').start()

  const output: { [key: string]: string[] } = {
    effective: [
      fromFiles([
        'lib/compat/nrk-flag-norwegian.svg',
        'lib/compat/nrk-media-direkte-animated--active.svg',
        'lib/compat/nrk-progress.svg',
        'lib/compat/nrk-spinner.svg',
      ]),
    ],
    expressive: [
      dedent`
        /** @deprecated Use \`radioButtonCheckedIcon\` from \`@nrk/core-icons\` instead */
        export const nrkRadioExpressiveActive = '${toInlinedSvg('lib/icons/radio-button-checked.svg', 'nrk-radio-expressive-active')}';
      `,
      fromFiles([
        'lib/compat/nrk-flag-norwegian-expressive.svg',
        'lib/compat/nrk-progress-expressive.svg',
        'lib/compat/nrk-spinner-expressive.svg',
      ]),
    ],
    logo: [],
    logoLarge: [],
    iife: [],
    iifeLogo: [],
    jsxEffective: [
      `import React from 'react';`,
      fromFilesJsx([
        'lib/compat/nrk-flag-norwegian.svg',
        'lib/compat/nrk-media-direkte-animated--active.svg',
        'lib/compat/nrk-progress.svg',
        'lib/compat/nrk-spinner.svg',
      ]),
    ],
    jsxExpressive: [
      `import React from 'react';`,
      fromFilesJsx([
        'lib/compat/nrk-flag-norwegian-expressive.svg',
        'lib/compat/nrk-progress-expressive.svg',
        'lib/compat/nrk-spinner-expressive.svg',
      ]),
    ],
    jsxLogo: [`import React from 'react';`],
    jsxLogoLarge: [`import React from 'react';`],
  }

  for (const component of components) {
    const frame = component.containing_frame!
    if (frame.pageName.includes('prototyping')) {
      continue
    }

    if (frame.pageName.includes('logo')) {
      const name = component.name.replace(/\+/g, '-pluss')
      const large = name.includes('large')
      const pkg = large ? 'logoLarge' : 'logo'
      const jsxPkg = large ? 'jsxLogoLarge' : 'jsxLogo'
      const prevName = large ? `nrk-logo-large-${name.replace(/-large$/, '')}` : `nrk-logo-${name}`
      const prevCamelCased = toCamelCase(prevName)
      const prevPascalCased = toPascalCase(prevName)
      if (previousExports[pkg].has(prevCamelCased)) {
        const comment = large
          ? `/** @deprecated Use \`${toExportedName(name, 'logo')}\` from \`@nrk/core-icons/logo\` instead */`
          : `/** @deprecated Use \`${toExportedName(name, 'logo')}\` instead */`
        output[pkg].push(
          dedent`
            ${comment}
            export const ${prevCamelCased} = '${toInlinedSvg(`lib/logos/${name}.svg`, prevName)}';
          `,
        )
        output.iifeLogo.push(toSvgSymbol(readFile(`lib/logos/${name}.svg`), prevName))
      }
      if (previousExports[jsxPkg].has(prevPascalCased)) {
        output[jsxPkg].push(
          dedent`
            /** @deprecated */
            export const ${prevPascalCased}: React.FC<React.SVGProps<SVGSVGElement>> = ${toReactComponent(`lib/logos/${name}.svg`)};
          `,
        )
      }
    }

    const componentSetNodeId = frame.containingComponentSet?.nodeId ?? null
    if (!componentSetNodeId || !componentSets.has(componentSetNodeId)) {
      continue
    }
    const componentSet = componentSets.get(componentSetNodeId)!
    const variant = iconVariant(component.name)
    const name = iconVariantName(componentSet.name, variant)
    const prevNames = findListSection(componentSet.description, 'Tidligere navn', (name) =>
      iconVariantName(name, variant),
    )

    for (const prevName of prevNames) {
      const prevCamelCased = toCamelCase(prevName)
      const prevPascalCased = toPascalCase(prevName)
      if (previousExports[variant].has(prevCamelCased)) {
        output[variant].push(
          dedent`
            /** @deprecated Use \`${toExportedName(name)}\` instead */
            export const ${prevCamelCased} = '${toInlinedSvg(`lib/icons/${name}.svg`, prevName)}';
          `,
        )
        output[`jsx${toPascalCase(variant)}` as keyof typeof output].push(
          dedent`
            /** @deprecated */
            export const ${prevPascalCased}: React.FC<React.SVGProps<SVGSVGElement>> = ${toReactComponent(`lib/icons/${name}.svg`)};
          `,
        )
        output.iife.push(toSvgSymbol(readFile(`lib/icons/${name}.svg`), prevName))
      }
    }
  }

  writeGenerated('lib/compat/compat-effective.ts', output.effective.join('\n'))
  writeGenerated('lib/compat/compat-expressive.ts', output.expressive.join('\n'))
  writeGenerated('lib/compat/compat-logo.ts', output.logo.join('\n'))
  writeGenerated('lib/compat/compat-logo-large.ts', output.logoLarge.join('\n'))
  writeGenerated('lib/compat/compat-jsx-effective.tsx', output.jsxEffective.join('\n'))
  writeGenerated('lib/compat/compat-jsx-expressive.tsx', output.jsxExpressive.join('\n'))
  writeGenerated('lib/compat/compat-jsx-logo.tsx', output.jsxLogo.join('\n'))
  writeGenerated('lib/compat/compat-jsx-logo-large.tsx', output.jsxLogoLarge.join('\n'))
  writeGenerated('lib/compat/compat-iife.js', iife(output.iife))
  writeGenerated('lib/compat/compat-iife-logo.js', iife(output.iifeLogo))

  spinner.succeed()
}

function iife(content: string[]): string {
  return dedent`
    const el = document.createElement('div');
    el.innerHTML = '${content.join('')}';
    document.head.appendChild(el.firstElementChild);
  `
}

function fromFiles(paths: string[]): string {
  const output: string[] = []
  for (const path of paths) {
    const filename = basename(path, '.svg')
    const name = toCamelCase(filename)
    output.push(dedent`
      /** @deprecated */
      export const ${name} = '${toInlinedSvg(path, filename)}';
    `)
  }
  return output.join('\n')
}

function fromFilesJsx(paths: string[]): string {
  const output: string[] = []
  for (const path of paths) {
    const name = basename(path, '.svg')
    output.push(dedent`
      /** @deprecated */
      export const ${toPascalCase(name)}: React.FC<React.SVGProps<SVGSVGElement>> = ${toReactComponent(path)};
    `)
  }
  return output.join('\n')
}

function toReactComponent(path: string): string {
  const code = toInlinedSvg(path)

  const attributes: Record<string, string> = {}
  const plugins: PluginConfig[] = [
    {
      name: 'toReactComponent',
      fn: () => ({
        element: {
          enter: (node, parentNode) => {
            if (node.name === 'svg') {
              for (const [attr, value] of Object.entries(node.attributes)) {
                attributes[attr] = value
              }
              parentNode.children = node.children
            }
          },
        },
      }),
    },
  ]

  const output = optimize(code, { plugins })
  const attributesStr = Object.entries(attributes)
    .map(([key, value]) => `${key}: '${value}'`)
    .join(', ')
  return dedent`
    (props: React.SVGProps<SVGSVGElement>) => {
      const attributes: React.SVGProps<SVGSVGElement> = { 'aria-hidden': true, ${attributesStr}, dangerouslySetInnerHTML: { __html: '${output.data}' }, ...props };
      return React.createElement('svg', attributes);
    }
  `
}
