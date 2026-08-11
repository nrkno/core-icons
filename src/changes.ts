import { execSync } from 'node:child_process'
import csWriteChangeset from '@changesets/write'
import pkg from '#package.json' with { type: 'json' }
import type { Asset, Manifest } from '#src/manifest.ts'
import { dedent } from '#utils/string.ts'

export type Diff<T extends Asset = Asset> =
  | {
      op: 'add'
      next: T
    }
  | {
      op: 'delete'
      prev: T
    }
  | {
      op: 'deprecate'
      prev: T
      next: T
    }
  | {
      op: 'update'
      prev: T
      next: T
    }

export function difference<T extends Asset = Asset>(a: T[], b: T[]): Diff<T>[] {
  const prevComponents = new Map(a.map((asset) => [asset.componentId, asset]))
  const nextComponents = new Map(b.map((asset) => [asset.componentId, asset]))
  const changedFiles = new Set(gitDiffFiles(b.map((asset) => asset.file)))
  const ids = new Set([...prevComponents.keys(), ...nextComponents.keys()])
  const diffs: Diff<T>[] = []
  for (const id of ids) {
    const prev = prevComponents.get(id)
    const next = nextComponents.get(id)

    if (!prev && next) {
      diffs.push({ op: 'add', next })
      continue
    }

    if (prev && !next) {
      diffs.push({ op: 'delete', prev })
      continue
    }

    if (!prev || !next) {
      // This should never happen, but TypeScript can't infer that from the previous checks
      continue
    }

    if (next.deprecated && !prev.deprecated) {
      diffs.push({ op: 'deprecate', prev, next })
      continue
    }

    if (next.id !== prev.id) {
      diffs.push({ op: 'update', prev, next })
      continue
    }

    if (changedFiles.has(next.file)) {
      diffs.push({ op: 'update', prev, next })
      continue
    }
  }
  return diffs
}

export async function writeChangeset(prevManifest: Manifest, manifest: Manifest): Promise<void> {
  const diff = difference(prevManifest.assets, manifest.assets)
  if (diff.length === 0) {
    return
  }

  await csWriteChangeset(
    {
      summary: formatDiff(diff),
      releases: [
        {
          name: pkg.name,
          type: versionIncrement(diff),
        },
      ],
    },
    process.cwd(),
    { prettier: true },
  )
}

export function versionIncrement(diff: Diff[]): 'major' | 'minor' | 'patch' | 'none' {
  if (diff.some(isMajorChange)) {
    return 'major'
  }
  if (diff.some(isMinorChange)) {
    return 'minor'
  }
  if (diff.some(isPatchChange)) {
    return 'patch'
  }
  return 'none'
}

export function formatDiff(diffs: Diff[]): string {
  const sorted = sortDiffs(diffs)
  const sections = [
    {
      title: 'Major changes',
      items: sorted.filter(isMajorChange),
    },
    {
      title: 'Minor changes',
      items: sorted.filter(isMinorChange),
    },
    {
      title: 'Patch changes',
      items: sorted.filter(isPatchChange),
    },
  ]

  return sections
    .filter((section) => section.items.length > 0)
    .flatMap(formatSection)
    .join('\n\n')
}

function formatSection(section: { title: string; items: Diff[] }): string {
  return dedent`
    **${section.title}**

    ${section.items
      .map((diff) => {
        const op = diff.op
        switch (op) {
          case 'add':
            return `- Added ${diff.next.kind} \`${diff.next.id}\``
          case 'delete':
            return `- Deleted ${diff.prev.kind} \`${diff.prev.id}\``
          case 'deprecate':
            return `- Deprecated ${diff.next.kind} \`${diff.next.id}\``
          case 'update':
            return `- Updated ${diff.next.kind} \`${diff.next.id}\``
        }
      })
      .join('\n')}
  `
}

function gitDiffFiles(paths: string[] = []): string[] {
  return execSync(`git diff --name-only -- ${paths.join(' ')}`, { encoding: 'utf-8' })
    .trim()
    .split('\n')
}

function isMajorChange(diff: Diff): boolean {
  return diff.op === 'delete'
}

function isMinorChange(diff: Diff): boolean {
  return diff.op === 'add' || diff.op === 'deprecate'
}

function isPatchChange(diff: Diff): boolean {
  return diff.op === 'update'
}

const kindOrder = ['icon', 'logo']
const opOrder = ['add', 'delete', 'deprecate', 'update']

function sortDiffs(diffs: Diff[]): Diff[] {
  return diffs.toSorted((a, b) => {
    if (a.op !== b.op) {
      return opOrder.indexOf(a.op) - opOrder.indexOf(b.op)
    }

    if ('next' in a && 'next' in b) {
      return kindOrder.indexOf(a.next.kind) - kindOrder.indexOf(b.next.kind)
    }

    if ('prev' in a && 'prev' in b) {
      return kindOrder.indexOf(a.prev.kind) - kindOrder.indexOf(b.prev.kind)
    }
    return 0
  })
}
