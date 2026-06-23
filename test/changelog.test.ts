import type { ExecSyncOptions } from 'node:child_process'
import { describe, expect, test, vi } from 'vitest'
import {
  addOrUpdateUnreleasedEntry,
  Diff,
  difference,
  versionChangeFromChangelog,
  versionUnreleasedChanges,
} from '#src/changelog.ts'
import { Icon } from '#src/manifest.ts'
import { dedent } from '#utils/string.ts'

vi.mock('node:child_process', async (importOriginal) => {
  const actual = (await importOriginal()) as typeof import('node:child_process')
  return {
    ...actual,
    execSync: (_command: string, options: ExecSyncOptions) =>
      options?.encoding === 'utf-8' ? '' : Buffer.from(''),
  }
})

describe('difference()', () => {
  test('detects new icons', async () => {
    const prev: Icon[] = [
      {
        id: 'arrow-left',
        componentId: 'arrow-left',
        componentNodeId: 'arrow-left',
        componentUpdatedAt: 0,
        variant: 'effective',
        name: 'arrow-left',
        kind: 'icon',
        file: 'lib/icons/arrow-left.svg',
      },
    ]
    const next: Icon[] = [
      {
        id: 'arrow-left',
        componentId: 'arrow-left',
        componentNodeId: 'arrow-left',
        componentUpdatedAt: 0,
        variant: 'effective',
        name: 'arrow-left',
        kind: 'icon',
        file: 'lib/icons/arrow-left.svg',
      },
      {
        id: 'arrow-left-expressive',
        componentId: 'arrow-left-expressive',
        componentNodeId: 'arrow-left-expressive',
        componentUpdatedAt: 0,
        variant: 'expressive',
        name: 'arrow-left',
        kind: 'icon',
        file: 'lib/icons/arrow-left-expressive.svg',
      },
    ]
    const diff = difference(prev, next)
    expect(diff).toHaveLength(1)
    expect(diff[0]).toEqual(expect.objectContaining({ op: 'add' }))
  })
  test('detects deleted icons', async () => {
    const prev: Icon[] = [
      {
        id: 'arrow-left',
        componentId: 'arrow-left',
        componentNodeId: 'arrow-left',
        componentUpdatedAt: 0,
        variant: 'effective',
        name: 'arrow-left',
        kind: 'icon',
        file: 'lib/icons/arrow-left.svg',
      },
      {
        id: 'arrow-left-expressive',
        componentId: 'arrow-left-expressive',
        componentNodeId: 'arrow-left-expressive',
        componentUpdatedAt: 0,
        variant: 'expressive',
        name: 'arrow-left',
        kind: 'icon',
        file: 'lib/icons/arrow-left-expressive.svg',
      },
    ]

    const next: Icon[] = [
      {
        id: 'arrow-left',
        componentId: 'arrow-left',
        componentNodeId: 'arrow-left',
        componentUpdatedAt: 0,
        variant: 'effective',
        name: 'arrow-left',
        kind: 'icon',
        file: 'lib/icons/arrow-left.svg',
      },
    ]
    const diff = difference(prev, next)
    expect(diff).toHaveLength(1)
    expect(diff[0]).toEqual(expect.objectContaining({ op: 'delete' }))
  })
  test('detects renamed icons', async () => {
    const prev: Icon[] = [
      {
        id: 'media-speed-1x',
        componentId: 'foo123',
        componentNodeId: '123:456',
        componentUpdatedAt: 0,
        variant: 'effective',
        name: 'media-speed-1x',
        kind: 'icon',
        file: 'lib/icons/media-speed-1x.svg',
      },
    ]

    const next: Icon[] = [
      {
        id: 'multiplier-1',
        componentId: 'foo123',
        componentNodeId: '123:456',
        componentUpdatedAt: 0,
        variant: 'effective',
        name: 'multiplier-1',
        kind: 'icon',
        file: 'lib/icons/multiplier-1.svg',
      },
    ]

    const diff = difference(prev, next)
    expect(diff).toHaveLength(1)
    expect(diff[0]).toEqual(expect.objectContaining({ op: 'update' }))
  })
  test('detects deprecated icons', async () => {
    const prev: Icon[] = [
      {
        id: 'arrow-left',
        componentId: 'arrow-left',
        componentNodeId: 'arrow-left',
        componentUpdatedAt: 0,
        variant: 'effective',
        name: 'arrow-left',
        kind: 'icon',
        file: 'lib/icons/arrow-left.svg',
      },
    ]

    const next: Icon[] = [
      {
        id: 'arrow-left',
        componentId: 'arrow-left',
        componentNodeId: 'arrow-left',
        componentUpdatedAt: 0,
        variant: 'effective',
        name: 'arrow-left',
        kind: 'icon',
        file: 'lib/icons/arrow-left.svg',

        deprecated: true,
      },
    ]

    const diff = difference(prev, next)
    expect(diff).toHaveLength(1)
    expect(diff[0]).toEqual(expect.objectContaining({ op: 'deprecate' }))
  })
})

