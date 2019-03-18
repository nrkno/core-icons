# Core Icons

> Icon and logo kit providing a consistent and predictable user experience across platforms and NRK services

## Installation

[Download the Sketch library](sketch://add-library?url=https%3A%2F%2Fstatic.nrk.no%2Fcore-icons%2Flatest%2Fcore-icons.rss) for sketching, [individual SVGs](#icons) for Android, [PDFs](#icons) for iOS. All icons follow [BEM naming conventions](http://getbem.com/) and are prefixed with `nrk-` to play nice with existing code.

### Using NPM

```bash
npm install @nrk/core-icons
```

All icons are exposed individually as exported constants (enabling [tree shaking](https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd)):

```js
import { nrkLogoNrk } from '@nrk/core-icons'      // Vanilla JS, String
import { NrkLogoNrk } from '@nrk/core-icons/jsx'  // React, ReactElement

<NrkLogoNrk />                          // Render a NRK logo
<NrkLogoNrk style={{color: 'red'}} />   // Additional props will be used for attributes
```
### Using static

Recommended only for prototyping.

```html
<script async src="https://static.nrk.no/core-icons/major/7/core-icons.min.js"></script>
```

## Scaling

Since logos do not have consistent dimensions, `@nrk/core-icons` provides scaling based on `font-size`.
Scale the icons/logos by using font sizes divisible with `10` for sharpest rendering. Example: `font-size: 10px` = `15×15` icon, `font-size: 20px` = `30×30` icon, etc.

✅ Do | 🚫 Don't
:-- | :--
`.parent { font-size: 10px }` | `.parent svg { width: 30px; height: 30px }`
<div>`<div class="parent"><svg style="width:1.5em;height:1.5em">…`</div> | `<div class="parent"><svg style="width:30px;height:30px">…`

<small>Note: correct width/height in `em` for each icon is automatically provided by `@nrk/core-icons`</small>


## Icons

<!--demo
<style>
  .doc-grid { overflow: hidden }
  .doc-grid > * { box-sizing: border-box; display: inline-block; vertical-align: top; width: 33%; min-width: 300px; padding: 15px 15px 15px 0 }
  .docs-icons > * { width: 16.6%; min-width: 120px }
  .docs-icons > h3 { width: 100%; min-width: none; margin: 0 0 .5em; }
  .docs-icons a, .docs-icons button { -webkit-appearance: none; font: inherit; background: none; color: inherit; border: 0; padding: 0; text-decoration: underline; cursor: pointer; }
  .doc-hidden { position: fixed; left: -300px; opacity: 0 }
  .doc-input { font: inherit; color: inherit; margin-bottom: 2px; padding: 5px 9px; border: 1px solid #ccc; border-radius: 3px }
  .doc-config { margin-bottom: 2em; }
</style>
<div class="doc-config doc-grid">
  <input type="text" aria-hidden="true" tabindex="-1" id="docs-copy" class="doc-hidden">
  <input type="text" class="doc-input" name="search" placeholder="Type to search" autocomplete="off" aria-label="Filter icons">
  <label class="doc-input">
    <span style="cursor:pointer">Choose color</span>
    <input type="color" name="color" value="#000000" class="doc-hidden">
  </label>
</div>
<div class="docs-icons doc-grid" style="padding:0 7vw;margin:0 -7vw;transition:.2s"></div>
<script src="pdfkit-and-blob-stream.js"></script>
<script src="core-icons.min.js"></script>
<script src="readme.js"></script>
demo-->

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
    <h3>Icon used as decoration</h3>
    Use the <code>aria-hidden="true"</code> attribute to hide the icon from screen readers while keeping it visually perceivable.
  </div>
  <div>
    <div class="doc-demo">
      <a aria-label="Gå til nrk.no" href="https://nrk.no/">
        <svg aria-hidden="true" width="3.5em" height="1em"><use xlink:href="#nrk-logo-nrk" /></svg>
      </a>
    </div>
    <h3>Clickable icon</h3>
    Add screen reader content to the clickable element (<code>button</code> or <code>a</code>) with <code>aria-label="…"</code>, and hide the icon from screen readers with <code>aria-hidden="true"</code>
  </div>
  <div>
    <div class="doc-demo">
      <span role="img" aria-label="Terningkast seks">
        <svg aria-hidden="true" style="width:1.5em;height:1.5em;vertical-align:middle"><use xlink:href="#nrk-dice-6--active"></use></svg>
      </span>
      Fantastisk!
    </div>
    <h3>Non-clickable icon</h3>
    Hide the icon from screen readers with <code>aria-hidden="true"</code>, and add screen reader content to a wrapper with <code>role="img" aria-label="…"</code>.
  </div>
</div>


