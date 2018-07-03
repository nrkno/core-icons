const {uglify} = require('rollup-plugin-uglify')
const buble = require('rollup-plugin-buble')
const pkg = require('./package.json')
const path = require('path')
const fs = require('fs')

const ROOT = path.join(__dirname, 'lib')
const GLOBALS = {'react-dom': 'ReactDOM', react: 'React'} // Do not include react in out package

export default [{
  input: 'lib/core-icons.js',
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'coreIcons',
    intro: getIcons(ROOT), // Include icons
    sourcemap: true
  },
  watch: {include: 'lib/*.(svg|js)'},
  plugins: [buble(), uglify()]
}, {
  input: 'lib/core-icons.jsx',
  output: {
    file: 'jsx/index.js',
    format: 'umd',
    intro: getIcons(ROOT), // Include icons
    name: 'CoreIcon',
    sourcemap: true,
    globals: GLOBALS
  },
  external: Object.keys(GLOBALS),
  plugins: [buble(), uglify()]
}]

function getIcons (dir) {
  return Promise.resolve(
    fs.readdirSync(dir)
      .filter((file) => file.slice(-4) === '.svg')
      .reduce((acc, file, i, files) => {
        if (!i) fs.writeFileSync(path.join(dir, 'core-icons.json'), JSON.stringify(files))

        const id = file.slice(0, -4)
        const code = String(fs.readFileSync(path.join(dir, file)))
        const body = code.replace(/^[^>]+>|<[^<]+$/g, '').replace(/\s*([<>])\s*/g, '$1') // Strip white space around tokens
        const size = String(code.match(/viewBox="[^"]+/)).split(' ').map(Number)
        return acc.concat(`'${id}':['${body}',${size[2]},${size[3]}]`)
      }, []))
    .then((icons) => `var ICONS = {${icons.join(',')}}`) // Generate JS instead of JSON to save bytes
}
