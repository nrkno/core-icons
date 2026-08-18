#!/usr/bin/env node
// Codemod migrating consumers of @nrk/core-icons to the v19 naming scheme.
// Zero dependencies so it runs via `npx --package=@nrk/core-icons core-icons-codemod`
// without a build step. The old -> new mapping is generated from the compat sources
// by scripts/generate-codemod-map.ts.

import { readdirSync, readFileSync, realpathSync, statSync, writeFileSync } from 'node:fs'
import { extname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const EXTENSIONS = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.mjs',
  '.cjs',
  '.mts',
  '.cts',
  '.vue',
  '.svelte',
  '.astro',
])
const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'build',
  'coverage',
  '.next',
  '.nuxt',
  '.svelte-kit',
  'out',
])

const IMPORT_STATEMENT =
  /(?<keyword>import|export)\s+(?<typekw>type\s+)?(?<clause>[\w$]+|[\w$]+\s*,\s*\{[^}]*\}|\{[^}]*\}|\*\s+as\s+[\w$]+)\s+from\s*(?<quote>['"])(?<source>@nrk\/core-icons(?:\/[\w/-]+)?)\k<quote>/g
const REQUIRE_CALL = /(?:require\s*\(|import\s*\()\s*(['"])(@nrk\/core-icons(?:\/[\w/-]+)?)\1\s*\)/g

/**
 * Rewrites a single file's content.
 * @param {string} code
 * @param {Record<string, {renames: Record<string, {name: string, source?: string}>, removed: string[]}>} map
 * @returns {{code: string, changed: boolean, warnings: string[]}}
 */
export function transform(code, map) {
  const warnings = []
  const bodyRenames = new Map()

  let next = code.replace(IMPORT_STATEMENT, (statement, ...args) => {
    const { keyword, typekw, clause, quote, source } = args.at(-1)
    const entry = map[source]
    if (!entry) return statement

    const specifiers = parseSpecifiers(clause)
    if (!specifiers) {
      warnings.push(
        `Import from \`${source}\` could not be rewritten automatically ` +
          `(default/namespace import or unsupported syntax) — migrate manually.`,
      )
      return statement
    }

    if (source.includes('/jsx')) {
      for (const spec of specifiers) {
        const rename = entry.renames[spec.name]
        if (rename) {
          warnings.push(
            `\`${spec.name}\` from \`${source}\` has no JSX replacement. ` +
              `Migrate to the string export \`${rename.name}\` from \`${rename.source}\` ` +
              `and render it yourself (e.g. dangerouslySetInnerHTML).`,
          )
        } else if (entry.removed.includes(spec.name)) {
          warnings.push(`\`${spec.name}\` from \`${source}\` is removed without a replacement.`)
        }
      }
      return statement
    }

    const kept = []
    const moved = new Map()
    for (const spec of specifiers) {
      const rename = entry.renames[spec.name]
      if (!rename) {
        if (entry.removed.includes(spec.name)) {
          warnings.push(
            `\`${spec.name}\` from \`${source}\` is removed without a replacement. ` +
              `Copy the SVG into your project or pick another icon.`,
          )
        }
        kept.push(render(spec))
        continue
      }
      const renamed = { ...spec, name: rename.name }
      if (!spec.alias) bodyRenames.set(spec.name, rename.name)
      if (rename.source && rename.source !== source) {
        if (!moved.has(rename.source)) moved.set(rename.source, [])
        moved.get(rename.source).push(render(renamed))
      } else {
        kept.push(render(renamed))
      }
    }

    const prefix = `${keyword} ${typekw ? 'type ' : ''}`
    const statements = []
    if (kept.length) {
      statements.push(`${prefix}{ ${dedupe(kept).join(', ')} } from ${quote}${source}${quote}`)
    }
    for (const [target, specs] of moved) {
      statements.push(`${prefix}{ ${dedupe(specs).join(', ')} } from ${quote}${target}${quote}`)
    }
    return statements.join('\n')
  })

  for (const match of code.matchAll(REQUIRE_CALL)) {
    if (map[match[2]]) {
      warnings.push(`\`require\`/dynamic \`import\` of \`${match[2]}\` must be migrated manually.`)
    }
  }

  for (const [oldName, newName] of bodyRenames) {
    next = next.replace(new RegExp(`\\b${oldName}\\b`, 'g'), newName)
  }

  return { code: next, changed: next !== code, warnings }
}

/**
 * Parses a named-import clause into specifiers. Returns null for clauses the
 * codemod does not rewrite (default and namespace imports, or syntax it does
 * not understand — better to leave the statement untouched than drop a specifier).
 * Comments inside the clause are stripped and not preserved in the output.
 */
function parseSpecifiers(clause) {
  const braces = /^\{(?<inner>[^}]*)\}$/.exec(clause.trim())
  if (!braces) return null
  const inner = braces.groups.inner.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
  const specifiers = []
  for (const part of inner
    .split(',')
    .map((p) => p.trim())
    .filter(Boolean)) {
    const match = /^(?<type>type\s+)?(?<name>[\w$]+)(?:\s+as\s+(?<alias>[\w$]+))?$/.exec(part)
    if (!match) return null
    specifiers.push({
      type: match.groups.type ?? '',
      name: match.groups.name,
      alias: match.groups.alias,
    })
  }
  return specifiers
}

function render(spec) {
  return `${spec.type}${spec.name}${spec.alias ? ` as ${spec.alias}` : ''}`
}

function dedupe(specs) {
  return [...new Set(specs)]
}

function* walk(path) {
  const stats = statSync(path)
  if (stats.isFile()) {
    if (EXTENSIONS.has(extname(path))) yield path
    return
  }
  for (const name of readdirSync(path)) {
    if (SKIP_DIRS.has(name)) continue
    yield* walk(join(path, name))
  }
}

function main() {
  const args = process.argv.slice(2)
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Usage: core-icons-codemod [paths...] [--dry]

Rewrites imports of @nrk/core-icons pre-v19 icon names to the new naming scheme.
Renamed identifiers are also replaced in the file body, so review the diff before
committing. JSX imports, removed icons, and require() calls are reported but left
untouched.

  paths   Files or directories to rewrite (default: current directory)
  --dry   Report what would change without writing files`)
    return
  }
  const dry = args.includes('--dry') || args.includes('-d')
  const paths = args.filter((arg) => !arg.startsWith('-'))
  if (!paths.length) paths.push('.')

  const map = JSON.parse(readFileSync(new URL('./codemod-map.json', import.meta.url), 'utf-8'))
  let changedFiles = 0
  let warningCount = 0

  for (const path of paths) {
    for (const file of walk(path)) {
      const code = readFileSync(file, 'utf-8')
      if (!code.includes('@nrk/core-icons')) continue
      const result = transform(code, map)
      if (result.changed) {
        changedFiles++
        if (!dry) writeFileSync(file, result.code, 'utf-8')
        console.log(`${dry ? '[dry] ' : ''}rewrote ${file}`)
      }
      for (const warning of result.warnings) {
        warningCount++
        console.warn(`  warning: ${file}: ${warning}`)
      }
    }
  }

  console.log(
    `\n${changedFiles} file(s) ${dry ? 'would be ' : ''}rewritten, ${warningCount} warning(s).`,
  )
  if (warningCount) {
    console.log(
      'Warnings need manual follow-up — see https://github.com/nrkno/core-icons/blob/main/docs/new-naming-scheme.md',
    )
  }
}

function isMain() {
  try {
    // realpathSync resolves the npm bin symlink so the comparison also works via npx
    return (
      Boolean(process.argv[1]) &&
      import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href
    )
  } catch {
    return false
  }
}

if (isMain()) main()
