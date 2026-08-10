import type { ExecSyncOptions } from 'node:child_process'
import { describe, expect, test, vi } from 'vitest'
import { type Diff, difference, formatDiff } from '#src/changes.ts'
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

describe('formatDiff', () => {
  test('lists patch changes', () => {
    const diff = [
      {
        op: 'update',
        prev: { id: 'foo', kind: 'icon' } as Icon,
        next: { id: 'foo', kind: 'icon' } as Icon,
      },
    ]

    expect(formatDiff(diff)).toEqual(
      dedent`
        **Patch changes**

        - Updated icon \`foo\`
      `,
    )
  })
  test('lists minor changes', () => {
    const diff: Diff[] = [
      { op: 'add', next: { id: 'foo', kind: 'icon' } as Icon },
      {
        op: 'deprecate',
        next: { id: 'bar', kind: 'icon', deprecated: true } as Icon,
        prev: { id: 'bar', kind: 'icon' } as Icon,
      },
    ]
    const updated = formatDiff(diff)

    expect(updated).toEqual(
      dedent`
        **Minor changes**

        - Added icon \`foo\`
        - Deprecated icon \`bar\`
      `,
    )
  })

  test('lists major changes', () => {
    const diff: Diff[] = [
      { op: 'delete', prev: { id: 'foo', kind: 'icon' } as Icon },
      {
        op: 'deprecate',
        next: { id: 'bar', kind: 'icon', deprecated: true } as Icon,
        prev: { kind: 'icon', id: 'bar' } as Icon,
      },
    ]

    expect(formatDiff(diff)).toEqual(
      dedent`
        **Major changes**

        - Deleted icon \`foo\`

        **Minor changes**

        - Deprecated icon \`bar\`
      `,
    )
  })

  test('lists all changes in order', () => {
    const diff: Diff[] = [
      { op: 'delete', prev: { id: 'foo', kind: 'icon' } as Icon },
      {
        op: 'deprecate',
        next: { id: 'bar', kind: 'icon', deprecated: true } as Icon,
        prev: { kind: 'icon', id: 'bar' } as Icon,
      },
      { op: 'add', next: { id: 'baz', kind: 'icon' } as Icon },
      {
        op: 'update',
        prev: { id: 'qux', kind: 'icon' } as Icon,
        next: { id: 'qux', kind: 'icon' } as Icon,
      },
    ]

    expect(formatDiff(diff)).toEqual(
      dedent`
        **Major changes**

        - Deleted icon \`foo\`

        **Minor changes**

        - Added icon \`baz\`
        - Deprecated icon \`bar\`

        **Patch changes**

        - Updated icon \`qux\`
      `,
    )
  })
})
