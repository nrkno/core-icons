# @nrk/core-icons
Core icons for web services and native apps.

## Installation

### Install via static.nrk.no (preferred)
Use the latest version:
```html
<script src="https://static.nrk.no/core-icons/latest/core-icons.min.js"></script>
```
Or choose a specific version:
```html
<script src="https://static.nrk.no/core-icons/X.X.X/core-icons.min.js"></script>
```

### Install via `npm`
```bash
npm install @nrk/core-icons --save
```

```css
@import '@nrk/core-icons/dist/core-icons.css';
```

## Local development
First clone `@nrk/core-icons` and install its dependencies:

```bash
git clone git@github.com:nrkno/core-icons.git
cd core-icons
npm install
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
