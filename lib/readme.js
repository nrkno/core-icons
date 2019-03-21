var GROUPS = { misc: [] }

// Calculate RGB brightness
function getBrightness (hex) {
  return ((parseInt(hex.substr(1, 2), 16) * 299) +
          (parseInt(hex.substr(3, 2), 16) * 587) +
          (parseInt(hex.substr(5, 2), 16) * 114)) / 1000
}

function escapeSVG (data) {
  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')
  return data.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)
}

// Group icons by type and name
setTimeout(function () {
  [].forEach.call(document.querySelectorAll('symbol'), function (icon) {
    var type = icon.id.slice(4).split('-')[0] // Without nrk- and state
    var size = icon.viewBox.baseVal
    var font = icon.id.indexOf('-logo-') === -1 ? 20 : 10
    var back = icon.id.indexOf('--colorwhite') === -1 ? '' : 'background: black; padding: 2px'
    var group = GROUPS[type] = GROUPS[type] || []

    group.push('<div data-icon="' + icon.id + '" style="padding:0 1em 1em 0">' +
      '<div style="font-size:' + font + 'px; ' + back + '">' +
        '<svg style="width:' + (size.width / 10) + 'em;height:' + (size.height / 10) + 'em" focusable="false" aria-hidden="true"><use xlink:href="#' + icon.id + '" /></svg>' +
       '</div>' +
      '<div style="font-size:13px">' + icon.id + '<br>' +
        '<a href="' + icon.id + '.svg" download>Download SVG</a>' +
        '<button onclick="savePDF(\'' + icon.id + '\')">Download PDF</button><br>' +
        '<button onclick="copyHTML(\'' + icon.id + '\')"">Copy HTML</button> |' +
        '<button onclick="copyCSS(\'' + icon.id + '\')"">Copy CSS</button>' +
      '</div>' +
    '</div>')
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
    return '<h3 class="docs-heading--3" data-icon>' + type +
      '<div style="margin:1em 0;border-bottom:1px solid currentColor;opacity:.1"></div></h3>' +
      GROUPS[type].sort().join('')
  }).join('')
}, 100) // Allow browser to render page before parsing all icons

// Customize
document.addEventListener('input', function (event) {
  var input = event.target
  var icons = document.querySelector('.docs-icons')

  if (input.name === 'color') {
    icons.style.color = input.previousElementSibling.textContent = input.value
    icons.style.background = getBrightness(input.value) > 125 ? '#000' : '#fff'
  }
  if (input.name === 'search') {
    [].forEach.call(icons.children, function (el) {
      el.style.display = el.getAttribute('data-icon').indexOf(input.value) < 0 ? 'none' : ''
    })
  }
})

window.copyHTML = function (id) {
  var copy = document.getElementById('docs-copy')
  copy.value = document.querySelector('[data-icon="' + id + '"] div').innerHTML.trim()
  copy.select()
  document.execCommand('copy')
}

window.copyCSS = function (id) {
  var copy = document.getElementById('docs-copy')
  var icon = document.getElementById(id)
  var color = document.querySelector('[name="color"]').value
  var body = icon.innerHTML.replace(/currentColor/g, color)
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + color + '" viewBox="' + icon.getAttribute('viewBox') + '">' + body + '</svg>'
  copy.value = "background: url('data:image/svg+xml," + escapeSVG(svg) + "') no-repeat center / contain;"
  copy.select()
  document.execCommand('copy')
}

window.savePDF = function (el, options, pdf) {
  if (typeof el === 'string') {
    var svg = document.getElementById(el)
    var box = svg.viewBox.baseVal
    var color = document.querySelector('[name="color"]').value // Get color from input
    var scale = 28 / Math.min(box.width, box.height) // Scale to minimum 28 for iOS
    var pdfdoc = new window.PDFDocument({ size: [box.width * scale, box.height * scale] })
    var link = document.createElement('a')
    var blob = window.blobStream()

    window.savePDF(svg, { color }, pdfdoc.scale(scale))
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
        case 'g': window.savePDF(node, style, pdf); break
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
