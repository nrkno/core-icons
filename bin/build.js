import path from 'path'
import PDFDocument from 'pdfkit'
import * as svgson from 'svgson'
import archiver from 'archiver'
import fse from 'fs-extra'
import { version } from '../package.json'
import svgToJS from '@nrk/svg-to-js'

const srcFolder = 'lib'
const logoFolder = path.join(srcFolder, 'logo')
const iconFolder = path.join(srcFolder, 'icon')
const staticFolder = 'static'
const logoStaticFolder = path.join(staticFolder, 'logo')
const iconStaticFolder = path.join(staticFolder, 'icon')
const tmpFolder = 'build_tmp'
const npmLogoFolder = 'logo'
const npmJsxFolder = 'jsx'
const npmJsxLogoFolder = path.join(npmJsxFolder, 'logo')

function clean () {
  fse.removeSync(staticFolder)
  fse.removeSync(tmpFolder)
  fse.mkdirsSync(logoStaticFolder)
  fse.mkdirsSync(iconStaticFolder)
  fse.mkdirsSync(tmpFolder)
  // Remove npm files
  // TODO: clean up alljs, mjs, d.ts -files built to root, jsx/, logo/ and jsx/logo
}

function copyDocs () {
  // TODO: rework to something like this
  // const docFiles = ['readme.md', 'lib/readme.md']
  // for (const file of docFiles) {
  //   const readme = String(fse.readFileSync(file))
  //   fse.writeFileSync(file, readme.replace(/\/major\/\d+/, `/major/${pkg.version.match(/\d+/)}`))
  // }

  fse.copyFileSync(`${srcFolder}/index.html`, `${staticFolder}/index.html`)
  fse.copyFileSync(`${srcFolder}/readme.js`, `${staticFolder}/readme.js`)
  fse.copyFileSync(`${srcFolder}/readme.md`, `${staticFolder}/readme.md`)
}

function buildIcons () {
  // Copy svg from lib to static folder
  fse.copySync(iconFolder, iconStaticFolder)
  fse.copySync(logoFolder, logoStaticFolder)

  // Generate pdf from svg in static/
  const iconFiles = fse.readdirSync(iconStaticFolder)
  for (const file of iconFiles) {
    svgtopdf(path.join(iconStaticFolder, file))
  }
  const logoFiles = fse.readdirSync(logoStaticFolder)
  for (const file of logoFiles) {
    svgtopdf(path.join(logoStaticFolder, file))
  }

  // Generate zip archives for svg
  createZipArchive(iconStaticFolder, '*.svg', staticFolder, 'core-icons-svg')
  createZipArchive(logoStaticFolder, '*.svg', staticFolder, 'core-icons-logos-svg')

  // Generate archives for pdf
  createZipArchive(iconStaticFolder, '*.pdf', staticFolder, 'core-icons-pdf')
  createZipArchive(logoStaticFolder, '*.pdf', staticFolder, 'core-icons-logos-pdf')

  const icons = svgToJS({
    input: iconStaticFolder,
    banner: `@nrk/core-icons icons v${version}`,
    scale: 16
  })
  const logos = svgToJS({
    input: logoStaticFolder,
    banner: `@nrk/core-icons logos v${version}`,
    scale: 16
  })
  // Generate iife for just icons
  fse.writeFileSync(`${staticFolder}/core-icons-iife-icons.js`, icons.iife)
  // Generate iife for just logos
  fse.writeFileSync(`${staticFolder}/core-icons-iife-logo.js`, logos.iife)
  // Generate iife for icons and logos
  // Copy all sources to tempFolder
  fse.copySync(iconFolder, tmpFolder)
  fse.copySync(logoFolder, tmpFolder)
  const combined = svgToJS({
    input: tmpFolder,
    banner: `@nrk/core-icons v${version}`,
    scale: 16
  })
  fse.writeFileSync(`${staticFolder}/core-icons-iife.js`, combined.iife)
  // Remove tempfolder
  fse.removeSync(tmpFolder)

  // Generate js and mjs with types for icons and logos
  // TODO: look over this part?
  fse.writeFileSync('core-icons.js', icons.cjs)
  fse.writeFileSync('core-icons.mjs', icons.esm)
  fse.writeFileSync('core-icons.d.ts', icons.dts)
  fse.writeFileSync(`${npmLogoFolder}/core-icons-logos.js`, logos.cjs)
  fse.writeFileSync(`${npmLogoFolder}/core-icons-logos.mjs`, logos.esm)
  fse.writeFileSync(`${npmLogoFolder}/core-icons-logos.d.ts`, logos.dts)

  // Generate js and mjs with types for icons and logos for React
  // TODO: -and look over this part?
  fse.writeFileSync(`${npmJsxFolder}/core-icons.js`, icons.cjs)
  fse.writeFileSync(`${npmJsxFolder}/core-icons.mjs`, icons.esm)
  fse.writeFileSync(`${npmJsxFolder}/core-icons.d.ts`, icons.dts)
  fse.writeFileSync(`${npmJsxLogoFolder}/core-icons-logos.js`, logos.cjs)
  fse.writeFileSync(`${npmJsxLogoFolder}/core-icons-logos.mjs`, logos.esm)
  fse.writeFileSync(`${npmJsxLogoFolder}/core-icons-logos.d.ts`, logos.dts)
}

