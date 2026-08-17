// Generates bin/codemod-map.json from the compat sources in lib/compat/.
// The @deprecated JSDoc comments are the source of truth for old -> new names,
// including cross-entry-point redirects (e.g. expressive icons merged into effective).
// Re-run after `core-icons sync-compat`: node scripts/generate-codemod-map.ts

import { removedLogos } from '#utils/backwards-compatibility.ts'
import { readFile, writeFile } from '#utils/fs.ts'

type Rename = { name: string; source?: string }

type EntryMap = {
  renames: Record<string, Rename>
  removed: string[]
}

const STRING_ENTRIES = [
  { file: 'lib/compat/compat-effective.ts', source: '@nrk/core-icons' },
  { file: 'lib/compat/compat-expressive.ts', source: '@nrk/core-icons/expressive' },
  { file: 'lib/compat/compat-logo.ts', source: '@nrk/core-icons/logo' },
  { file: 'lib/compat/compat-logo-large.ts', source: '@nrk/core-icons/logo/large' },
] as const

const JSX_ENTRIES = [
  {
    file: 'lib/compat/compat-jsx-effective.tsx',
    source: '@nrk/core-icons/jsx',
    strings: '@nrk/core-icons',
  },
  {
    file: 'lib/compat/compat-jsx-expressive.tsx',
    source: '@nrk/core-icons/jsx/expressive',
    strings: '@nrk/core-icons/expressive',
  },
  {
    file: 'lib/compat/compat-jsx-logo.tsx',
    source: '@nrk/core-icons/jsx/logo',
    strings: '@nrk/core-icons/logo',
  },
  {
    file: 'lib/compat/compat-jsx-logo-large.tsx',
    source: '@nrk/core-icons/jsx/logo/large',
    strings: '@nrk/core-icons/logo/large',
  },
] as const

const DEPRECATION =
  /\/\*\* @deprecated(?: Use `(?<replacement>\w+)`(?: from `(?<source>[^`]+)`)? instead)? \*\/\s*export const (?<name>\w+)/g

// Successors designated by the v19.1.0 release notes but not (yet) recorded in the
// compat JSDoc: circle-three-quarter replaces nrk-progress, and circle-half-dotted
// replaces nrk-spinner in the loading context. Remove once the Figma component
// descriptions list them under "Tidligere navn" and sync-compat picks them up.
const SUCCESSORS: Record<string, Record<string, string>> = {
  '@nrk/core-icons': {
    nrkProgress: 'circleThreeQuarterIcon',
    nrkSpinner: 'circleHalfDottedIcon',
  },
  '@nrk/core-icons/expressive': {
    nrkProgressExpressive: 'circleThreeQuarterExpressiveIcon',
    nrkSpinnerExpressive: 'circleHalfDottedExpressiveIcon',
  },
}

function parseCompatFile(file: string, source: string): EntryMap {
  const entry: EntryMap = { renames: {}, removed: [] }
  for (const match of readFile(file).matchAll(DEPRECATION)) {
    const { name, replacement, source: replacementSource } = match.groups!
    const successor = SUCCESSORS[source]?.[name]
    if (successor) {
      entry.renames[name] = { name: successor }
    } else if (!replacement) {
      entry.removed.push(name)
    } else {
      entry.renames[name] = replacementSource
        ? { name: replacement, source: replacementSource }
        : { name: replacement }
    }
  }
  if (source === '@nrk/core-icons/logo') {
    entry.removed.push(...removedLogos)
  }
  return entry
}

const map: Record<string, EntryMap> = {}
for (const { file, source } of STRING_ENTRIES) {
  map[source] = parseCompatFile(file, source)
}

// JSX entry points are deprecated wholesale without in-package replacements. Map each
// PascalCase component to the string export a consumer should migrate to, derived from
// the camelCase mapping of the corresponding string entry point.
for (const { file, source, strings } of JSX_ENTRIES) {
  const stringEntry = map[strings]
  const entry: EntryMap = { renames: {}, removed: [] }
  for (const match of readFile(file).matchAll(DEPRECATION)) {
    const { name } = match.groups!
    const camelCased = name.charAt(0).toLowerCase() + name.slice(1)
    const rename = stringEntry.renames[camelCased]
    if (rename) {
      entry.renames[name] = { name: rename.name, source: rename.source ?? strings }
    } else {
      entry.removed.push(name)
    }
  }
  entry.removed.push(
    ...map[strings].removed.map((name) => name.charAt(0).toUpperCase() + name.slice(1)),
  )
  map[source] = entry
}

writeFile('bin/codemod-map.json', JSON.stringify(map, null, 2))
console.log('Wrote bin/codemod-map.json')
