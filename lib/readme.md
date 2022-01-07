# Core Icons

> Icon and logo kit providing a consistent and predictable user experience across platforms and NRK services

<!--demo
<script src="core-icons.min.js"></script>
demo-->

## Overview

Search for your icons in the search field below or download a ZIP file containing all icons in the left menu.

<!--demo
<style>
.doc-grid { overflow: hidden }
.doc-grid > * { box-sizing: border-box; display: inline-block; vertical-align: top; width: 33%; min-width: 300px; padding: 15px 15px 15px 0 }
.docs-icons { overflow: hidden; padding: 0 7vw; margin: 0 -7vw; transition:.2s }
.docs-icons > * { cursor: pointer; box-sizing: border-box; display: inline-block; vertical-align: top; width: 20%; min-width: 180px }
.docs-icons > h3 { width: 100%; font-weight: 700; font-size: 12px; text-transform: uppercase; min-width: none; margin: 2em 0 .5em }
.docs-icons > h3:first-child { margin-top: 0 }
.docs-icons > div:hover { color: gray; }
.docs-icons svg { margin-right: 9px; vertical-align: middle }
.docs-pops { position: absolute; padding: 5px 0; transition: .2s .1s }
.docs-pops a,
.docs-pops button { -webkit-appearance: none; display: inline-block; font: inherit; font-weight: 400; background: #000; color: #fff !important; border: 0; border-radius: 4px; margin: 1px; padding: 2px 5px; text-decoration: none; cursor: pointer; transition: .2s }
.docs-pops a:hover,
.docs-pops button:hover { background: gray; }
.docs-icons :not(:hover) .docs-pops { visibility: hidden; opacity: 0; transform: translateY(-5px); transition-delay: 0 }
.docs-input { font: inherit; color: inherit; padding: 5px 9px; border: 1px solid #ccc; border-radius: 3px; margin-bottom: 2em; }
</style>
<input type="text" aria-hidden="true" tabindex="-1" id="docs-copy" style="position:fixed;left:-300px;opacity:0">
<input type="text" class="docs-input" name="search" placeholder="Type to search" autocomplete="off" aria-label="Filter icons">
<div class="docs-icons"></div>
<script src="readme.js"></script>
demo-->

## Installation

[Download the Sketch library](sketch://add-library?url=https%3A%2F%2Fstatic.nrk.no%2Fcore-icons%2Flatest%2Fcore-icons.rss) for sketching, [SVGs](#icons) for Android, [PDFs](#icons) for iOS. All icons follow [BEM naming conventions](http://getbem.com/) and are prefixed with `nrk-` to play nice with existing code.

### Using NPM

```bash
npm install @nrk/core-icons
```

All icons are exposed individually as exported constants (enabling [tree shaking](https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd)):

```js
import { nrkLogoNrk } from '@nrk/core-icons'      // Vanilla JS, String
import { NrkLogoNrk } from '@nrk/core-icons/jsx'  // React, ReactElement

<NrkLogoNrk />                                    // Example render a NRK logo with React
<span style={{ color: 'red', fontSize: 16 }}>     // Style is inherited from parent element
  <NrkLogoNrk />
</span>
```
### Using static

Recommended only for prototyping.

```html
<script async src="https://static.nrk.no/core-icons/major/9/core-icons.min.js"></script>
```

## Scaling

Since logos do not have consistent dimensions, `@nrk/core-icons` provides scaling based on `font-size`.
Scale the icons/logos by using font sizes divisible with `16` for sharpest rendering. Example: `font-size: 16px` = `24×24` icon, `font-size: 32px` = `48×48` icon, etc.

✅ Do | 🚫 Don't
:-- | :--
`.parent { font-size: 16px }` | `.parent svg { width: 30px; height: 30px }`
`<div class="parent"><svg style="width:1.5em;height:1.5em">…` | `<div class="parent"><svg style="width:30px;height:30px">…`

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
