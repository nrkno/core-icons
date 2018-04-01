---
name: Core Icons
category: Introduction
---

<link rel="stylesheet" href="docs.css">

> `core-icons` exposes a set of standard NRK icons. Icons scale based `font-size`, and gives sharpest rendering with font sizes divisible with 10. E.g: `svg { font-size: 10px }`. Insert the code below into the `<body>` of your page to use icons as [svg symbols](https://css-tricks.com/svg-symbol-good-choice-icons/).

<a class="nrk-button" href="https://github.com/nrkno/core-icons">View on Github</a>
<a class="nrk-button" href="https://github.com/nrkno/core-icons/archive/master.zip">Download icons</a>

## Use from static.nrk.no *- recommended*

```html
<script async src="https://static.nrk.no/core-icons/latest/core-icons.min.js"></script>
```

## Use from NPM *- gives access to [Javascript API](/#javascript)*
```bash
npm install @nrk/core-icons --save
```
``` js
import coreIcons from '@nrk/core-icons'    // Vanilla JS
import CoreIcon from '@nrk/core-icons/jsx' // ...or React/Preact compatible JSX
```

## FAQ

<details>
<summary>Can I load a subset of icons?</summary>
One of the missions of having a shared icon set, is to provide a consistent and predictable coding environment across platforms and products. Please include the full [`core-icons.min.js`](https://static.nrk.no/core-icons/latest/core-icons.min.js), even though your product currently is not using all icons.
</details>

<details>
<summary>How can I request a new icon?</summary>
Please [see if your icon request already exists](https://github.com/nrkno/core-icons/issues?q=is%3Aissue+is%3Aopen+Icon+request), and add a +1 reaction if found. For [new icon requests](https://github.com/nrkno/core-icons/issues/new?title=Icon%20Request:%20&labels=enhancement), describe how you plan to use the icon and subjects to be covered. Icon requests are processed by the NRK Design Forum.
</details>

<details>
<summary>Why loading icons as a javascript-file?</summary>
SVG symbols are [great for styling and accessibility](https://css-tricks.com/svg-symbol-good-choice-icons/), but can not load cross domain, or from external file and in IE (9,10,11). Javascript provides us a cacheable, cross-domain method load the icons, without adding extra overhead to each html-file.
</details>

<details>
<summary>What is the naming convention?</summary>
All icons are prefixed with nrk- to play nice with existing code. Furthermore, we follow [BEM name conventions](http://getbem.com/), so all related icons are scopes equally (i.e. `nrk-logo-` or `nrk-media-`), and postfixed with modifiers for states (i.e. `--active`)
</details>
