import PDFDocument from 'pdfkit'
import * as svgson from 'svgson'
import archiver from 'archiver'
import svgtojs from '@nrk/svg-to-js'
import pkg from '../package.json'
import fs from 'fs'

function build () {
  const svgFiles = fs.readdirSync('lib').filter((file) => file.endsWith('.svg'))
  const docFiles = ['readme.md', 'lib/readme.md']
  const svgZipper = archiver('zip')
  const pdfZipper = archiver('zip')
  const icons = svgtojs({
    input: 'lib/',
    banner: `@nrk/core-icons v${pkg.version}`,
    scale: 16,
    cjs: 'core-icons.js',
    esm: 'core-icons.mjs',
    dts: 'core-icons.d.ts',
    cjsx: 'jsx/core-icons.js',
    esmx: 'jsx/core-icons.mjs',
    dtsx: 'jsx/core-icons.d.ts'
  })

  fs.writeFileSync('lib/core-icons.rss', rss())
  fs.writeFileSync('lib/core-icons.min.js', icons.iife)
  fs.writeFileSync('lib/core-icons.js', icons.iife)

  for (const file of svgFiles) {
    svgtopdf(`lib/${file}`)
  }
  for (const file of docFiles) {
    const readme = String(fs.readFileSync(file))
    fs.writeFileSync(file, readme.replace(/\/major\/\d+/, `/major/${pkg.version.match(/\d+/)}`))
  }

  svgZipper.pipe(fs.createWriteStream('lib/core-icons-svg.zip'))
  svgZipper.glob('lib/*.svg')
  svgZipper.finalize()
  pdfZipper.pipe(fs.createWriteStream('lib/core-icons-pdf.zip'))
  pdfZipper.glob('lib/*.pdf')
  pdfZipper.finalize()
}

function svgtopdf (el, options, pdf) {
  if (typeof el === 'string') {
    const svg = svgson.parseSync(fs.readFileSync(el, 'utf-8'))
    const [, , width, height] = svg.attributes.viewBox.split(' ').map(Number)
    const scale = 24 / Math.min(width, height)
    const pdfdoc = new PDFDocument({ size: [width * scale, height * scale] })
    pdfdoc.scale(scale)
    pdfdoc.pipe(fs.createWriteStream(el.replace('svg', 'pdf')))
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
        default: console.log('Unsupported shape: ' + node.nodeName)
      }

      // Paint
      if (style.stroke && style.fill) pdf.fillAndStroke(fillr, style.stroke)
      else if (style.stroke) pdf.stroke(style.stroke)
      else if (style.fill) pdf.fill(fillr)
    }
  }
}

function rss () {
  const fullName = 'Core Icons'
  const fileName = 'core-icons'
  const date = new Date(fs.statSync('lib/core-icons.sketch').mtime)
  return `
    <?xml version="1.0" encoding="UTF-8"?>
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
      </rss>
  `
}

build()
console.log('Build successful')
