var GROUPS = { misc: [] }

function escapeSVG (data) {
  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')
  return data.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)
}

// Group icons by type and name
setTimeout(function () {
  ;[].forEach.call(document.querySelectorAll('symbol'), function (icon) {
    var type = icon.id.slice(4).split('-')[0] // Without nrk- and state
    var size = icon.viewBox.baseVal
    var font = icon.id.indexOf('-logo-') === -1 ? 16 : 10
    var group = GROUPS[type] = GROUPS[type] || []

    group.push('<div data-icon="' + icon.id + '" style="padding:0 1em 1em 0">' +
      '<div style="font-size:' + font + 'px;">' +
        '<svg style="width:' + (size.width / 16) + 'em;height:' + (size.height / 16) + 'em" focusable="false" aria-hidden="true"><use xlink:href="#' + icon.id + '" /></svg>' +
       '</div>' +
      '<div style="font-size:13px">' + icon.id + '<br>' +
        '<a href="' + icon.id + '.svg" download>Download SVG</a><br>' +
        '<a href="' + icon.id + '.pdf" download>Download PDF</a><br>Copy ' +
        '<button onclick="copyHTML(\'' + icon.id + '\')"">HTML</button>, ' +
        '<button onclick="copyCSS(\'' + icon.id + '\')"">CSS</button>, ' +
        '<button onclick="copyJS(\'' + icon.id + '\')"">JS</button>, ' +
        '<button onclick="copyJS(\'' + icon.id + '\', true)"">JSX</button>' +
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

document.addEventListener('input', function (event) {
  var input = event.target
  var icons = document.querySelector('.docs-icons')

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

window.copyJS = function (id, jsx) {
  var copy = document.getElementById('docs-copy')
  var js = id.replace(/-+./g, (m) => m.slice(-1).toUpperCase())
  copy.value = jsx ? js.replace(/./, (m) => m.toUpperCase()) : js
  copy.select()
  document.execCommand('copy')
}
