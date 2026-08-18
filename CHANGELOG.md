# @nrk/core-icons

## 19.2.0

### Minor Changes

- 745fb84: **Minor changes**

  - Added `core-icons-codemod`, a zero-dependency codemod that migrates consuming projects to the v19 naming scheme: `npx --package=@nrk/core-icons core-icons-codemod src/`
  - Fixed the "New `camelCase` export" column for `@nrk/core-icons/logo` in `docs/new-naming-scheme.md` and `docs/public/new-naming-scheme.csv` — it showed an `Icon` suffix, but logo exports end in `Logo` (e.g. `nrkLogoNrk3` → `nrk3Logo`, not `nrk3Icon`)

### Patch Changes

- 854978f: Fix Android vectors rendering incorrectly in Jetpack Compose

  Sub-paths were displaced when an icon's path data contained a relative moveto directly after a
  closepath (`...z m-6.557 1.244`). Per the SVG spec the current point after `z` is the start of the
  sub-path that was just closed, but Compose's `PathParser` applies the moveto relative to the last
  _drawn_ point instead, so every sub-path after the first was offset and the error accumulated.

  The icons were correct in SVG and when rendered through an Android `ImageView` — the breakage only
  appeared in Compose, which is how these drawables are actually consumed.

  The Android vector generator now emits such movetos as equivalent absolute movetos, which both
  parsers agree on. Only the affected command is rewritten, so the rest of each path is unchanged.

  Note that this only changes the generator. The drawables under `android/icons/.../res/drawable` are
  committed artifacts, and `generateAndroid` runs only as part of `cli sync`, so a Figma sync is
  needed to regenerate them and actually ship the fix. Because the icons themselves are unchanged,
  `sync` will report "Icons are up to date" and exit — it has to be run with `--force`. Doing so
  rewrites a moveto in 576 of the generated drawables.

## 19.1.0

### Minor Changes

- 5af9d6f: **Minor changes**

  - Added icon `circle-half-dotted`
  - Added icon `circle-half-dotted-expressive`
  - Added icon `circle-three-quarter`
  - Added icon `circle-three-quarter-expressive`

### Patch Changes

- 8c586b5: Include logos in android library

## 19.0.0

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

### Minor Changes

- 5ec0195: **Minor changes**

  - Added icon `sliders`
  - Added icon `sliders-expressive`

### Patch Changes

- 814d629: N/A

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
