# Core Icons

> Icon and logo kit providing a consistent and predictable user experience across platforms and NRK services

<!--demo
<script src="core-icons-iife.js"></script>
<script src="core-icons-iife-logo.js"></script>
<link rel="stylesheet" href="readme.css">
<input type="text" aria-hidden="true" tabindex="-1" id="docs-copy" style="position:fixed;left:-300px;opacity:0">
<script src="readme.js"></script>
demo-->

## Overview

Core-icons is organized in submodules to accomodate variants:

### Icons

Contains all icons

- All icons follow [BEM naming conventions](http://getbem.com/) and are prefixed with `nrk-` to play nice with existing code.
- For some icons an additional group name preceding icon name is included for categorization (e.g. `nrk-arrow-right`)

### Expressive

Contains expressive variants of a subset of the baseline icons

- Expressive icons have `nrk-expressive-` prefix

### Logo

Contains all logos for Norsk rikskringkasting (NRK)

- Logos have `nrk-logo-` prefix

## Browse icons

Search among all icons, including variants using the search field below or download the appropriate ZIP archive containing the icons you need in the left menu.

The [installation](#installation) section has instructions for use through npm or cdn.

<!--demo
<input type="text" class="docs-input" name="search" placeholder="Type to filter icons" autocomplete="off" aria-label="Filter icons">
<div class="docs-icons"></div>
demo-->

## Browse logos

Search among all icons, including variants using the search field below or download the appropriate ZIP archive containing the icons you need in the left menu.

The [installation](#installation) section has instructions for use through npm or cdn.

<!--demo
<input type="text" class="docs-input" name="search-logos" placeholder="Type to filter logos" autocomplete="off" aria-label="Filter logos">
<div class="docs-logos"></div>
demo-->

## Installation

[Use the Figma components](https://www.figma.com/file/KXGJ6Qcdf8JAyRCoKV55If/NRK-Core-Icons) for sketching. Download links for archives with SVGs (e.g. for Android) and PDFs (e.g. for iOS) are available in the left column.

### Using NPM

```bash
npm install @nrk/core-icons
```

### Using static cdn

We host the following scripts for use in the browser on our cdn

- [core-icons-iife-icon.js](https://static.nrk.no/core-icons/major/11/core-icons-iife-icon.js) Contains all base icons
- [core-icons-iife-expressive.js](https://static.nrk.no/core-icons/major/11/core-icons-iife-expressive.js) Contains all expressive icon variations
- [core-icons-iife.js](https://static.nrk.no/core-icons/major/11/core-icons-iife.js) Contains icons and icon variants
- [core-icons-iife-logo.js](https://static.nrk.no/core-icons/major/11/core-icons-iife-logo.js) Contains all NRK brand logoes

For stability, please link to the appropriate major version

```html
<script
  async
  src="https://static.nrk.no/core-icons/major/11/core-icons-iife.js"
></script>
```

Linking to `/latest/` is recommended only for prototyping.

```html
<script
  async
  src="https://static.nrk.no/core-icons/latest/core-icons-iife.js"
></script>
```

## Usage

### npm

All icons are exposed individually as exported constants (enabling [tree shaking](https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd)):

```jsx
// Using icons
import { nrkMediaPlay } from '@nrk/core-icons'      // Plain JS, SVG-element as String
import { NrkMediaPlay } from '@nrk/core-icons/jsx'  // React, ReactElement
// Using expressive icon variants
import { nrkExpressiveMediaPlay } from '@nrk/core-icons/expressive'      // Plain JS, SVG-element as String
import { NrkExpressiveMediaPlay } from '@nrk/core-icons/jsx/expressive'      // React, ReactElement
// Using logoes
import { nrkLogoNrk } from '@nrk/core-icons/logo'      // Plain JS, SVG-element as String
import { NrkLogoNrk } from '@nrk/core-icons/jsx/logo'  // React, ReactElement

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

## Scaling

Since logos do not have consistent dimensions, `@nrk/core-icons` provides scaling based on `font-size`.
Scale the icons/logos by using font sizes divisible with `16` for sharpest rendering. Example: `font-size: 16px` = `24×24` icon, `font-size: 32px` = `48×48` icon, etc.

| ✅ Do                                                         | 🚫 Don't                                                    |
| :------------------------------------------------------------ | :---------------------------------------------------------- |
| `.parent { font-size: 16px }`                                 | `.parent svg { width: 30px; height: 30px }`                 |
| `<div class="parent"><svg style="width:1.5em;height:1.5em">…` | `<div class="parent"><svg style="width:30px;height:30px">…` |

Note: correct width/height in `em` for each icon is automatically provided by `@nrk/core-icons`

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
      <a aria-label="Gå til nrk.no" href="https://nrk.no/">
        <svg aria-hidden="true" width="3.5em" height="1em"><use xlink:href="#nrk-logo-nrk" /></svg>
      </a>
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
</div>
