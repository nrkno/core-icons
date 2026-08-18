import { describe, test, expect } from 'vitest'
import { normalizePathData } from '#utils/path-data.ts'

describe('normalizePathData', () => {
  test('leaves paths without a closepath untouched', () => {
    const d = 'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8'
    expect(normalizePathData(d)).toBe(d)
  })

  test('leaves a relative moveto that does not follow a closepath untouched', () => {
    const d = 'M12 8h4m2 2h4'
    expect(normalizePathData(d)).toBe(d)
  })

  test('leaves an absolute moveto after a closepath untouched', () => {
    const d = 'M0 0h4v4zM10 10h2v2z'
    expect(normalizePathData(d)).toBe(d)
  })

  test('anchors a relative moveto after a closepath to the sub-path start', () => {
    // Sub-path starts at (0,0); the pen is at (0,4) when `z` runs. The moveto must resolve
    // against (0,0) -> (1,1), not against (0,4).
    expect(normalizePathData('M0 0h4v4h-4zm1 1h2v2h-2z')).toBe('M0 0h4v4h-4zM1 1h2v2h-2z')
  })

  test('accumulates correctly across several closed sub-paths', () => {
    // Each moveto resolves against the sub-path that was just closed: (0,0) -> (1,1) -> (2,2).
    const out = normalizePathData('M0 0h4v4h-4zm1 1h2v2h-2zm1 1h1v1h-1z')
    expect(out).toBe('M0 0h4v4h-4zM1 1h2v2h-2zM2 2h1v1h-1z')
  })

  test('converts implicit trailing pairs of a moveto into an explicit lineto', () => {
    // `m1 1 2 0` = moveto (1,1) then a relative lineto (2,0).
    expect(normalizePathData('M0 0h4v4h-4zm1 1 2 0z')).toBe('M0 0h4v4h-4zM1 1l 2 0z')
  })

  test('preserves the untouched remainder byte-for-byte', () => {
    const d = 'M0 0h4v4h-4zm1 1c.5.5 1 1 1.5 1.5z'
    // Only the `m1 1` becomes `M1 1`; the curve keeps svgo's compact formatting verbatim.
    expect(normalizePathData(d)).toBe('M0 0h4v4h-4zM1 1c.5.5 1 1 1.5 1.5z')
  })

  test('handles negative relative deltas', () => {
    // Sub-path starts at (5,5), so `m-1-1` resolves to (4,4).
    expect(normalizePathData('M5 5h4v4h-4zm-1-1h2v2h-2z')).toBe('M5 5h4v4h-4zM4 4h2v2h-2z')
  })

  test('omits the separator when the y coordinate is negative', () => {
    expect(normalizePathData('M0 0h4v4h-4zm1-2h2v2h-2z')).toBe('M0 0h4v4h-4zM1-2h2v2h-2z')
  })

  test('fixes the real settings icon, which broke in Compose', () => {
    const d =
      'm20.082 3.999-.836 3.031.69 1.193 3.038.788v5.977l-3.038.798-.738 1.278.328 3.253-4.29 2.418-2.477-1.975-1.447.006-2.202 2.238-5.177-2.99.826-3.03-.684-1.184-3.05-.815V9.008l3.06-.783.705-1.233-.62-3.205 4.863-2.749 2.265 2.205h1.392l1.683-1.705.546-.552zm-6.557 1.244h-3.04l-.292-.284z'
    const out = normalizePathData(d)
    // The sub-path opens at (20.082, 3.999), so the moveto resolves to (13.525, 5.243).
    expect(out).toContain('M13.525 5.243')
    expect(out).not.toContain('zm-6.557 1.244')
  })

  test('is idempotent', () => {
    const d = 'M0 0h4v4h-4zm1 1h2v2h-2z'
    const once = normalizePathData(d)
    expect(normalizePathData(once)).toBe(once)
  })
})
