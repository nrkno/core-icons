# @nrk/core-icons
> Icon and logo kit providing a consistent and predictable user experience across platforms and NRK services

## Documentation

https://static.nrk.no/core-icons/latest/

## Installation

[Download the Sketch library](sketch://add-library?url=https%3A%2F%2Fstatic.nrk.no%2Fcore-icons%2Flatest%2Fcore-icons.rss) for sketching, [individual SVGs](https://static.nrk.no/core-icons/latest/index.html#icons) for Android, [PDFs](https://static.nrk.no/core-icons/latest/index.html#icons) for iOS. All icons follow [BEM naming conventions](http://getbem.com/) and are prefixed with `nrk-` to play nice with existing code.

### Using NPM

```bash
npm install @nrk/core-icons
```

All icons are exposed individually as exported constants (enabling [tree shaking](https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd)):

```js
import { nrkLogoNrk } from '@nrk/core-icons'      // Vanilla JS, String
import { NrkLogoNrk } from '@nrk/core-icons/jsx'  // React, ReactElement

<NrkLogoNrk />                                    // Example render a NRK logo with React
<span style={{ color: 'red', fontSize: 20 }}>     // Style is inherited from parent element
  <NrkLogoNrk />
</span>
```

### Using static

Recommended only for prototyping.

```html
<script async src="https://static.nrk.no/core-icons/major/10/core-icons.min.js"></script>
```

## Local development
First clone `@nrk/core-icons` and install its dependencies:

```bash
git clone git@github.com:nrkno/core-icons.git
cd core-icons
npm install
npm start # Your browser will open documentation with hot reloading
```

## Building and committing
After having applied changes, remember to build before pushing the changes upstream.

```bash
git checkout -b feature/my-changes
# update the source code
npm run build
git commit -am "Add my changes"
git push origin feature/my-changes
# then make a PR to the master branch,
# and assign another developer to review your code
```

> NOTE! Please also make sure to keep commits small and clean (that the commit message actually refers to the updated files).  
> Stylistically, make sure the commit message is **Capitalized** and **starts with a verb in the present tense** (for example `Add minification support`).
