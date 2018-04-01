---
name: Javascript
category: Usage
---

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
