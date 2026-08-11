# @nrk/core-icons

## 19.0.0-next.2

### Minor Changes

- 5ec0195: **Minor changes**

  - Added icon `sliders`
  - Added icon `sliders-expressive`

## 19.0.0-next.1

### Patch Changes

- N/A

## 19.0.0-next.0

### Major Changes

- 3395af5: ### Transitioning to a new naming scheme

  Key points with examples:

  - More descriptive, generic names: Norwegian names translated to US English. Icons renamed to have a name based on appearance rather than function.
    - `nrk-search` → `magnifying-glass`
    - `nrk-tilgjengelighet` → `accessibility`
  - Removed "nrk-" prefix from icon names: All icons previously prefixed with nrk- have been simplified to remove this prefix.
    - `nrk-geopoint` → `pin`
    - `nrk-logo-nrk-1` → `nrk-1`
    - Exported names now use `Icon` and `Logo` suffixes.
      - `nrkBell` → `bellIcon`
      - `nrkLogoNrkP3Musikk` → `nrkP3MusikkLogo`
  - Removed category prefixes: category-specific prefixes like `media-`, `hardware-`, `some-`, `tilgjengelighet-` have been removed.
    - `nrk-media-play` → `play`
    - `nrk-tilgjengelighet-horbarhet` → `ear`
  - Removed `--active` state, icons are now outlined (no suffix) or solid (suffixed)
    - `heart--active` → `heart-solid`

  Deprecations are marked with `@deprecated` JSDoc comments. Exports from v18.x contain hints to new names:

  ```ts
  /** @deprecated Use `wifiSlashIcon` instead */
  export const nrkOffline = "<svg ...";
  ```

  All name changes are documented in [new-naming-scheme.csv](./docs/public/new-naming-scheme.csv)

  #### Deprecations

  These exports will be removed in the next major release.

  - `@nrk/core-icons/logo/large`: This export is now merged into `@nrk/core-icons/logo`. All `large` logos are suffixed, i.e. `nrkLargeLogo`
  - `@nrk/core-icons/jsx`: This package was already deprecated, but not mentioned in release notes.
  - `@nrk/core-icons/jsx/expressive`: This package was already deprecated, but not mentioned in release notes.
  - `@nrk/core-icons/jsx/logo`: This package was already deprecated, but not mentioned in release notes.
  - `@nrk/core-icons/jsx/logo/large`

  ##### @nrk/core-icons

  These will be removed in the next major release:

  - `nrkFlagNorwegian`
  - `nrkMediaDirekteAnimatedActive`
  - `nrkProgress`
  - `nrkSpinner`

  Icons designed to be animated might be implemented with animations at a later time.

  ##### @nrk/core-icons/expressive

  These will be removed in the next major release:

  - `nrkFlagNorwegianExpressive`
  - `nrkProgressExpressive`
  - `nrkSpinnerExpressive`
  - `nrkRadioExpressiveActive` - this does not have an `expressive` variant, and will only be available as `radioButtonChecked` from `@nrk/core-icons`.
