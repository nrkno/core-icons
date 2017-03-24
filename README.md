# @nrk/core-icons
Core icons for web services and native apps.

## Installation

### Install via static.nrk.no (preferred)
```html
<link rel="https://static.nrk.no/core-icons/1.0.0/core-icons.min.css">
```

### Install via `npm`
```bash
npm install @nrk/core-icons --save
```

```css
@import '@nrk/core-icons/dist/core-icons.css';
```

## Local development
First clone `@nrk/core-icons` and install dependencies:

```bash
git clone git@github.com:nrkno/core-icons.git
cd core-icons
npm install
```

### Building and committing
After having applied changes, remember to build the CSS, SVG and fonts before pushing the changes upstream.

```bash
git checkout -b feature/my-changes
# update the source code
npm run build
git commit -am "Add my changes"
git push origin feature/my-changes
# then make PR to the master branch,
# and assign a CSS developer to review your code
```

> NOTE! Please also make sure to keep commits small, clean and that the commit message actually refers to the updated files. Formally, make sure the message is **Capitalized** and **starts with a verb**.
