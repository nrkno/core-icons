const pkg = require('../package.json')
const fs = require('fs')
const icons = fs.readdirSync('lib').map((file) => {
  if (file.slice(-4) !== '.svg') return // Skip non-icons
  const id = file.slice(0, -4)
  const code = String(fs.readFileSync(`lib/${file}`))
  const [x, y, w, h] = String(code.match(/viewBox="[^"]+/)).split(' ').map(Number)
  const body = code.replace(/^[^>]+>|<[^<]+$/g, '').replace(/\s*([<>])\s*/g, '$1') // Strip white space around tokens
  const svg = `<svg style="width:${w / 10}em;height:${h / 10}em" viewBox="0 0 ${w} ${h}" focusable="false" aria-hidden="true">${body}</svg>`
  const key = id.replace(/-+./g, (m) => m.slice(-1).toUpperCase())
  return {id, body, key, svg, x, y, w, h}
}).filter(Boolean) // Remove falsy values

generateSketch()
generateDocs()
generateJSON()
generateIIFE()
generateMJS()
generateJSX()

function generateJSON () {
  fs.writeFileSync('lib/core-icons.json', JSON.stringify(icons.map(({id}) => `${id}.svg`)))
}

function generateMJS () {
  fs.writeFileSync('core-icons.mjs', icons.map(({key, svg}) => `export const ${key} = '${svg}'`).join('\n'))
}

function generateIIFE () {
  const symbols = icons.map(({id, w, h, body}) => `<symbol id="${id}" viewBox="0 0 ${w} ${h}">${body}</symbol>`)
  const script = `if(typeof document !== 'undefined'){
  var div = document.createElement('div')
  div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols}</svg>'
  document.head.appendChild(div.firstElementChild)
}`
  fs.writeFileSync('lib/core-icons.min.js', script)
  fs.writeFileSync('lib/core-icons.js', script)
}

function generateJSX () {
  fs.writeFileSync('core-icons.jsx', `import React from 'react'
${icons.map(({body, key, w, h}) => `export function ${key} () {
  return React.createElement('svg', {
    'aria-hidden': true,
    focusable: false,
    viewbox: '0 0 ${w} ${h}',
    style: {width: '${w / 10}em', height: '${h / 10}em'},
    dangerouslySetInnerHTML: {__html: '${body}'}
  })
}`.replace(/\n|\s{2,}/g, '')).join('\n')}`)
}

function generateSketch () {
  const rss = fs.readFileSync('lib/core-icons.rss', 'utf8')
  const date = new Date(fs.statSync('lib/core-icons.sketch').mtime)
  fs.writeFileSync('lib/core-icons.rss', rss
    .replace(/(<pubDate>)[^<]+/, `$1${date.toUTCString()}`) // Add publish date to sketch
    .replace(/(sparkle:version=")[^"]+/, `$1${date.getTime()}`)) // Use mtime as version
}

function generateDocs () {
  const docs = fs.readFileSync('lib/docs.md', 'utf8')
  fs.writeFileSync('lib/docs.md', docs.replace(/\/major\/\d+/, `/major/${pkg.version.match(/\d+/)}`))
}
