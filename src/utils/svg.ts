import { format } from 'oxfmt'
import { type CustomPlugin, type XastElement, optimize, type PluginConfig } from 'svgo'
import type { ManifestAsset } from '#src/manifest.ts'
import { readFile } from './fs.ts'
import { sortObjectKeys } from './object.ts'
import { normalizePathData } from './path-data.ts'

const basePlugins: PluginConfig[] = [
  // Use default preset
  {
    name: 'preset-default',
    params: {
      overrides: {},
    },
  },
  // Enable removeDimensions to keep viewBox and prune width/height common in figma exports
  'removeDimensions',
  {
    name: 'removeAttrs',
    params: {
      attrs: ['*:fill:none'],
    },
  },
]

const monochromePlugins: PluginConfig[] = [
  {
    name: 'removeAttrs',
    params: {
      attrs: ['*:fill'],
    },
  },
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: [{ fill: 'currentColor' }],
    },
  },
]

export async function optimizeIcon(svg: string): Promise<string> {
  const output = optimize(svg, {
    plugins: [...basePlugins, 'collapseGroups', ...monochromePlugins],
  })
  return pretty(output.data)
}

export async function optimizeLogo(
  svg: string,
  opts: { monochrome?: boolean } = {},
): Promise<string> {
  const plugins = [...basePlugins]
  if (opts.monochrome) {
    plugins.push(...monochromePlugins)
  }

  const output = optimize(svg, { plugins })
  return pretty(output.data)
}

export function optimizeSvg(asset: ManifestAsset, svg: string): Promise<string> {
  if (asset.kind === 'logo') {
    return optimizeLogo(svg, { monochrome: isMonochrome(asset) })
  }
  return optimizeIcon(svg)
}

/**
 * Add width and height attributes to the SVG element in `em` units based on viewBox
 */
const addDimensionsPlugin: CustomPlugin = {
  name: 'addDimensions',
  fn: () => ({
    element: {
      enter: (node, parentNode) => {
        if (isRootNode(parentNode) && isSVGElement(node)) {
          const { width, height } = parseViewBox(node.attributes.viewBox)
          node.attributes.width = toEmUnits(width)
          node.attributes.height = toEmUnits(height)
        }
      },
    },
  }),
}

export function toInlinedSvg(path: string, className?: string): string {
  const code = readFile(path)
  const plugins: PluginConfig[] = ['removeXMLNS', addDimensionsPlugin]
  if (className) {
    plugins.push({
      name: 'addClassesToSVGElement',
      params: {
        classNames: [className],
      },
    })
  }
  const output = optimize(code, { plugins })
  return output.data
}

export function toSvgSymbol(svg: string, id: string): string {
  const plugins: PluginConfig[] = [
    'removeXMLNS',
    addDimensionsPlugin,
    {
      name: 'convertToSymbol',
      fn: () => ({
        element: {
          enter: (node) => {
            if (node.name === 'svg') {
              node.name = 'symbol'
              node.attributes.id = id
              delete node.attributes.width
              delete node.attributes.height
            }
          },
        },
      }),
    },
  ]
  const output = optimize(svg, { plugins })
  return output.data
}

export async function toAndroidVectorXml(svg: string): Promise<string> {
  const output = optimize(svg, {
    plugins: [
      'moveGroupAttrsToElems',
      {
        name: 'convertToAndroidVector',
        fn: () => {
          return {
            element: {
              enter: (node) => {
                if (node.name === 'svg') {
                  node.name = 'vector'
                  const { width, height } = parseViewBox(node.attributes.viewBox)
                  node.attributes = {
                    'xmlns:android': 'http://schemas.android.com/apk/res/android',
                    'android:width': `${width}dp`,
                    'android:height': `${height}dp`,
                    'android:viewportWidth': width.toString(),
                    'android:viewportHeight': height.toString(),
                  }

                  return
                }

                if (node.name === 'path') {
                  node.attributes = toAndroidAttributes(node)
                }
              },
            },
          }
        },
      },
    ],
  })

  return pretty(output.data)
}

function toAndroidAttributes(node: XastElement): Record<string, string> {
  const attrs: Record<string, string> = {}

  if (node.name !== 'path') {
    return attrs
  }

  attrs['android:pathData'] = normalizePathData(node.attributes.d)

  if (!node.attributes.fill || node.attributes.fill === 'currentColor') {
    node.attributes.fill = '#fff0f0f0'
  }

  attrs['android:fillColor'] = node.attributes.fill

  if (node.attributes['fill-rule'] === 'evenodd') {
    attrs['android:fillType'] = 'evenOdd'
  }
  if (node.attributes.opacity) {
    attrs['android:fillAlpha'] = node.attributes.opacity
  }
  return sortObjectKeys(attrs)
}

const nonMonochromeLogoPattern = /(-with-bg|-on-dark|-on-light|-color|-blackwhite)(-large)?$/

export function isMonochrome(asset: Pick<ManifestAsset, 'kind' | 'name'>): boolean {
  if (asset.kind === 'logo' && asset.name.match(nonMonochromeLogoPattern)) {
    return false
  }

  return true
}

async function pretty(input: string): Promise<string> {
  // use oxfmt with `.html` extension to format XML
  const { code, errors } = await format('example.html', input.replace(/></g, '>\n\n<'), {
    bracketSameLine: false,
    singleAttributePerLine: true,
    insertFinalNewline: false,
  })
  if (errors.length) {
    throw new Error(
      `Failed to format Android vector XML: ${errors.map((e) => e.message).join(', ')}`,
    )
  }
  return code
}

function toEmUnits(value: number): string {
  const strValue = new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(value / 16)
  return `${strValue}em`
}

function isSVGElement(node: XastElement): node is XastElement & { name: 'svg' } {
  return node.type === 'element' && node.name === 'svg'
}

function isRootNode(node: any): node is { type: 'root' } {
  return node.type === 'root' && Array.isArray(node.children)
}

function parseViewBox(viewBox: string) {
  const [x, y, width, height] = viewBox.split(/[,\s]+/).map(Number)
  return { x, y, width, height }
}
