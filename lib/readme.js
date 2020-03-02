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
    var group = GROUPS[type] = GROUPS[type] || []

    group.push('<div data-icon="' + icon.id + '" style="padding: 1em">' +
       '<svg style="width:' + (size.width / 16) + 'em;height:' + (size.height / 16) + 'em" focusable="false" aria-hidden="true"><use xlink:href="#' + icon.id + '" /></svg>' +
       '<span style="font-size: .9rem">'  + icon.id + '</span>' +
       '<div class="docs-pops" style="font-size: .9rem">' +
          '<a href="' + icon.id + '.svg" download>Download SVG</a>' +
          '<a href="' + icon.id + '.pdf" download>Download PDF</a>' +
          '<br>' +
          '<button id="' + icon.id + '" onclick="copyHTML(this)">Copy HTML</button>' +
          '<button id="' + icon.id + '" onclick="copyCSS(this)">Copy CSS</button>' +
          '<button id="' + icon.id + '" onclick="copyJS(this)">Copy JS</button>' +
          '<button id="' + icon.id + '" onclick="copyJS(this, true)">Copy JSX</button>' +
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
    return '<h3 data-icon>' + type +
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

window.copyHTML = function (button) {
  var buttonText = button.textContent
  var copy = document.getElementById('docs-copy')
  copy.value = document.getElementById(button.id).outerHTML.trim().replace(/symbol/g, 'svg').replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
  copy.select()
  document.execCommand('copy')
  button.textContent = 'Copied!'
  setTimeout(function () { button.textContent = buttonText }, 1600)
}

window.copyCSS = function (button) {
  var buttonText = button.textContent
  var copy = document.getElementById('docs-copy')
  var icon = document.getElementById(button.id).outerHTML.trim().replace(/symbol/g, 'svg').replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
  copy.value = "background: url('data:image/svg+xml," + escapeSVG(icon) + "') no-repeat center / contain;"
  copy.select()
  document.execCommand('copy')
  button.textContent = 'Copied!'
  setTimeout(function () { button.textContent = buttonText }, 1600)
}

window.copyJS = function (button, jsx) {
  var buttonText = button.textContent
  var copy = document.getElementById('docs-copy')
  var name = button.id.replace(/-+./g, function (m) { return m.slice(-1).toUpperCase() }) // camelCase
  if (jsx) name = name.replace(/./, function (m) { return m.toUpperCase() }) // TitleCamelCase
  copy.value = name
  copy.select()
  document.execCommand('copy')
  button.textContent = 'Copied!'
  setTimeout(function () { button.textContent = buttonText }, 1600)
}
