var GROUPS = {misc: []}
var ESCAPE = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '/': '&#x2F;', '\'': '&#x27;'}

// Calculate RGB brightness
function getBrightness (hex) {
  return ((parseInt(hex.substr(1, 2), 16) * 299) +
          (parseInt(hex.substr(3, 2), 16) * 587) +
          (parseInt(hex.substr(5, 2), 16) * 114)) / 1000
}

// Group icons by type and name
window.coreIcons().forEach(function (icon) {
  var name = icon.id.slice(4).split('--')[0] // Without nrk- and state
  var type = name.split('-')[0]
  var size = icon.id.indexOf('-logo-') === -1 ? 20 : 10
  var group = GROUPS[type] = GROUPS[type] || []

  group.push(`<div data-icon="${icon.id}" class="nrk-xs-6of12 nrk-sm-4of12 nrk-md-3of12 nrk-lg-2of12" style="padding:0 1em 1em 0">
    <div style="font-size:${size}px">${icon.sprite}</div>
    <div style="font-size:13px">${icon.id}<br>
      <a style="color:inherit" href="https://rawgit.com/nrkno/core-icons/master/lib/${icon.id}.svg">SVG</a> |
      <a style="color:inherit" href="javascript:window.svg2pdf('${icon.id}')">PDF</a> |
      <a style="color:inherit" href="javascript:window.svg2copy('${icon.id}')"">Copy HTML</a>
      <input type="text" style="position:absolute;left:-999px" value="${icon.sprite.replace(/[&<>"'/]/g, (v) => ESCAPE[v])}">
    </div>
  </div>`)
})

// Merge all single-icon GROUPS
Object.keys(GROUPS).forEach(function (type) {
  if (type !== 'misc' && GROUPS[type].length < 3) {
    GROUPS.misc = GROUPS.misc.concat(GROUPS[type])
    delete GROUPS[type]
  }
})

// Render icon-grid
document.querySelector('.docs-icons').innerHTML = Object.keys(GROUPS).map(function (type) {
  return '<h2 style="margin:3em 0 1em;width:100%">' + type +
    '<div style="margin:1em 0;border-bottom:1px solid currentColor;opacity:.2"></div></h2>' +
    GROUPS[type].sort().join('')
}).join('')

// Customize
document.addEventListener('input', function (event) {
  var element = event.target
  var value = element.value
  var label = element.previousElementSibling
  var icons = document.getElementById('icons')

  if (element.name === 'color') {
    icons.style.color = label.textContent = value
    icons.style.background = getBrightness(element.value) > 125 ? '#000' : '#fff'
  }
  if (element.name === 'search') {
    [].forEach.call(document.querySelectorAll('[data-icon]'), function (el) {
      el.style.display = el.getAttribute('data-icon').indexOf(value) < 0 ? 'none' : ''
    })
  }
})

window.svg2copy = function (id) {
  document.querySelector('[data-icon="' + id + '"] input').select()
  document.execCommand('copy')
}

// Convert SVG to PDF using https://github.com/devongovett/pdfkit/
window.svg2pdf = function (el, options, pdf) {
  if (typeof el === 'string') {
    var svg = document.getElementById(el)
    var icon = window.coreIcons(el)
    var color = document.querySelector('[name="color"]').value // Get color from input
    var scale = 28 / Math.min(icon.width, icon.height) // Scale to minimum 28 for iOS
    var pdfdoc = new window.PDFDocument({size: [icon.width * scale, icon.height * scale]})
    var link = document.createElement('a')
    var blob = window.blobStream()

    window.svg2pdf(svg, {color}, pdfdoc.scale(scale))
    pdfdoc.end()
    pdfdoc.pipe(blob).on('finish', function () {
      link.download = el + '.pdf'
      link.href = blob.toBlobURL('application/pdf')
      document.body.appendChild(link).click()
    })
  } else {
    [].forEach.call(el.children, (node) => {
      var fillr = (node.getAttribute('fill-rule') || 'nonzero').replace(/-*(zero|odd)$/, '-$1')
      var color = function (val) { return String(val).replace(/currentColor/i, options.color).replace(/none/i, '') }
      var float = function (key) { return Number(node.getAttribute(key)) || 0 }
      var style = {}

      // Style
      pdf.fillColor(style.fill = color(node.getAttribute('fill') || options.fill || options.color))
      pdf.strokeColor(style.stroke = color(node.getAttribute('stroke') || options.stroke || 'none'))
      pdf.lineWidth(style.lineWidth = Number(node.getAttribute('stroke-width')) || options.lineWidth || 1)
      pdf.lineJoin(style.lineJoin = node.getAttribute('stroke-linejoin') || options.lineJoin || 'miter')
      pdf.lineCap(style.lineCap = node.getAttribute('stroke-linecap') || options.lineCap || 'butt')

      // Draw
      switch (node.nodeName.toLowerCase()) {
        case 'g': window.svg2pdf(node, style, pdf); break
        case 'path': pdf.path(node.getAttribute('d')); break
        case 'line': pdf.moveTo(float('x1'), float('y1')).lineTo(float('x2'), float('y2')); break
        case 'rect': pdf.roundedRect(float('x'), float('y'), float('width'), float('height'), float('rx') || float('ry')); break
        case 'ellipse': pdf.ellipse(float('cx'), float('cy'), float('rx'), float('ry') || float('rx')); break
        case 'circle': pdf.circle(float('cx'), float('cy'), float('r')); break
        case 'polygon': pdf.polygon(node.getAttribute('points')); break
        default: console.log('Unsupported shape: ' + node.nodeName)
      }

      // Paint
      if (style.stroke && style.fill) pdf.fillAndStroke(fillr, style.stroke)
      else if (style.stroke) pdf.stroke(style.stroke)
      else if (style.fill) pdf.fill(fillr)
    })
  }
}
