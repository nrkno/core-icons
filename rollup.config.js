const uglify = require('rollup-plugin-uglify')
const buble = require('rollup-plugin-buble')
const svgToJS = require('svg-to-js')
const pkg = require('./package.json')
const path = require('path')
const fs = require('fs')

const PATH = path.join(__dirname, 'lib')
const SVGS = fs.readdirSync(PATH).filter((file) => file.slice(-4) === '.svg')

svgToJS({
  svgFileName: 'core-icons.js',
  svgFileNameMin: 'core-icons.min.js',
  srcPath: PATH,
  distPath: PATH,
  banner: `Copyright (c) 2015-${new Date().getFullYear()} NRK <opensource@nrk.no>`
})

// Build JSON api file and JS export
fs.writeFileSync(path.join(PATH, 'core-icons.json'), JSON.stringify(SVGS))
fs.writeFileSync(path.join(PATH, 'export.js'), `export default ${JSON.stringify(SVGS.reduce((acc, file) => {
  const id = file.slice(0,-4)
  const code = fs.readFileSync(path.join(PATH, file))
  const [,w,h] = String(code).match(/viewBox="\d+ \d+ (\d+) (\d+)"/)
  acc[id] = {width: w/10, height: h/10}
  return acc
}, {}))}`)

export default {
  input: 'lib/export.js',
  output: {
    file: pkg.main, // UDM for browsers
    format: 'umd',
    name: 'coreIcons',
    sourcemap: true
  },
  plugins: [buble(), uglify()]
}
