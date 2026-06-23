import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
  copyFileSync,
} from 'node:fs'
import { join, dirname } from 'node:path'
import type { Manifest } from '#src/manifest.ts'
import { sortObjectKeys } from './object.ts'
import { trimTrailingWhitespace } from './string.ts'

export function copyRecursive(src: string, dest: string) {
  if (!existsSync(src)) {
    return []
  }

  const files: string[] = []

  function walk(from: string, to: string) {
    if (statSync(from).isDirectory()) {
      readdirSync(from).forEach((file) => {
        walk(join(from, file), join(to, file))
      })
    } else {
      mkdirp(dirname(to))
      copyFileSync(from, to)
      files.push(to)
    }
  }

  walk(src, dest)

  return files
}

export function mkdirp(path: string) {
  mkdirSync(path, { recursive: true })
}

export function rmrf(path: string) {
  if (existsSync(path)) {
    rmSync(path, { recursive: true, force: true })
  }
}

export function readFile(path: string) {
  return readFileSync(path, 'utf-8')
}

export function writeFile(path: string, data: string) {
  writeFileSync(path, trimTrailingWhitespace(data.trim()) + '\n', 'utf-8')
}

export function readManifest(path: string): Manifest {
  if (!existsSync(path) || !statSync(path).isFile()) {
    throw new Error(`Manifest not found at path: ${path}`)
  }

  return JSON.parse(readFile(path)) as Manifest
}

export function writeManifest(path: string, manifest: Manifest) {
  manifest = sortObjectKeys(manifest)
  manifest.assets.sort((a, b) => a.name.localeCompare(b.name))
  writeFile(path, JSON.stringify(manifest, null, 2) + '\n')
}
