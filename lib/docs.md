# Core Icons

## Icon and logo kit providing a consistent and predictable user experience across platforms and NRK services

---

## Installation
[Download the full kit](https://github.com/nrkno/core-icons/archive/master.zip) for sketching, [individual SVGs](#icons) for Android, [PDFs](#icons)
for iOS. As [SVG symbols](https://css-tricks.com/svg-symbol-good-choice-icons/) can not can load cross domain, or from external file and in IE (9,10,11), `@nrk/core-icons` provides a cacheable, cross-domain [Javascript API](#javascript-api) and [React API](#react-api). All icons follow [BEM naming conventions](http://getbem.com/) and are prefixed with `nrk-` to play nice with existing code.

```bash
npm install @nrk/core-icons --save  # Use from NPM
```
```html
<!-- Use from static.nrk.no: insert just before </body> -->
<script async src="https://static.nrk.no/core-icons/major/4/core-icons.min.js"></script>
```

---

## Scaling

All icons are produced for sharpest rendering at `15×15`, `30×30` etc., but not all *logos* are the same dimensions. Therefore, `@nrk/core-icons` provides scaling based on `font-size`. When used on web, scale the icons by using font sizes divisible with `10`:

✅ Do | 🚫 Don't
:-- | :--
`.parent { font-size: 10px }` | `.parent svg { width: 30px; height: 30px }`
<div>`<div class="parent"><svg style="width:1.5em;height:1.5em">…`</div><small>Note: correct width/height for each icon comes from @nrk/core-icons</small> | `<div class="parent"><svg style="width:30px;height:30px">…`

---

## Icons

<label class="nrk-button">
  <span class="nrk-sr">Filter icons</span>
  <input type="text" name="search" placeholder="Type to search" class="nrk-unset">
</label><label class="nrk-button">
  <span>Choose color</span>
  <input type="color" name="color" class="nrk-sr" value="#000000">
</label>
<div class="docs-icons nrk-grid" style="padding:0 7vw;margin:0 -7vw;transition:.2s"></div>
<script src="pdfkit-and-blob-stream.js"></script>
<script src="core-icons.jsx.js"></script>
<script src="core-icons.min.js"></script>
<script src="docs.js"></script>

---

## Accessibility

Modern versions of assistive technologies will announce SVG content, but there is still a lot of differences between browsers. To avoid confusion, use the following conventions:

<div class="nrk-grid">
  <div class="nrk-xs-12of12 nrk-md-4of12" style="padding-right:15px">
    <div class="doc-demo">
      <a href="https://nrk.no/">
        Gå til nrk.no
        <svg aria-hidden="true" width="30" height="15"><use xlink:href="#nrk-arrow-right-long" /></svg>
      </a>
    </div>
    <h3>Icon used as decoration</h3>
    Use the <code>aria-hidden="true"</code> attribute to hide the icon from screen readers while keeping it visually perceivable.
  </div>
  <div class="nrk-xs-12of12 nrk-md-4of12" style="padding-right:15px">
    <div class="doc-demo">
      <a aria-label="Gå til nrk.no" href="https://nrk.no/">
        <svg aria-hidden="true" width="3.5em" height="1em"><use xlink:href="#nrk-logo-nrk" /></svg>
      </a>
    </div>
    <h3>Clickable icon</h3>
    Add screen reader content to the clickable element (<code>button</code> or <code>a</code>) with <code>aria-label="…"</code>, and hide the icon from screen readers with <code>aria-hidden="true"</code>
  </div>
  <div class="nrk-xs-12of12 nrk-md-4of12" style="padding-right:15px">
    <div class="doc-demo">
      <span role="img" aria-label="Terningkast seks">
        <span class="nrk-sr">Terningkast seks</span>
        <svg aria-hidden="true" style="width:1.5em;height:1.5em;vertical-align:middle"><use xlink:href="#nrk-dice-6--active" /></svg>
      </span>
      Fantastisk!
    </div>
    <h3>Non-clickable icon</h3>
    Hide the icon from screen readers with <code>aria-hidden="true"</code>, and add screen reader content to a wrapper with <code>role="img" aria-label="…"</code>, as well as inside a <code>.nrk-sr</code>.
  </div>
</div>

---

## Javascript API

`@nrk/core-icons` provides a javascript API. You can either access it directly from `window.coreIcons` (when included as a `<script>` tag), or import as a NPM module:

```js
import coreIcons from '@nrk/core-icons'

coreIcons()               // => returns Array of all icons: [{id, width, height, body, sprite, symbol, svg}]
coreIcons('nrk-logo-nrk') // => returns Object {id, width, height, body, sprite, symbol, svg}

// Where:
// id     = {String} icon id
// width  = {Number} original pixel width
// height = {Number} original pixel height
// body   = {String} HTML content of <svg>
// sprite = {String} HTML <svg> tag with <use> for sprite usage
// symbol = {String} HTML <symbol> tag. Usefull when generating a sprite
// svg    = {String} HTML the actual <svg>
```

---

## React API

`@nrk/core-icons` provides a React/Preact API. You can access it as a NPM module:

```js
import CoreIcon from '@nrk/core-icons/jsx'

<CoreIcon id='nrk-logo-nrk' />                          // Render a NRK logo
<CoreIcon id='nrk-logo-nrk' style={{color: 'red'}} />   // Additional props will be used for attributes
```

```html
<!--demo-->
<div id="jsx-core-icon"></div>
<script type="text/jsx">
  ReactDOM.render(<CoreIcon id='nrk-logo-nrk' />, document.getElementById('jsx-core-icon'))
</script>
```
