const ICONS = {{ICONS}};

module.exports = {
  renderSymbols,
  renderSymbol,
  renderSprite,
  renderSVG
};

/**
 * Render one or more icons as block of symbol definitions
 * @param {[string]} [ids]
 * @returns {string}
 */
function renderSymbols(ids = Object.keys(ICONS)) {
  if (!Array.isArray(ids)) {
    ids = [ids];
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
    ${ids.forEach(renderSymbol)}
  </svg>`;
}

/**
 * Render icon with 'id' as symbol definition
 * @param {string} id
 * @returns {string}
 */
function renderSymbol(id) {
  if (!ICONS.hasOwnProperty(id)) {
    return '';
  }

  const [body, width, height] = ICONS[id];

  return `<symbol id="${id}" viewBox="0 0 ${width} ${height}">${body}</symbol>`;
}

/**
 * Render icon with 'id' as sprite (referencing symbol definition)
 * @param {string} id
 * @returns {string}
 */
function renderSprite(id) {
  if (!ICONS.hasOwnProperty(id)) {
    return '';
  }

  const [body, width, height] = ICONS[id];

  return `<svg style="width:${width / 10}em;height:${height / 10}em" focusable="false" aria-hidden="true"><use xlink:href="#${id}" /></svg>`;
}

/**
 * Render icon with 'id' as independant SVG element
 * @param {string} id
 * @returns {string}
 */
function renderSVG(id) {
  if (!ICONS.hasOwnProperty(id)) {
    return '';
  }

  const [body, width, height] = ICONS[id];

  return `<svg style="width:${width / 10}em;height:${height / 10}em" viewBox="0 0 ${width} ${height}" focusable="false" aria-hidden="true">${body}</svg>`;
}
