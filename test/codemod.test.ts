import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { dedent } from '#utils/string.ts'
// eslint-disable-next-line -- plain JS on purpose, see bin/codemod.js
import { transform } from '../bin/codemod.js'

const map = JSON.parse(readFileSync(new URL('../bin/codemod-map.json', import.meta.url), 'utf-8'))

describe('codemod', () => {
  it('renames imports and usages from the main entry point', () => {
    const result = transform(
      dedent`
        import { nrkSearch, nrkBell } from '@nrk/core-icons'
        el.innerHTML = nrkSearch + nrkBell
      `,
      map,
    )
    expect(result.changed).toBe(true)
    expect(result.warnings).toEqual([])
    expect(result.code).toBe(dedent`
      import { magnifyingGlassIcon, bellIcon } from '@nrk/core-icons'
      el.innerHTML = magnifyingGlassIcon + bellIcon
    `)
  })

  it('keeps aliases and does not touch aliased usages', () => {
    const result = transform(
      dedent`
        import { nrkSearch as searchIcon } from '@nrk/core-icons'
        el.innerHTML = searchIcon
      `,
      map,
    )
    expect(result.code).toBe(dedent`
      import { magnifyingGlassIcon as searchIcon } from '@nrk/core-icons'
      el.innerHTML = searchIcon
    `)
  })

  it('handles multiline import clauses', () => {
    const result = transform("import {\n  nrkClose,\n  nrkHelp,\n} from '@nrk/core-icons'\n", map)
    expect(result.code).toContain(
      "import { xmarkIcon, questionMarkCircleIcon } from '@nrk/core-icons'",
    )
  })

  it('dedupes when two old names map to the same new name', () => {
    const result = transform("import { nrkNote2, nrkMediaBeamNote } from '@nrk/core-icons'", map)
    expect(result.code).toBe("import { musicNotesIcon } from '@nrk/core-icons'")
  })

  it('renames logo imports with the Logo suffix', () => {
    const result = transform("import { nrkLogoNrk3 } from '@nrk/core-icons/logo'", map)
    expect(result.code).toBe("import { nrk3Logo } from '@nrk/core-icons/logo'")
  })

  it('moves logo/large imports to the logo entry point', () => {
    const result = transform("import { nrkLogoLargeNrkTv } from '@nrk/core-icons/logo/large'", map)
    expect(result.code).toBe("import { nrkTvLargeLogo } from '@nrk/core-icons/logo'")
  })

  it('moves expressive icons that were merged into the effective entry point', () => {
    const result = transform(
      "import { nrkBellExpressive, nrkRadioExpressiveActive } from '@nrk/core-icons/expressive'",
      map,
    )
    expect(result.code).toBe(dedent`
      import { bellExpressiveIcon } from '@nrk/core-icons/expressive'
      import { radioButtonCheckedIcon } from '@nrk/core-icons'
    `)
  })

  it('leaves removed icons untouched but warns', () => {
    const result = transform("import { nrkSpinner, nrkBell } from '@nrk/core-icons'", map)
    expect(result.code).toBe("import { nrkSpinner, bellIcon } from '@nrk/core-icons'")
    expect(result.warnings).toHaveLength(1)
    expect(result.warnings[0]).toContain('nrkSpinner')
  })

  it('leaves JSX imports untouched but suggests the string export', () => {
    const code = "import { NrkSearch } from '@nrk/core-icons/jsx'"
    const result = transform(code, map)
    expect(result.changed).toBe(false)
    expect(result.warnings[0]).toContain('magnifyingGlassIcon')
    expect(result.warnings[0]).toContain('@nrk/core-icons')
  })

  it('rewrites type-only imports', () => {
    const result = transform("import type { nrkSearch } from '@nrk/core-icons'", map)
    expect(result.code).toBe("import type { magnifyingGlassIcon } from '@nrk/core-icons'")
  })

  it('preserves inline type specifiers', () => {
    const result = transform("import { type nrkSearch, nrkBell } from '@nrk/core-icons'", map)
    expect(result.code).toBe("import { type magnifyingGlassIcon, bellIcon } from '@nrk/core-icons'")
  })

  it('strips comments inside the clause without dropping specifiers', () => {
    const result = transform(
      "import { nrkSearch /* magnifier */, nrkBell } from '@nrk/core-icons'",
      map,
    )
    expect(result.code).toBe("import { magnifyingGlassIcon, bellIcon } from '@nrk/core-icons'")
  })

  it('leaves statements with unsupported syntax untouched and warns', () => {
    const code = 'import { "nrkSearch" as search } from \'@nrk/core-icons\''
    const result = transform(code, map)
    expect(result.changed).toBe(false)
    expect(result.warnings[0]).toContain('migrate manually')
  })

  it('does not crash on namespace imports from jsx entry points', () => {
    const result = transform("import * as icons from '@nrk/core-icons/jsx'", map)
    expect(result.changed).toBe(false)
    expect(result.warnings[0]).toContain('manually')
  })

  it('warns on default and namespace imports', () => {
    const result = transform("import * as icons from '@nrk/core-icons'", map)
    expect(result.changed).toBe(false)
    expect(result.warnings[0]).toContain('manually')
  })

  it('warns on require calls', () => {
    const result = transform("const { nrkBell } = require('@nrk/core-icons')", map)
    expect(result.changed).toBe(false)
    expect(result.warnings[0]).toContain('require')
  })

  it('rewrites re-exports', () => {
    const result = transform("export { nrkSearch } from '@nrk/core-icons'", map)
    expect(result.code).toBe("export { magnifyingGlassIcon } from '@nrk/core-icons'")
  })

  it('does not touch unrelated imports', () => {
    const code = "import { useState } from 'react'\nimport { nrk } from '@nrk/other-package'"
    const result = transform(code, map)
    expect(result.changed).toBe(false)
    expect(result.warnings).toEqual([])
  })

  it('rewrites astro frontmatter imports and template usages', () => {
    const result = transform(
      dedent`
        ---
        import { nrkLogoNrk } from '@nrk/core-icons/logo';
        ---

        <Fragment set:html={nrkLogoNrk} />
      `,
      map,
    )
    expect(result.changed).toBe(true)
    expect(result.warnings).toEqual([])
    expect(result.code).toBe(dedent`
      ---
      import { nrkLogo } from '@nrk/core-icons/logo';
      ---

      <Fragment set:html={nrkLogo} />
    `)
  })

  it('leaves already-migrated code alone', () => {
    const code = "import { magnifyingGlassIcon } from '@nrk/core-icons'"
    const result = transform(code, map)
    expect(result.changed).toBe(false)
    expect(result.warnings).toEqual([])
  })
})
