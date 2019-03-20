const svgToJS = require('@nrk/svg-to-js')
const pkg = require('../package.json')
const fs = require('fs')

function getSketchRSS () {
  const fullName = 'Core Icons'
  const fileName = 'core-icons'
  const date = new Date(fs.statSync('lib/core-icons.sketch').mtime)

  return `<?xml version="1.0" encoding="UTF-8"?>
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
</rss>`
}

function buildDocs () {
  ['readme.md', 'lib/readme.md'].forEach((path) => {
    const readme = String(fs.readFileSync(path))
    fs.writeFileSync(path, readme.replace(/\/major\/\d+/, `/major/${pkg.version.match(/\d+/)}`))
  })
}

const icons = svgToJS({
  input: 'lib/',
  banner: `@nrk/core-icons v${pkg.version}`,
  scale: 10,

  cjs: 'core-icons.js',
  esm: 'core-icons.mjs',
  dts: 'core-icons.d.ts',
  cjsx: 'jsx/core-icons.js',
  esmx: 'jsx/core-icons.mjs',
  dtsx: 'jsx/core-icons.d.ts'
})

buildDocs()
fs.writeFileSync('lib/core-icons.rss', getSketchRSS())
fs.writeFileSync('lib/core-icons.min.js', icons.iife)
fs.writeFileSync('lib/core-icons.js', icons.iife)

console.log('Built @nrk/core-icons')
