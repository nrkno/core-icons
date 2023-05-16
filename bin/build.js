import path from 'path'
import PDFDocument from 'pdfkit'
import * as svgson from 'svgson'
import archiver from 'archiver'
import fse from 'fs-extra'
import { version } from '../package.json'
import svgToJS from '@nrk/svg-to-js'

const srcFolder = 'lib'
const staticFolder = 'static'
const tmpFolder = 'build_tmp'
const npmJsxFolder = 'jsx'

/**
 * @param {string} groupName
 * @returns {string} bundle name for group
 */
function getBundleName (groupName) {
  return groupName === 'icon' ? 'core-icons' : `core-icons-${groupName}`
}
/**
 * @param {string} groupName
 * @returns {path} npm path for group
 */
function getNpmPath (groupName) {
  return groupName === 'icon' ? '' : groupName
}

/**
 * @param {String[]} groupNames folder groups to clear out
 */
function clean (groupNames) {
  // Clear static folder
  fse.removeSync(staticFolder)
  // Clear tmp folder
  fse.removeSync(tmpFolder)
  fse.mkdirsSync(tmpFolder)
  // Clear groups
  for (const groupName of groupNames) {
    const bundleName = getBundleName(groupName)
    const npmPath = getNpmPath(groupName)
    const staticGroupFolder = path.join(staticFolder, groupName)

    // Remove old npm content
    fse.removeSync(path.join(npmPath, `${bundleName}.js`))
    fse.removeSync(path.join(npmPath, `${bundleName}.mjs`))
    fse.removeSync(path.join(npmPath, `${bundleName}.d.ts`))
    // Remove old npm jsx content
    fse.removeSync(path.join(npmJsxFolder, npmPath, `${bundleName}.js`))
    fse.removeSync(path.join(npmJsxFolder, npmPath, `${bundleName}.mjs`))
    fse.removeSync(path.join(npmJsxFolder, npmPath, `${bundleName}.d.ts`))

    // Create folder for group in staticFolder
    fse.mkdirsSync(staticGroupFolder)
    fse.mkdirsSync(path.join(npmJsxFolder, npmPath))
  }
}

function updateDocs () {
  // Update reference to major version in links to static e.g. https://static.nrk.no/core-icons/major/12/core-icons-iife.js
  const file = 'lib/readme.md'
  const majorPattern = /\/core-icons\/major\/\d+/g
  const currentMajorVersion = `/core-icons/major/${version.match(/\d+/)}`

  const readme = String(fse.readFileSync(file))
  const references = readme.match(majorPattern)

  // Return early if no references
  if (references == null) return
  let isOutDated = false
  for (const ref of references) {
    if (ref !== currentMajorVersion) isOutDated = true
  }
  if (isOutDated) {
    console.log(`Found outdated version reference in ${file}, updating with ${currentMajorVersion}`)
    fse.writeFileSync(file, readme.replaceAll(majorPattern, currentMajorVersion))
  }
}

function copyDocs () {
  fse.copyFileSync(`${srcFolder}/index.html`, `${staticFolder}/index.html`)
  fse.copyFileSync(`${srcFolder}/readme.js`, `${staticFolder}/readme.js`)
  fse.copyFileSync(`${srcFolder}/readme.md`, `${staticFolder}/readme.md`)
  fse.copyFileSync(`${srcFolder}/readme.css`, `${staticFolder}/readme.css`)
}

function buildIcons (groupName) {
  const src = path.join(srcFolder, groupName)
  const staticDest = path.join(staticFolder, groupName)
  const bundleName = getBundleName(groupName)
  // Copy from src to dest
  fse.copySync(src, staticDest)

  // Make pdfs
  const svgFiles = fse.readdirSync(staticDest)
  for (const file of svgFiles) {
    try {
      svgtopdf(path.join(staticDest, file))
    } catch (error) {
      console.error(`Something went wrong while parsing file ${file} through svgomg resulting in error: ${error}`)
    }
  }

  // Generate zip archives for svg
  createZipArchive(staticDest, '*.svg', staticFolder, `${bundleName}-svg`)
  // Generate zip archives for pdf
  createZipArchive(staticDest, '*.pdf', staticFolder, `${bundleName}-pdf`)

  // svgToJs
  const icons = svgToJS({
    input: staticDest,
    banner: `@nrk/core-icons ${groupName} v${version}`,
    scale: 16
  })
  // Generate iife
  fse.writeFileSync(
    `${staticFolder}/core-icons-iife-${groupName}.js`,
    icons.iife
  )
  // Determine npmPath
  const npmPath = getNpmPath(groupName)

  // Generate js and mjs with types for icons and logos
  fse.writeFileSync(path.join(npmPath, `${bundleName}.js`), icons.cjs)
  fse.writeFileSync(path.join(npmPath, `${bundleName}.mjs`), icons.esm)
  fse.writeFileSync(path.join(npmPath, `${bundleName}.d.ts`), icons.dts)

  // Generate jsx and mjsx with types for icons and logos
  fse.writeFileSync(path.join(npmJsxFolder, npmPath, `${bundleName}.js`), icons.cjsx)
  fse.writeFileSync(path.join(npmJsxFolder, npmPath, `${bundleName}.mjs`), icons.esmx)
  fse.writeFileSync(path.join(npmJsxFolder, npmPath, `${bundleName}.d.ts`), icons.dtsx)
}

/**
 * Generate iife for all icons
 * @param {String[]} groupNames groups to include
 */
function buildMasterIife (groupNames, fileName, copyToRoot = false) {
  // Copy all sources to tempFolder
  for (const groupName of groupNames) {
    fse.copySync(path.join(srcFolder, groupName), tmpFolder)
  }

  const combined = svgToJS({
    input: tmpFolder,
    banner: `@nrk/core-icons ${groupNames.join(', ')} v${version}`,
    scale: 16
  })
  fse.writeFileSync(`${staticFolder}/${fileName}`, combined.iife)
  if (copyToRoot) {
    fse.copyFileSync(`${staticFolder}/${fileName}`, fileName)
  }
  // Remove tempfolder
  fse.removeSync(tmpFolder)
}

function createZipArchive (srcFolder, globPattern, destPath, archiveName) {
  console.log(`Create svg and pdf archives for source ${srcFolder}`)
  const svgZipper = archiver('zip')
  svgZipper.pipe(fse.createWriteStream(`${destPath}/${archiveName}.zip`))
  svgZipper.glob(globPattern, {
    cwd: srcFolder
  })
  // Append license file to archive
  svgZipper.append(fse.createReadStream(path.join(__dirname, '..', 'LICENSE.txt')), { name: 'LICENSE.txt' })
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
  clean(['icon', 'expressive', 'logo', 'preview'])
  buildIcons('icon')
  buildIcons('expressive')
  buildIcons('logo')
  buildIcons('preview')
  buildMasterIife(['icon', 'expressive'], 'core-icons-iife.js', true)
  // Generate iife file containing logos for legacy support in cdn
  buildMasterIife(['icon', 'expressive', 'logo'], 'core-icons.min.js')
  updateDocs()
  copyDocs()
}

build()
console.log('Build successful')
