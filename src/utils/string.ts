/**
 * Based on https://github.com/sveltejs/kit/blob/9a4a41170ab3e17f947eb4a67944958b22da4236/packages/kit/src/core/sync/utils.js#L48
 */

import type { Kind } from '#src/manifest.ts'

type DedentMap = WeakMap<TemplateStringsArray, { strings: string[]; indents: string[] }>
const dedentMap: DedentMap = new WeakMap()

/**
 * Allows indenting template strings without the extra indentation ending up in the result.
 * Still allows indentation of lines relative to one another in the template string.
 */
export function dedent(strings: TemplateStringsArray, ...values: any[]) {
  let dedented = dedentMap.get(strings)

  if (!dedented) {
    const indentation: string = (/\n?([ \t]*)/.exec(strings[0]) as RegExpExecArray)[1]
    const pattern = new RegExp(`^${indentation}`, 'gm')

    dedented = {
      strings: strings.map((str) => str.replace(pattern, '')),
      indents: [],
    }

    let current = '\n'

    for (let i = 0; i < values.length; i += 1) {
      const string = dedented.strings[i]
      const match = /\n([ \t]*)$/.exec(string)

      if (match) current = match[0]
      dedented.indents[i] = current
    }

    dedentMap.set(strings, dedented)
  }

  let str = dedented.strings[0]
  for (let i = 0; i < values.length; i += 1) {
    str += String(values[i]).replace(/\n/g, dedented.indents[i]) + dedented.strings[i + 1]
  }

  str = str.trim()

  return str
}

export function toCamelCase(str: string): string {
  return str.replace(/-+\w/g, (s) => s.charAt(s.length - 1).toUpperCase())
}

export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/-+/g, '_')
    .toLowerCase()
}

export function toPascalCase(str: string): string {
  return toCamelCase(str).replace(/^\w/, (s) => s.toUpperCase())
}

export function toExportedName(assetId: string, kind: Kind = 'icon'): string {
  return toCamelCase(`${assetId}-${kind}`)
}

export function trimTrailingWhitespace(str: string): string {
  return str
    .split('\n')
    .map((line) => line.replace(/\s+$/, ''))
    .join('\n')
}
