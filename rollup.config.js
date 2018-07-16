import {uglify} from 'rollup-plugin-uglify'
import buble from 'rollup-plugin-buble'
import serve from 'rollup-plugin-serve'
import fs from 'fs'

const globals = {'react-dom': 'ReactDOM', react: 'React'} // Do not include react in out package
const plugins = [buble(), uglify(), !process.env.ROLLUP_WATCH || serve('lib')]

export default [{
  input: 'lib/core-icons.js',
  output: {
    file: 'lib/core-icons.min.js',
    format: 'umd',
    name: 'coreIcons',
    sourcemap: true,
    intro
  },
  watch: {include: 'lib/*.(svg|js)'},
  plugins
}, {
  input: 'lib/core-icons.jsx',
  output: {
    file: 'jsx/index.js',
    format: 'umd',
    name: 'CoreIcon',
    sourcemap: true,
    intro,
    globals
  },
  external: Object.keys(globals),
  plugins
}]

function intro () {
  const files = fs.readdirSync('./lib').filter((file) => file.slice(-4) === '.svg')
  const icons = files.map((file) => {
    const code = String(fs.readFileSync(`./lib/${file}`))
    const body = code.replace(/^[^>]+>|<[^<]+$/g, '').replace(/\s*([<>])\s*/g, '$1') // Strip white space around tokens
    const size = String(code.match(/viewBox="[^"]+/)).split(' ').map(Number)
    return `'${file.slice(0, -4)}':['${body}',${size[2]},${size[3]}]` // Generate JS instead of JSON to save bytes
  })

  fs.writeFileSync('./lib/core-icons.json', JSON.stringify(files))

  return `var ICONS = {${icons.join(',')}}`
}
