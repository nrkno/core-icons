const jsdom = require('jsdom')
const fs = require('fs')
const coreIconsIife = fs.readFileSync(
  './node_modules/@nrk/core-icons/core-icons-iife.js',
  'utf-8'
)

const { JSDOM } = jsdom
const { window } = new JSDOM(
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script>${coreIconsIife}</script>
</head>
<body>
</body>
</html>
`,
  { runScripts: 'dangerously' }
)

const iconsDef = window.document.querySelector('head>svg')

console.info(
  `Iife script creates an <svg>-tag with ${JSON.stringify(
    iconsDef?.children?.length
  )} children (icons + expressive variants) in the <head>-tag when run\n`
)
