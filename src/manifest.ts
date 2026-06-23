export type Kind = 'icon' | 'logo'
export type Variant = 'effective' | 'expressive'

export interface ManifestAsset {
  id: string
  componentId: string
  componentNodeId: string
  componentUpdatedAt: number
  name: string
  kind: Kind
  file: string
  // description: string | null
  deprecated?: boolean
  renamedTo?: string
}

export type Icon = ManifestAsset & { kind: 'icon'; variant: Variant }
export type Logo = ManifestAsset & { kind: 'logo' }

export type Asset = Icon | Logo

export interface Manifest {
  /**
   * Represents the latest updated_at timestamp of any released component in the Figma library
   */
  version: number
  assets: Asset[]
}
