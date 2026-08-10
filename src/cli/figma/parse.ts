import { join as joinPath } from 'path'
import type { PublishedComponent, PublishedComponentSet } from '@figma/rest-api-spec'
import type { Asset, Icon, Logo, Variant } from '#src/manifest.ts'

export function parse(
  componentSets: PublishedComponentSet[],
  components: PublishedComponent[],
): Asset[] {
  const assets: Asset[] = []
  const sets = new Map(componentSets.map((set) => [set.node_id, set]))

  for (const component of components) {
    const frame = component.containing_frame!
    let componentSet: PublishedComponentSet | null = null
    const componentSetNodeId = frame.containingComponentSet?.nodeId ?? null
    if (componentSetNodeId && sets.has(componentSetNodeId)) {
      componentSet = sets.get(componentSetNodeId)!
    }

    if (frame.pageName.includes('prototyping')) {
      continue
    }

    assets.push(frame.pageName.includes('logo') ? logo(component) : icon(component, componentSet))
  }

  return assets.sort((a, b) => a.name.localeCompare(b.name))
}

const DEPRECATED_REGEX = /DEPREKERT|DEPRECATED|UTFASET/i

function icon(component: PublishedComponent, componentSet: PublishedComponentSet | null): Icon {
  if (!componentSet) {
    throw new Error(
      `Component set not found for component ${component.name} (${component.node_id})`,
    )
  }

  const variant = iconVariant(component.name)
  const id = iconVariantName(componentSet.name, variant)

  const icon: Icon = {
    id,
    kind: 'icon',
    name: componentSet.name,
    variant,
    file: joinPath('lib/icons', `${id}.svg`),
    componentId: component.key,
    componentNodeId: component.node_id,
    componentUpdatedAt: new Date(component.updated_at).getTime(),
    deprecated: DEPRECATED_REGEX.test(componentSet.description) ? true : undefined,
    // description: findSection(componentSet.description, 'Beskrivelse av funksjon'),
    // aliases: findListSection(componentSet.description, 'Alias'),
    // nextName: findSection(componentSet.description, 'Nytt navn'),
    // accessibleName: findSection(componentSet.description, 'Aria-label'),
  }

  return icon
}

function logo(component: PublishedComponent): Logo {
  const name = component.name.replace(/\+/g, '-pluss')
  return {
    id: name,
    kind: 'logo',
    name,
    file: joinPath('lib/logos', `${name}.svg`),
    componentId: component.key,
    componentNodeId: component.node_id,
    componentUpdatedAt: new Date(component.updated_at).getTime(),
    // description: null,
  }
}

export function iconVariant(name: string): Variant {
  const matches = name.match(/^variant=(expressive|effective)$/)
  return matches ? (matches[1] as Variant) : 'effective'
}

/**
 * Inserts the variant into the name before any state suffixes, e.g. `--active`
 * @example
 * ```ts
 * variantName('foo', 'expressive') // returns 'foo-expressive'
 * variantName('foo--active', 'expressive') // returns 'foo-expressive--active'
 * variantName('foo', 'effective') // returns 'foo'
 * variantName('foo--active', 'effective') // returns 'foo--active'
 * ```
 */
export function iconVariantName(name: string, variant: Variant): string {
  if (variant === 'effective') {
    return name
  }
  return name.replace(/(--(active|unavailable|muted|fail|1|2|3))?$/, `-${variant}$1`)
}

export function findSection(description: string, pattern: string): string | null {
  const regex = new RegExp(`##\\s+${pattern}\\s*\\n(.*\\n?[^#$]+)`, 'i')
  const match = description.match(regex)
  let result = match ? match[1].trim() : null

  if (!result) {
    return null
  }

  result = result.trim()
  if (result === 'n/a') {
    return null
  }
  return result
}

export function findListSection(
  description: string,
  pattern: string,
  mapFn?: (item: string) => string,
): string[] {
  let section = findSection(description, pattern) ?? ''
  const items = section
    .split(/[\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean)
  return mapFn ? items.map(mapFn) : items
}
