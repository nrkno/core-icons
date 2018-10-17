import {uglify} from 'rollup-plugin-uglify'
import buble from 'rollup-plugin-buble'
import serve from 'rollup-plugin-serve'
import path from 'path'
import pkg from './package.json'
import fs from 'fs'

const banner = `/*! ${pkg.name} v${pkg.version} - Copyright (c) 2017-${new Date().getFullYear()} NRK */`
const globals = {'react-dom': 'ReactDOM', react: 'React'} // Do not include react in out package
const pluginsCJS = [buble(), !process.env.ROLLUP_WATCH || serve('lib')]
const pluginsMIN = pluginsCJS.concat(uglify({output: {comments: /^!/}}))

let iconsString

generateFiles()

export default [{
  watch: {include: 'lib/*.(svg|js)'},
  input: 'lib/core-icons.js',
  output: {
    name: 'coreIcons',
    file: 'lib/core-icons.min.js', // IIFE for static.nrk.no
    format: 'iife',
    sourcemap: true,
    intro,
    banner
  },
  plugins: pluginsMIN
}, {
  input: 'lib/core-icons.js',
  output: {
    name: 'coreIcons',
    file: 'lib/core-icons.cjs.js', // CJS for vanilla NPM install
    format: 'cjs',
    intro,
    banner
  },
  plugins: pluginsCJS
}, {
  input: 'lib/core-icons.jsx',
  output: {
    name: 'CoreIcon',
    file: 'lib/core-icons.jsx.js', // UDM for JSX documentation
    format: 'umd',
    sourcemap: true,
    intro,
    banner,
    globals
  },
  external: Object.keys(globals),
  plugins: pluginsMIN
}]

function generateFiles () {
  const version = process.env['npm_package_version']
  const major = version.slice(0, version.indexOf('.'))
  const ext = '.svg'
  const files = fs.readdirSync('./lib').filter((file) => path.extname(file) === ext)
  const icons = files.reduce((icons, file) => {
    const code = String(fs.readFileSync(`./lib/${file}`))
    const size = String(code.match(/viewBox="[^"]+/)).split(' ').map(Number)
    const body = code.replace(/^[^>]+>|<[^<]+$/g, '').replace(/\s*([<>])\s*/g, '$1') // Strip white space around tokens
    icons[path.basename(file, ext)] = [body, size[2], size[3]]
    return icons
  }, {})

  const jsIconTmpl = fs.readFileSync('./src/icon-tmpl.js', 'utf8')
  const mjsIconTmpl = fs.readFileSync('./src/icon-tmpl.mjs', 'utf8')
  const jsxIconTmpl = fs.readFileSync('./src/icon-tmpl.jsx', 'utf8')
  const jsIndexTmpl = fs.readFileSync('./src/index-tmpl.js', 'utf8')
  const jsxIndexTmpl = fs.readFileSync('./src/index-tmpl.jsx', 'utf8')
  const sketch = fs.readFileSync('./lib/core-icons.rss', 'utf8')
  const date = new Date(fs.statSync('./lib/core-icons.sketch').mtime)
  const docs = fs.readFileSync('./lib/docs.md', 'utf8')

  for (const id in icons) {
    const [body, width, height] = icons[id]
    const jsIconContent = jsIconTmpl
      .replace('{{GLOBAL}}', `coreIcons${major}`)
      .replace('{{BODY}}', body)
      .replace('{{WIDTH}}', width)
      .replace('{{HEIGHT}}', height)
      .replace('{{ID}}', id)
      fs.writeFileSync(`lib/${id}.js`, jsIconContent)
      const mjsIconContent = mjsIconTmpl
      .replace('{{BODY}}', body)
      .replace('{{WIDTH}}', width)
      .replace('{{HEIGHT}}', height)
      .replace('{{ID}}', id)
    fs.writeFileSync(`${id}.mjs`, mjsIconContent)
    const jsxIconContent = jsxIconTmpl
      .replace('{{BODY}}', body)
      .replace('{{WIDTH}}', width)
      .replace('{{HEIGHT}}', height)
      .replace('{{ID}}', id)
    fs.writeFileSync(`${id}.jsx`, jsxIconContent)
  }

  fs.writeFileSync('./lib/core-icons.json', JSON.stringify(files))
  fs.writeFileSync('./lib/docs.md', docs.replace(/\/major\/\d+/, `/major/${pkg.version.match(/\d+/)}`))
  fs.writeFileSync('./lib/core-icons.rss', sketch
    .replace(/(<pubDate>)[^<]+/, `$1${date.toUTCString()}`) // Add publish date to sketch
    .replace(/(sparkle:version=")[^"]+/, `$1${date.getTime()}`)) // Use mtime as version

  iconsString = `{${Object.keys(icons).map((id) => `'${id}':['${icons[id][0]}', ${icons[id][1]}, ${icons[id][2]}]`).join(',')}}`

  const jsIndexContent = jsIndexTmpl.replace('{{ICONS}}', iconsString)
  fs.writeFileSync(`index.js`, jsIndexContent)
  const jsxIndexContent = jsxIndexTmpl.replace('{{ICONS}}', iconsString)
  fs.writeFileSync(`index.jsx`, jsxIndexContent)
}

function intro () {
  return `var ICONS = ${iconsString}`
}
