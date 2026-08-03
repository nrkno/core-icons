import type { Manifest, Asset } from '#src/manifest.ts'
import { writeFile } from '#utils/fs.ts'
import { dedent, toExportedName } from '#utils/string.ts'
import { toInlinedSvg } from '#utils/svg.ts'

export function generateTypescript(manifest: Manifest) {
  const icons = manifest.assets.filter((asset) => asset.kind === 'icon')
  const logos = manifest.assets.filter((asset) => asset.kind === 'logo')

  writeGenerated(
    'lib/effective.ts',
    dedent`
      ${generateFromManifest(icons.filter(({ variant }) => variant === 'effective'))}
      export * from './compat/compat-effective.ts';
    `,
  )
  writeGenerated(
    'lib/expressive.ts',
    dedent`
      ${generateFromManifest(icons.filter(({ variant }) => variant === 'expressive'))}
      export * from './compat/compat-expressive.ts';
    `,
  )
  writeGenerated(
    'lib/logo.ts',
    dedent`
      ${generateFromManifest(logos)}
      export * from './compat/compat-logo.ts';
    `,
  )
}

function generateFromManifest(assets: Asset[]) {
  const output: string[] = []

  for (const asset of assets) {
    let code = ''
    if (asset.deprecated) {
      code += `/** @deprecated `
      if (asset.renamedTo) {
        code += `Use \`${toExportedName(asset.renamedTo, asset.kind)}\` instead `
      }
      code += `*/\n`
    }

    code += `export const ${toExportedName(asset.id, asset.kind)} = '${toInlinedSvg(asset.file)}';`

    output.push(code)
  }

  return `${output.join('\n')}\n`
}

export function writeGenerated(path: string, code: string) {
  writeFile(
    path,
    dedent`
      // This file is auto-generated. Do not edit!
      ${code}
    `,
  )
}