function createZipArchive (srcFolder, globPattern, destPath, archiveName) {
  console.log(`Create svg and pdf archives for source ${srcFolder}`)
  const svgZipper = archiver('zip')
  svgZipper.pipe(fse.createWriteStream(`${destPath}/${archiveName}.zip`))
  svgZipper.glob(globPattern, {
    cwd: srcFolder
  })
  svgZipper.finalize()
  console.log(`Successfully created ${destPath}/${archiveName}.zip`)
}

function svgtopdf (el, options, pdf) {
  if (typeof el === 'string') {
    const svg = svgson.parseSync(fse.readFileSync(el, 'utf-8'))
    const [, , width, height] = svg.attributes.viewBox.split(' ').map(Number)
    const scale = 24 / Math.min(width, height)
    const pdfdoc = new PDFDocument({ size: [width * scale, height * scale] })
    pdfdoc.scale(scale)
    pdfdoc.pipe(fse.createWriteStream(el.replace('svg', 'pdf')))
    svgtopdf(svg, { fill: '#000' }, pdfdoc)
    pdfdoc.end()
  } else {
    for (const node of el.children) {
      const fillr = (node.attributes['fill-rule'] || 'nonzero').replace(/-*(zero|odd)$/, '-$1')
      const color = (val) => String(val).replace(/currentColor/i, options.color).replace(/none/i, '')
      const float = (key) => Number(node.attributes[key]) || 0
      const style = {}

      // Style
      pdf.fillColor(style.fill = color(node.attributes.fill || options.fill || options.color))
      pdf.strokeColor(style.stroke = color(node.attributes.stroke || options.stroke || 'none'))
      pdf.lineWidth(style.lineWidth = Number(node.attributes['stroke-width']) || options.lineWidth || 1)
      pdf.lineJoin(style.lineJoin = node.attributes['stroke-linejoin'] || options.lineJoin || 'miter')
      pdf.lineCap(style.lineCap = node.attributes['stroke-linecap'] || options.lineCap || 'butt')

      // Draw
      switch (node.name) {
        case 'g': svgtopdf(node, style, pdf); break
        case 'path': pdf.path(node.attributes.d); break
        case 'line': pdf.moveTo(float('x1'), float('y1')).lineTo(float('x2'), float('y2')); break
        case 'rect': pdf.roundedRect(float('x'), float('y'), float('width'), float('height'), float('rx') || float('ry')); break
        case 'ellipse': pdf.ellipse(float('cx'), float('cy'), float('rx'), float('ry') || float('rx')); break
        case 'circle': pdf.circle(float('cx'), float('cy'), float('r')); break
        case 'polygon': pdf.polygon(node.attributes.points); break
        default: console.log(`Unsupported shape: ${node.name}`)
      }

      // Paint
      if (style.stroke && style.fill) pdf.fillAndStroke(fillr, style.stroke)
      else if (style.stroke) pdf.stroke(style.stroke)
      else if (style.fill) pdf.fill(fillr)
    }
  }
}
function build () {
  clean()
  buildIcons()
  copyDocs()
}

build()
console.log('Build successful')
