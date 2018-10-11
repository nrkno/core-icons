const React = require('react');

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

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    style: {
      display: 'none'
    }
  }, ids.forEach(renderSymbol));
}

/**
 * Render icon with 'id' as symbol definition
 * @param {string} id
 * @returns {string}
 */
function renderSymbol(id) {
  if (!ICONS.hasOwnProperty(id)) {
    return null;
  }

  const [body, width, height] = ICONS[id];

  return React.createElement('symbol', {
    dangerouslySetInnerHTML: { __html: body },
    id,
    viewbox: `0 0 ${width} ${height}`
  });
}

/**
 * Render icon with 'id' as sprite (referencing symbol definition)
 * @param {string} id
 * @returns {string}
 */
function renderSprite(id) {
  if (!ICONS.hasOwnProperty(id)) {
    return null;
  }

  const [body, width, height] = ICONS[id];

  return React.createElement('svg', {
    'aria-hidden': true,
    focusable: false,
    style: {
      width: `${width / 10}em`,
      height: `${height / 10}em`
    }
  }, [React.createElement('use', {
    'xlink:href': `#${id}`
  })]);
}

/**
 * Render icon with 'id' as independant SVG element
 * @param {string} id
 * @returns {string}
 */
function renderSVG(id) {
  if (!ICONS.hasOwnProperty(id)) {
    return null;
  }

  const [body, width, height] = ICONS[id];

  return React.createElement('svg', {
    'aria-hidden': true,
    dangerouslySetInnerHTML: { __html: body },
    focusable: false,
    style: {
      width: `${width / 10}em`,
      height: `${height / 10}em`
    },
    viewbox: `0 0 ${width} ${height}`
  });
}
