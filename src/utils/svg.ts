import { format } from 'oxfmt'
import { type CustomPlugin, type XastElement, optimize, type PluginConfig } from 'svgo'
import { readFile } from './fs.ts'
import { sortObjectKeys } from './object.ts'

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

export async function optimizeIcon(svg: string): Promise<string> {
  const output = optimize(svg, {
    plugins: [
      ...basePlugins,
      'collapseGroups',
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
    ],
  })
  return pretty(output.data)
}

export async function optimizeLogo(svg: string): Promise<string> {
  const output = optimize(svg, {
    plugins: basePlugins,
  })
  return pretty(output.data)
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

  attrs['android:pathData'] = node.attributes.d

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
  const format = new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format
  return `${format(value / 16)}em`
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
