// temporary script to generate a changelog for the next major release

import { createClient } from '#cli/figma/api.ts'
import { findListSection, iconVariant, iconVariantName } from '#cli/figma/parse.ts'
import compat from '#utils/backwards-compatibility.ts'
import { writeFile } from '#utils/fs.ts'
import { dedent, toCamelCase, toExportedName, toPascalCase } from '#utils/string.ts'

const previousExports = {
  effective: new Set(compat.effective),
  expressive: new Set(compat.expressive),
  logo: new Set(compat.logo),
  logoLarge: new Set(compat.logoLarge),
  jsxEffective: new Set(compat.jsxEffective),
  jsxExpressive: new Set(compat.jsxExpressive),
  jsxLogo: new Set(compat.jsxLogo),
  jsxLogoLarge: new Set(compat.jsxLogoLarge),
}

const fileKey = process.env.FIGMA_FILE_KEY!
const figma = createClient(process.env.FIGMA_ACCESS_TOKEN!)

const [componentSetsResponse, componentsResponse] = await Promise.all([
  figma.getFileComponentSets(fileKey),
  figma.getFileComponents(fileKey),
])
if (componentSetsResponse.error) {
  throw new Error(`Error fetching component sets: ${componentSetsResponse.error.message}`)
}
if (componentsResponse.error) {
  throw new Error(`Error fetching components: ${componentsResponse.error.message}`)
}
const components = componentsResponse.data.meta.components
const componentSets = new Map(
  componentSetsResponse.data.meta.component_sets.map((set) => [set.node_id, set]),
)

const cols = [
  'previous_name',
  'name',
  'previous_camel_cased',
  'camel_cased',
  'previous_pascal_cased',
  'pascal_cased',
] as const

type Col = (typeof cols)[number]

const headers: Record<Col, string> = {
  previous_name: 'Previous name',
  name: 'New name',
  previous_camel_cased: 'Previous `camelCase` export',
  camel_cased: 'New `camelCase` export',
  previous_pascal_cased: 'Previous `PascalCase` export',
  pascal_cased: 'New `PascalCase` export',
}

type Naming = {
  [key in Col]: string
}

const output: {
  [key: string]: Naming[]
} = {
  effective: [],
  expressive: [],
  logo: [],
}

for (const component of components) {
  const frame = component.containing_frame!
  if (frame.pageName.includes('prototyping')) {
    continue
  }

  if (frame.pageName.includes('logo')) {
    const name = component.name.replace(/\+/g, '-pluss')
    const prevName = `nrk-logo-${name}`
    const prevCamelCased = toCamelCase(prevName)
    if (previousExports.logo.has(prevCamelCased)) {
      output.logo.push({
        previous_name: prevName,
        name,
        previous_camel_cased: prevCamelCased,
        camel_cased: toExportedName(name, 'logo'),
        previous_pascal_cased: toPascalCase(prevName),
        pascal_cased: toPascalCase(toExportedName(name, 'logo')),
      })
    }
  }

  const componentSetNodeId = frame.containingComponentSet?.nodeId ?? null
  if (!componentSetNodeId || !componentSets.has(componentSetNodeId)) {
    continue
  }
  const componentSet = componentSets.get(componentSetNodeId)!
  const variant = iconVariant(component.name)
  const name = iconVariantName(componentSet.name, variant)
  const prevNames = findListSection(componentSet.description, 'Tidligere navn', (name) =>
    iconVariantName(name, variant),
  )

  for (const prevName of prevNames) {
    const prevCamelCased = toCamelCase(prevName)
    if (previousExports[variant].has(prevCamelCased)) {
      output[variant].push({
        previous_name: prevName,
        name,
        previous_camel_cased: prevCamelCased,
        camel_cased: toExportedName(name),
        previous_pascal_cased: toPascalCase(prevName),
        pascal_cased: toPascalCase(toExportedName(name, 'icon')),
      })
    }
  }
}

writeFile(
  'docs/new-naming-scheme.md',
  dedent`
    # New naming scheme
  
    ## \`@nrk/core-icons\`
  
    ${formatMdTable(output.effective)}

    ## \`@nrk/core-icons/expressive\`

    ${formatMdTable(output.expressive)}
    
    ## \`@nrk/core-icons/logo\`

    ${formatMdTable(output.logo)}
  `,
)

writeFile(
  'docs/public/new-naming-scheme.csv',
  dedent`
    package,${cols.join(',')}
    ${output.effective.map((d) => `@nrk/core-icons,${cols.map((col) => d[col]).join(',')}`).join('\n')}
    ${output.expressive.map((d) => `@nrk/core-icons/expressive,${cols.map((col) => d[col]).join(',')}`).join('\n')}
    ${output.logo.map((d) => `@nrk/core-icons/logo,${cols.map((col) => d[col]).join(',')}`).join('\n')}
  `,
)

function formatMdTable(rows: Naming[]) {
  const header = dedent`
    | ${cols.map((col) => headers[col]).join(' | ')} |
    | ${cols.map(() => '---').join(' | ')} |
  `
  return dedent`
    ${header}
    ${rows.map((d) => `| ${cols.map((col) => `\`${d[col]}\``).join(' | ')} |`).join('\n')}
  `
}
