import {uglify} from 'rollup-plugin-uglify'
import buble from 'rollup-plugin-buble'
import serve from 'rollup-plugin-serve'
import pkg from './package.json'
import fs from 'fs'

const banner = `/*! ${pkg.name} v${pkg.version} - Copyright (c) 2017-${new Date().getFullYear()} NRK */`
const globals = {'react-dom': 'ReactDOM', react: 'React'} // Do not include react in out package
const pluginsCJS = [buble(), !process.env.ROLLUP_WATCH || serve('lib')]
const pluginsMIN = pluginsCJS.concat(uglify({output: {comments: /^!/}}))

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
}, {
  input: 'lib/core-icons.jsx', // CJS for JSX NPM install
  output: {
    name: 'CoreIcon',
    file: 'jsx.js',
    format: 'cjs',
    intro,
    banner,
    globals
  },
  external: Object.keys(globals),
  plugins: pluginsCJS
}]

function intro () {
  const files = fs.readdirSync('./lib').filter((file) => file.slice(-4) === '.svg')
  const icons = files.map((file) => {
    const code = String(fs.readFileSync(`./lib/${file}`))
    const size = String(code.match(/viewBox="[^"]+/)).split(' ').map(Number)
    const body = code.replace(/^[^>]+>|<[^<]+$/g, '').replace(/\s*([<>])\s*/g, '$1') // Strip white space around tokens
    return `'${file.slice(0, -4)}':['${body}',${size[2]},${size[3]}]` // Generate JS instead of JSON to save bytes
  })

  const coeff = 1000 * 60 * 5 // Round to nearest 5 minutes so RSS date does not change too often
  const date = new Date(Math.round(Date.now() / coeff) * coeff)
  const semverint = Number(pkg.version.split('.').map((v) => v.padStart(3, '0')).join(''))
  const sketch = String(fs.readFileSync('./lib/core-icons.rss'))
  const docs = String(fs.readFileSync('./lib/docs.md'))

  fs.writeFileSync('./lib/core-icons.json', JSON.stringify(files))
  fs.writeFileSync('./lib/docs.md', docs.replace(/\/major\/\d+/, `/major/${pkg.version.match(/\d+/)}`))
  fs.writeFileSync('./lib/core-icons.rss', sketch
    .replace(/(<pubDate>)[^<]+/, `$1${date.toUTCString()}`) // Add publish date to sketch
    .replace(/(sparkle:version=")[^"]+/, `$1${semverint}`)) // Convert semver to int version number

  return `var ICONS = {${icons.join(',')}}`
}
