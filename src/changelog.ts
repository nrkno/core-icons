import { execSync } from 'node:child_process'
import { marked, type Token } from 'marked'
import { format } from 'oxfmt'
import type { Asset } from '#src/manifest.ts'
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

export function parseChangelog(content: string) {
  return marked.lexer(content)
}

export async function addOrUpdateUnreleasedEntry(content: string, diffs: Diff[]): Promise<string> {
  if (diffs.length === 0) {
    return content
  }
  let tokens = parseChangelog(content)

  let unreleasedStart = -1
  let unreleasedEnd = tokens.length
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (isHeading2(token) && token.text === 'Unreleased changes') {
      unreleasedStart = i
    } else if (unreleasedStart > -1 && isHeading2(token)) {
      unreleasedEnd = i - 1
      break
    }
  }

  const newEntry = parseChangelog(dedent`
    ## Unreleased changes
    
    ${generateChangelogEntry(diffs)}
  `)

  if (unreleasedStart === -1) {
    tokens.unshift(...newEntry, { type: 'space', raw: '\n\n' })
  } else {
    tokens.splice(unreleasedStart, unreleasedEnd - unreleasedStart, ...newEntry)
  }

  return tokensToMarkdown(tokens)
}

export function versionChangeFromChangelog(content: string): 'major' | 'minor' | 'patch' | null {
  const tokens = parseChangelog(content)
  for (const token of tokens) {
    // first heading level 2 should be "Unreleased changes", and the following heading level 3 should indicate the next version bump
    if (isHeading2(token) && token.text !== 'Unreleased changes') {
      return null
    }
    if (isHeading3(token) && token.text === 'Major changes') {
      return 'major'
    }
    if (isHeading3(token) && token.text === 'Minor changes') {
      return 'minor'
    }
    if (isHeading3(token) && token.text === 'Patch changes') {
      return 'patch'
    }
  }
  return null
}

export async function versionUnreleasedChanges(content: string, version: string): Promise<string> {
  return formatMarkdown(content.replace(/## Unreleased changes/, `## ${version}`))
}

function isHeading2(token: Token): token is Token & { type: 'heading'; depth: 2 } {
  return token.type === 'heading' && token.depth === 2
}

function isHeading3(token: Token): token is Token & { type: 'heading'; depth: 3 } {
  return token.type === 'heading' && token.depth === 3
}

async function tokensToMarkdown(tokens: Token[]): Promise<string> {
  let md = tokens.map((token) => token.raw).join('')
  return formatMarkdown(md)
}

async function formatMarkdown(md: string): Promise<string> {
  const { code, errors } = await format('changelog.md', md)
  if (errors.length > 0) {
    throw new Error(`Failed to format changelog: ${errors.map((e) => e.message).join(', ')}`)
  }
  return code
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

export function generateChangelogEntry(diffs: Diff[]): string {
  const sorted = sortDiffs(diffs)
  const sections = [
    {
      title: 'Major changes',
      items: sorted.filter((diff) => diff.op === 'delete'),
    },
    {
      title: 'Minor changes',
      items: sorted.filter((diff) => diff.op === 'add' || diff.op === 'deprecate'),
    },
    {
      title: 'Patch changes',
      items: sorted.filter((diff) => diff.op === 'update'),
    },
  ]

  return sections
    .filter((section) => section.items.length > 0)
    .flatMap(
      (section) =>
        dedent`
          ### ${section.title}

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
                default:
                  throw new Error(`Unknown diff operation: ${op satisfies never}`)
              }
            })
            .join('\n')}
        `,
    )
    .join('\n\n')
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

export function gitDiffFiles(paths: string[] = []): string[] {
  return execSync(`git diff --name-only -- ${paths.join(' ')}`, { encoding: 'utf-8' })
    .trim()
    .split('\n')
}

export function isEqualSvg(a: string, b: string): boolean {
  return a === b
}

export function isEqualAsset(a: Asset, b: Asset): boolean {
  return (
    a.componentId === b.componentId &&
    a.componentNodeId === b.componentNodeId &&
    a.name === b.name &&
    a.kind === b.kind &&
    a.file === b.file &&
    a.deprecated === b.deprecated &&
    a.renamedTo === b.renamedTo
  )
}
