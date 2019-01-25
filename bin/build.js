const pkg = require('../package.json')
const fs = require('fs')
const util = require('util')

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

function buildIcons () {
  return readdir('lib').then((files) => {
    return files.map((file) => {
      if (file.slice(-4) !== '.svg') return // Skip non-icons
      const id = file.slice(0, -4)
      const code = String(fs.readFileSync(`lib/${file}`))
      const [x, y, w, h] = String(code.match(/viewBox="[^"]+/)).split(' ').map(Number)
      const body = code.replace(/^[^>]+>|<[^<]+$/g, '').replace(/\s*([<>])\s*/g, '$1') // Strip white space around tokens
      const svg = `<svg style="width:${w / 10}em;height:${h / 10}em" viewBox="0 0 ${w} ${h}" focusable="false" aria-hidden="true">${body}</svg>`
      const key = id.replace(/-+./g, (m) => m.slice(-1).toUpperCase()) // camelCase
      const jsx = key.replace(/./, (m) => m.toUpperCase()) // TitleCamelCase
      return { id, body, key, jsx, svg, x, y, w, h }
    }).filter(Boolean) // Remove falsy values
  })
}

function buildJSON (icons) {
  return writeFile('lib/core-icons.json', JSON.stringify(icons.map(({ id }) => `${id}.svg`)))
}

function buildDTS (icons) {
  return writeFile('core-icons.d.ts', icons.map(({ key }) => `export declare const ${key}: string`).join('\n'))
}

function buildCJS (icons) {
  return writeFile('core-icons.js', `module.exports = {${icons.map(({ key, svg }) => `'${key}':'${svg}'`).join(',')}}`)
}

function buildMJS (icons) {
  return writeFile('core-icons.mjs', icons.map(({ key, svg }) => `export const ${key} = '${svg}'`).join('\n'))
}

function buildIIFE (icons) {
  const symbols = icons.map(({ id, w, h, body }) => `<symbol id="${id}" viewBox="0 0 ${w} ${h}">${body}</symbol>`)
  const script = `if (typeof document !== 'undefined') {
  window.coreIcons = function (icons) {
    console.warn('Using window.coreIcons is deprecated')
    return {}
  }
  var div = document.createElement('div')
  div.innerHTML = '<svg data-core-icons="${pkg.version}" xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols}</svg>'
  document.head.appendChild(div.firstElementChild)
}\n`
  return Promise.all([
    writeFile('lib/core-icons.min.js', script),
    writeFile('lib/core-icons.js', script)
  ])
}

function buildJSX (icons) {
  return writeFile('jsx/core-icons.js', `const React = require('react')
module.exports = {${icons.map(({ body, jsx, w, h }) => `${jsx}: function (attr) {
  return React.createElement('svg', Object.keys(attr=attr||{})
    .reduce(function(acc,key){acc[key]=attr[key];return acc}, {
      'aria-hidden': true,
      focusable: false,
      viewBox: '0 0 ${w} ${h}',
      style: {width: '${w / 10}em', height: '${h / 10}em'},
      dangerouslySetInnerHTML: {__html: '${body}'}
    }))
}`.replace(/\n|\s{2,}/g, '')).join(',')}}`)
}

function buildJSXMJS (icons) {
  return writeFile('jsx/core-icons.mjs', `import React from 'react'
${icons.map(({ body, jsx, w, h }) => `export function ${jsx} (attr) {
  return React.createElement('svg', Object.keys(attr=attr||{})
    .reduce(function(acc,key){acc[key]=attr[key];return acc}, {
      'aria-hidden': true,
      focusable: false,
      viewBox: '0 0 ${w} ${h}',
      style: {width: '${w / 10}em', height: '${h / 10}em'},
      dangerouslySetInnerHTML: {__html: '${body}'}
    }))
}`.replace(/\n|\s{2,}/g, '')).join('\n')}`)
}

function buildJSXDTS (icons) {
  return writeFile('jsx/core-icons.d.ts', icons.map(({ jsx }) => `export declare const ${jsx}: React.FunctionComponent<React.SVGProps<SVGElement>>`).join('\n'))
}

function buildSketch () {
  const fullName = 'Core Icons'
  const fileName = 'core-icons'
  const date = new Date(fs.statSync('lib/core-icons.sketch').mtime)
  return writeFile('lib/core-icons.rss', `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
  <channel>
    <title>${fullName}</title>
    <description>${fullName}</description>
    <image>
      <url></url>
      <title>${fullName}</title>
    </image>
    <generator>Sketch</generator>
    <item>
      <title>${fullName}</title>
      <pubDate>${date.toUTCString()}</pubDate>
      <enclosure url="https://static.nrk.no/${fileName}/latest/${fileName}.sketch" type="application/octet-stream" sparkle:version="${date.getTime()}"/>
    </item>
  </channel>
</rss>`)
}

function buildDocs () {
  return readFile('lib/readme.md', 'utf8').then((docs) => {
    return writeFile('lib/readme.md', docs.replace(/\/major\/\d+/, `/major/${pkg.version.match(/\d+/)}`))
  })
}

buildIcons().then((icons) => Promise.all([
  buildIIFE(icons),
  buildDTS(icons),
  buildMJS(icons),
  buildCJS(icons),
  buildJSX(icons),
  buildJSXDTS(icons),
  buildJSXMJS(icons).then(() => console.log('Built JS')),
  buildJSON(icons).then(() => console.log('Built JSON')),
  buildDocs(icons).then(() => console.log('Built Docs')),
  buildSketch(icons).then(() => console.log('Built Sketch'))
])).catch((err) => console.log(err.stack))
