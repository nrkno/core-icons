import type { Icon, Logo, Manifest } from '#src/manifest.ts'
import { mkdirp, readFile, rmrf, writeFile } from '#utils/fs.ts'
import { dedent, toPascalCase, toSnakeCase } from '#utils/string.ts'
import { toAndroidVectorXml as toAndroidVector } from '#utils/svg.ts'

const SRC_DIR = 'android/icons/src/main/kotlin/no/nrk/core/icons'
const DRAWABLE_DIR = 'android/icons/src/main/res/drawable'

export async function generateAndroid(manifest: Manifest) {
  const icons: Icon[] = manifest.assets.filter((d) => d.kind === 'icon')
  const logos: Logo[] = manifest.assets.filter((d) => d.kind === 'logo')

  rmrf(DRAWABLE_DIR)
  mkdirp(DRAWABLE_DIR)
  for (const asset of manifest.assets) {
    writeFile(
      `${DRAWABLE_DIR}/${toSnakeCase(asset.id)}.xml`,
      await toAndroidVector(readFile(asset.file)),
    )
  }
  writeFile(
    `${SRC_DIR}/NrkIcons.kt`,
    dedent`
      // This file is auto-generated. Do not edit!
      package no.nrk.core.icons

      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.staticCompositionLocalOf
      import androidx.compose.ui.graphics.painter.Painter
      import androidx.compose.ui.res.painterResource

      val LocalUseExpressiveIcons = staticCompositionLocalOf<Boolean> {
        error("LocalUseExpressiveIcons not found")
      }

      data class NrkIcon(
        val normal: Int,
        val expressive: Int?
      ) {
        @Composable
        fun asPainter(): Painter {
          return painterResource(
            id = if (LocalUseExpressiveIcons.current) {
              expressive ?: normal
            } else {
              normal
            }
          )
        }
      }

      object NrkIcons {
        ${Object.values(Object.groupBy(icons, (icon) => icon.name))
          .map((variants) => {
            const group = Object.groupBy(variants as Icon[], (icon) => icon.variant)
            const effective = group.effective!.at(0)!
            const name = `${toPascalCase(effective.id)}Icon`
            const expressive = group.expressive?.at(0)
            return dedent`
              val ${name} = NrkIcon(
                normal = R.drawable.${toSnakeCase(effective.id)},
                expressive = ${expressive ? `R.drawable.${toSnakeCase(expressive.id)}` : 'null'}
              )
            `
          })
          .join('\n\n')}

          ${logos
            .map((logo) => {
              const name = `${toPascalCase(logo.name)}Logo`
              return dedent`
                val ${name} = NrkIcon(
                  normal = R.drawable.${toSnakeCase(logo.id)},
                  expressive = null
                )
              `
            })
            .join('\n\n')}
      }
    `,
  )
}
