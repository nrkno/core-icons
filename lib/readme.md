# Core Icons

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/@nrk/core-icons.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@nrk/core-icons

> Icon and logo kit providing a consistent and predictable user experience across platforms and NRK services

<!--demo
<script src="core-icons-iife.js"></script>
<script src="core-icons-iife-logo.js"></script>
<script src="core-icons-iife-preview.js"></script>
<link rel="stylesheet" href="https://static.nrk.no/core-css/major/1/core-css.min.css">
<link rel="stylesheet" href="readme.css">
<input type="text" aria-hidden="true" tabindex="-1" id="docs-copy" style="position:fixed;left:-300px;opacity:0">
<script src="readme.js"></script>
demo-->

## Overview

Core-icons is organized in submodules to accomodate variants:

### Icons

Contains all icons

- All icons follow [BEM naming conventions](http://getbem.com/) and are prefixed with `nrk-` to play nice with existing code.
- For some icons an additional group name preceding icon name is included for categorization like `nrk-arrow-right`

### Expressive

Contains expressive variants of a subset of the baseline icons

- Expressive icons are suffixed with `-expressive-` like `nrk-tilgjengelighet-expressive`

### Logo

Contains all logos for Norsk rikskringkasting (NRK)

- Logos have `nrk-logo-` prefix like `nrk-logo-nrk`

### Preview

Contains preview-versions of icons or logos for testing purposes. These resources should **not** be used in a production context

- All preview files have `-preview` added to the apropriate logo or icon prefix like `nrk-logo-preview-nrk`
- Any file in the preview context may be removed or altered in minor or patch releases
- When ready, a preview resource will be added to the apropriate context (icon/logo/expressive) and will be mentioned in the [release-notes](https://github.com/nrkno/core-icons/releases)

## License

Core Icons has three distinct types of content: Code, logos and icons.

### Code

Code refers to all files that are not image assets. Image assets includes file types such as SVG, PNG and PDF.

Code files are distributed under the MIT License (https://opensource.org/licenses/MIT).

### Logos

Logos refers to image assets that include trademarks, such as NRK. These asset names are prefixed with `nrk-logo-` or `nrk-super-`.

All use of these NRK trademarked assets require our prior specific permission and must be in compliance with NRKs design guidelines.
For more information about NRK design guidelines and use of our trademarks, see https://info.nrk.no/design.

### Icons

Icons refers to all image assets other than logos.

Icon image assets are licensed under a Creative Commons Attribution 4.0 International License. (https://creativecommons.org/licenses/by/4.0/).

### Previews

Preview icons follow the above naming conventions, and should be treated as part of the appropriate content type

## Browse icons

Search among all icons, including variants using the search field below or download the appropriate ZIP archive containing the icons you need in the left menu.

The [installation](#installation) section has instructions for use through npm or cdn.

<!--demo
<label class="nrk-xs-12of12 nrk-lg-4of12">
  Filter icons
  <input type="text" class="nrk-input" name="search" placeholder="Type to filter icons" autocomplete="off" >
</label>
<label><input class="nrk-switch" type="checkbox" onChange="toggleVariants()" checked> Show icon variants</label>
<div class="docs-icons"></div>
demo-->

## Browse logos

Search among all logos using the search field below or download the appropriate ZIP archive in the left menu.

The [installation](#installation) section has instructions for use through npm or cdn.

<!--demo
<label class="nrk-xs-12of12 nrk-lg-4of12">
  Filter logos
  <input type="text" class="nrk-input" name="search-logos" placeholder="Type to filter logos" autocomplete="off" >
</label>
<div class="docs-logos"></div>
demo-->

## Browse previews

Search among all preview resources using the search field below. ZIP archives are linked here for [zip](core-icons-preview-svg.zip) and [pdf](core-icons-preview-pdf.zip) versions.

The [installation](#installation) section has instructions for use through npm or cdn.

<!--demo
<label class="nrk-xs-12of12 nrk-lg-4of12">
  Filter previews
  <input type="text" class="nrk-input" name="search-previews" placeholder="Type to filter previews" autocomplete="off" >
</label>
<div class="docs-previews"></div>
demo-->

## Installation

[Use the Figma components](https://www.figma.com/file/KXGJ6Qcdf8JAyRCoKV55If/NRK-Core-Icons) for sketching. Download links for archives with SVG and PDF file-types are available in the left column.

### Using NPM

```bash
npm install @nrk/core-icons
```

### Using static cdn

We host the following scripts for use in the browser on our cdn

- [core-icons-iife-icon.js](https://static.nrk.no/core-icons/major/14/core-icons-iife-icon.js) Contains all base icons
- [core-icons-iife-expressive.js](https://static.nrk.no/core-icons/major/14/core-icons-iife-expressive.js) Contains all expressive icon variations
- [core-icons-iife.js](https://static.nrk.no/core-icons/major/14/core-icons-iife.js) Contains icons and icon variants
- [core-icons-iife-logo.js](https://static.nrk.no/core-icons/major/14/core-icons-iife-logo.js) Contains all NRK brand logos
- [core-icons-iife-preview.js](https://static.nrk.no/core-icons/major/14/core-icons-iife-preview.js) Contains all NRK brand previews

For stability, please link to the appropriate major version

```html
<script async src="https://static.nrk.no/core-icons/major/14/core-icons-iife.js"></script>
```

Linking to `/latest/` is recommended only for prototyping.

```html
<script async src="https://static.nrk.no/core-icons/latest/core-icons-iife.js"></script>
```

### Using Android

An Android library is published on Github packages

See [Github packages](https://github.com/nrkno/core-icons/packages) for the latest version.
Add the library as a depdenceny with `implementation "no.nrk.core:icons:<version>"` (or if more convenient in a core module with `api("no.nrk.core:icons:<version>")`)

To find the package add a maven block to your `build.gradle` file:

```
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/nrkno/*")
    }
}
```

## Usage

### npm

All icons are exposed individually as exported constants (enabling [tree shaking](https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd)):

```jsx
// Using icons
import { nrkMediaPlay } from '@nrk/core-icons'      // Plain JS, SVG-element as String
import { NrkMediaPlay } from '@nrk/core-icons/jsx'  // React, ReactElement
// Using expressive icon variants
import { nrkMediaPlayExpressive } from '@nrk/core-icons/expressive'      // Plain JS, SVG-element as String
import { NrkMediaPlayExpressive } from '@nrk/core-icons/jsx/expressive'      // React, ReactElement
// Using logos
import { nrkLogoNrk } from '@nrk/core-icons/logo'      // Plain JS, SVG-element as String
import { NrkLogoNrk } from '@nrk/core-icons/jsx/logo'  // React, ReactElement
// Using logos without optical adjustment (only for large renders)
import { nrkLogoLargeNrk } from '@nrk/core-icons/logo/large' // Plain JS, SVG-element as String
import { NrkLogoLargeNrk } from '@nrk/core-icons/jsx/logo/large'  // React, ReactElement
// Using preview icons
import { nrkLogoPreviewNrk } from '@nrk/core-icons/preview'      // Plain JS, SVG-element as String
import { NrkLogoPreviewNrk } from '@nrk/core-icons/jsx/preview'  // React, ReactElement


<NrkLogoNrk />                                    // Example render the NRK logo with React
<span style={{ color: 'red', fontSize: '1em' }}>     // Style is inherited from parent element
  <NrkLogoNrk />
</span>
```

### CDN (content delivery network)

When using one of the iife-functions directly from the static.nrk.no-cdn, all icons are placed in the HTML `<head>` and can be linked using SVG `<use>` with the icon name as `xlink:href`.
The "Copy HTML" button in the [icon-browser](#browse-all-icons) adds an svg-tag with appropriate size and aria-attributes nesting a `<use>` tag linking to the icon in question.

```html
<svg style="width:1.5em;height:1.5em" focusable="false" aria-hidden="true">
  <use xlink:href="#nrk-360"></use>
</svg>
```

### Overriding props for React elements

The React/jsx exports can take props (of type `React.SVGProps`, exhaustive list can be found in [definitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L2486)) to set or override existing values, just like a regular React functional component.

Please note that overriding default values should be kept to a minimum, to maintain consistency for users.

```jsx
// Make sure to import React component
import { NrkLogoNrk } from '@nrk/core-icons/jsx/logo'
// JSX markup
(...)
<NrkLogoNrk style={{ 'fill': 'red' }} />
(...)

// Renders HTML:
<svg aria-hidden="true" width="1.429em" height="1.429em" viewBox="0 0 20 20" style="fill: red;">(...)</svg>
```

### Android

Icons are exposed through the `NrkIcons` object for use in Kotlin code, but can also be referenced as drawables in XML or through `no.nrk.core.icons.R.drawable`. Prefer usage of `NrkIcons` for easier swapping between normal and expressive variants.

The simplest way to use the library is with Jetpack Compose. A `LocalUseExpressiveIcons` composition local must be provided at a convenient place, such as in a base theme. When this composition local changes the icons will automatically update to either expressive or the normal variant.

```kotlin
// Provide a value based on some sort of condition
CompositionLocalProvider(LocalUseExpressiveIcons provides true) {
    Icon(
        painter = NrkIcons.NrkMediaPlay.asPainter(),
        contentDescription = ""
    )
}
```

The library does not provide helpers for Views as the library doesn't know when expressive variants should be used. For use in Views you can create an extension method such as:

```kotlin
fun NrkIcon.asDrawable(context: Context): Drawable? {
    val useExpressiveIcon = true // Some condition

    return ContextCompat.getDrawable(
        context,
        if (useExpressiveIcon) {
            expressive ?: normal
        } else {
            normal
        }
    )
}
```

## Scaling

Since logos do not have consistent dimensions, `@nrk/core-icons` provides scaling based on `font-size`.
Scale the icons/logos by using font sizes divisible with `16` for sharpest rendering. Example: `font-size: 16px` = `24×24` icon, `font-size: 32px` = `48×48` icon, etc.

| ✅ Do                                                         | 🚫 Don't                                                    |
| :------------------------------------------------------------ | :---------------------------------------------------------- |
| `.parent { font-size: 2rem }`                                 | `.parent svg { width: 30px; height: 30px }`                 |
| `<div class="parent"><svg style="width:1.5em;height:1.5em">…` | `<div class="parent"><svg style="width:30px;height:30px">…` |

Note: correct width/height in `em` for each icon is automatically provided by `@nrk/core-icons`. For browser/iife scripts, you can get the correct HTML markup from the `Copy HTML` button in the hover-menu for each [icon](#browse-icons) or [logo](#browse-logos) in their respective preview-sections above.

## Icons in text

To use core-icons mixed in with text in `inline` mode, ensure that the icon is sized such that it's dimensions are equal to the `line-height`. You can then use `vertical-align` (`top`/`bottom`) works nicely to align the icon with the text.
If there are any visual adjustments needed for the icon to be visually aligned the proper way, please file an [issue](https://github.com/nrkno/core-icons/issues/new) with the icon-name and a screenshot of the issue.

## Accessibility

Modern versions of assistive technologies will announce SVG content, but there is still a lot of differences between browsers. To avoid confusion, use the following conventions:

<div class="doc-grid">
  <div>
    <div class="doc-demo">
      <a href="https://nrk.no/">
        Gå til nrk.no
        <svg aria-hidden="true" width="30" height="15"><use xlink:href="#nrk-arrow-right-long" /></svg>
      </a>
    </div>
    <h3 class="docs-heading--3">Icon used as decoration</h3>
    Use the <code>aria-hidden="true"</code> attribute to hide the icon from screen readers while keeping it visually perceivable.
  </div>
  <div>
    <div class="doc-demo">
      <button type="button" class="nrk-unset" aria-label="Rediger">
        <svg aria-hidden="true" width="3.5em" height="1em"><use xlink:href="#nrk-edit" /></svg>
      </button>
    </div>
    <h3 class="docs-heading--3">Clickable icon</h3>
    Add screen reader content to the clickable element (<code>button</code> or <code>a</code>) with <code>aria-label="…"</code>, and hide the icon from screen readers with <code>aria-hidden="true"</code>
  </div>
  <div>
    <div class="doc-demo">
      <span role="img" aria-label="Terningkast seks">
        <svg aria-hidden="true" style="width:1.5em;height:1.5em;vertical-align:middle"><use xlink:href="#nrk-dice-6--active"></use></svg>
      </span>
      Fantastisk!
    </div>
    <h3 class="docs-heading--3">Non-clickable icon</h3>
    Hide the icon from screen readers with <code>aria-hidden="true"</code>, and add screen reader content to a wrapper with <code>role="img" aria-label="…"</code>.
  </div>
  <div>
    <div class="doc-demo">
      <a title="Gå til forsiden" href="https://www.nrk.no/">
        <svg aria-label="NRK" role="img" width="3.5em" height="1em"><use xlink:href="#nrk-logo-nrk" /></svg>
      </a>
    </div>
    <h3 class="docs-heading--3">Home link</h3>
    Add <code>title="Gå til forsiden"</code> to the wrapper link, and add <code>aria-label="Publikumsproduktets navn" role="img"</code> to the svg.
  </div>
</div>
