const GROUPS = { misc: [] }

function escapeSVG (data) {
  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')
  return data.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)
}

// Group icons by type and name
setTimeout(function () {
  const icons = document.querySelectorAll('symbol')
  for (const icon of icons) {
    const type = icon.id.slice(4).split('-')[0] // Without nrk- and state
    const filePrefix = type === 'logo' || type === 'expressive' ? type : 'icon'
    const size = icon.viewBox.baseVal
    const group = (GROUPS[type] = GROUPS[type] || [])

    group.push(`
    <div data-icon="${icon.id}" style="padding: 1em">
      <svg style="width:${size.width / 16}em;height:${
      size.height / 16
    }em" focusable="false" aria-hidden="true"><use xlink:href="#${
      icon.id
    }" /></svg>
      <span style="font-size: .9rem">${icon.id}</span>
      <div class="docs-pops" style="font-size: .9rem">
        <a href="${filePrefix}/${icon.id}.svg" download>Download SVG</a>
        <a href="${filePrefix}/${icon.id}.pdf" download>Download PDF</a>
        <br>
        <button type="button" id="${
          icon.id
        }" onclick="copyHTML(this)">Copy HTML</button>
        <button type="button" id="${
          icon.id
        }" onclick="copyCSS(this)">Copy CSS</button>
        <button type="button" id="${
          icon.id
        }" onclick="copyJS(this)">Copy JS</button>
        <button type="button" id="${
          icon.id
        }" onclick="copyJS(this, true)">Copy JSX</button>
      </div>
    </div>`)
  }

  // Merge all single-icon GROUPS
  // < 5 allows for default + active with expressive duplicates
  Object.keys(GROUPS).forEach(function (type) {
    if (type !== 'misc' && GROUPS[type].length < 5) {
      GROUPS.misc = GROUPS.misc.concat(GROUPS[type])
      delete GROUPS[type]
    }
  })

  // Render icon-grid
  document.querySelector('.docs-icons').innerHTML = Object.keys(GROUPS)
    .filter((grp) => grp !== 'logo')
    .map(
      (type) =>
        `<h3 data-icon>
          ${type}
          <div style="margin:1em 0;border-bottom:1px solid currentColor;opacity:.1"></div>
        </h3>
        ${GROUPS[type].sort().join('')}`
    )
    .join('')

  // Render logo-grid
  document.querySelector('.docs-logos').innerHTML = Object.keys(GROUPS)
    .filter((grp) => grp === 'logo')
    .map(
      (type) =>
        `<h3 data-icon>
          ${type}
          <div style="margin:1em 0;border-bottom:1px solid currentColor;opacity:.1"></div>
        </h3>
        ${GROUPS[type].sort().join('')}`
    )
    .join('')
}, 100) // Allow browser to render page before parsing all icons

document.addEventListener('input', function (event) {
  const input = event.target
  const icons = document.querySelector('.docs-icons')
  const logos = document.querySelector('.docs-logos')

  if (input.name === 'search') {
    [].forEach.call(icons.children, function (el) {
      el.style.display =
        el.getAttribute('data-icon').indexOf(input.value) < 0 ? 'none' : ''
    })
  } else if (input.name === 'search-logos') {
    [].forEach.call(logos.children, function (el) {
      el.style.display =
        el.getAttribute('data-icon').indexOf(input.value) < 0 ? 'none' : ''
    })
  }
})

/**
 * Copy to clipboard for CSS examples
 *
 * @param {HTMLButtonElement} button
 * @param {string} textToCopy
 */
function copyToClipBoard (button, textToCopy) {
  const buttonText = button.textContent
  const copy = document.getElementById('docs-copy')
  // Previous sibling twice to skip past the <br> formatting
  copy.value = textToCopy

  copy.select()
  copy.setSelectionRange(0, 99999) // For mobile devices
  navigator.clipboard.writeText(copy.value)

  button.textContent = 'Copied!'
  // Reset buttonText after an appropriate pause
  setTimeout(function () {
    button.textContent = buttonText
  }, 1600)
}

/**
 * @param {HTMLButtonElement} button
 * @param {boolean} jsx modifies case of icon ID for jsx
 */
window.copyJS = function (button, jsx) {
  let name = button.id.replace(/-+./g, function (m) {
    return m.slice(-1).toUpperCase()
  }) // camelCase
  if (jsx) {
    name = name.replace(/./, function (m) {
      return m.toUpperCase()
    })
  } // PascalCase
  copyToClipBoard(button, name)
}

/**
 * @param {HTMLButtonElement} button
 */
window.copyCSS = function (button) {
  const icon = document
    .getElementById(button.id)
    .outerHTML.trim()
    .replace(/symbol/g, 'svg')
    .replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
  const cssString =
    "background: url('data:image/svg+xml," +
    escapeSVG(icon) +
    "') no-repeat center / contain;"
  copyToClipBoard(button, cssString)
}

/**
 * @param {HTMLButtonElement} button
 */
window.copyHTML = function (button) {
  const htmlString = document
    .querySelector(`[data-icon="${button.id}"] svg`)
    .outerHTML.trim()
  copyToClipBoard(button, htmlString)
}

window.toggleVariants = function () {
  const icons = document.querySelectorAll('[data-icon]')
  icons.forEach(icon => {
    if (icon.getAttribute('data-icon').includes('expressive')) {
      icon.toggleAttribute('hidden')
    }
  })
}