describe('addOrUpdateUnreleasedEntry', () => {
  test('adds unreleased entry if missing', async () => {
    let changelog =
      dedent`
        ## v1.2.3

        ### Major changes

        - Deleted icon \`foo\`

        ## foobar
      ` + '\n'

    const diff: Diff[] = [{ op: 'add', next: { id: 'foo', kind: 'icon' } as Icon }]
    const updated = await addOrUpdateUnreleasedEntry(changelog, diff)

    expect(updated).toEqual(
      dedent`
        ## Unreleased changes

        ### Minor changes

        - Added icon \`foo\`

        ${changelog}
      ` + '\n',
    )
  })

  test('replaces existing unreleased entry', async () => {
    let changelog =
      dedent`
        ## Unreleased changes

        ### Major changes

        - Deleted icon \`foo\`

        ## v1.2.3

        ### Patch changes

        - Updated icon \`bar\`
      ` + '\n'

    const diff: Diff[] = [
      { op: 'delete', prev: { id: 'foo', kind: 'icon' } as Icon },
      {
        op: 'deprecate',
        next: { id: 'bar', kind: 'icon', deprecated: true } as Icon,
        prev: { kind: 'icon', id: 'bar' } as Icon,
      },
    ]
    const updated = await addOrUpdateUnreleasedEntry(changelog, diff)

    expect(updated).toEqual(
      dedent`
        ## Unreleased changes

        ### Major changes

        - Deleted icon \`foo\`

        ### Minor changes

        - Deprecated icon \`bar\`

        ## v1.2.3

        ### Patch changes

        - Updated icon \`bar\`
      ` + '\n',
    )
  })
})

describe('parse version change from changelog', () => {
  test('returns null if no unreleased entry', () => {
    const changelog =
      dedent`
        ## v1.2.3

        ### Major changes

        - Deleted icon \`foo\`
      ` + '\n'

    expect(versionChangeFromChangelog(changelog)).toBeNull()
  })

  test('parses diff from unreleased entry: major', () => {
    const changelog = dedent`
        ## Unreleased changes

        ### Major changes

        - Deleted icon \`foo\`

        ### Minor changes

        - Deprecated icon \`bar\`

        ### Patch changes

        - Updated icon \`bar\`

        ## v1.2.3

        ### Patch changes

        - Updated icon \`bar\`
      `

    expect(versionChangeFromChangelog(changelog)).toEqual('major')
  })

  test('parses diff from unreleased entry: minor', () => {
    const changelog = dedent`
        ## Unreleased changes

        ### Minor changes

        - Deprecated icon \`bar\`

        ### Patch changes

        - Updated icon \`bar\`

        ## v1.2.3

        ### Patch changes

        - Updated icon \`bar\`
      `

    expect(versionChangeFromChangelog(changelog)).toEqual('minor')
  })
  test('parses diff from unreleased entry: patch', () => {
    const changelog = dedent`
        ## Unreleased changes

        ### Patch changes

        - Updated icon \`bar\`

        ## v1.2.3

        ### Patch changes

        - Updated icon \`bar\`
      `

    expect(versionChangeFromChangelog(changelog)).toEqual('patch')
  })
})

describe('versionUnreleasedChanges', () => {
  test('Updates heading and removes diff comment', async () => {
    const changelog =
      dedent`
        ## Unreleased changes

        ### Major changes

        - Deleted icon \`foo\`
      ` + '\n'

    const versioned = await versionUnreleasedChanges(changelog, 'v1.2.3')
    expect(versioned).toEqual(
      dedent`
        ## v1.2.3

        ### Major changes

        - Deleted icon \`foo\`
      ` + '\n',
    )
  })
})
