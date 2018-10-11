import React from 'react'

export { renderAsSymbol, renderAsSprite, renderAsSVG };

const BODY = '{{BODY}}';
const HEIGHT = '{{HEIGHT}}';
const ID = '{{ID}}';
const WIDTH = '{{WIDTH}}';

/**
 * Render icon as symbol definition
 */
function renderAsSymbol() {
  return React.createElement('symbol', {
    dangerouslySetInnerHTML: { __html: BODY },
    id: ID,
    viewbox: '0 0 ' + WIDTH + ' ' + HEIGHT
  });
}

/**
 * Render icon as sprite (referencing symbol definition)
 */
function renderAsSprite() {
  return React.createElement('svg', {
    'aria-hidden': true,
    focusable: false,
    style: {
      height: '' + (HEIGHT / 10) + 'em',
      width: '' + (WIDTH / 10) + 'em'
    }
  }, [React.createElement('use', { 'xlink:href': '#' + ID })]);
}

/**
 * Render icon as independant SVG element
 */
function renderAsSVG() {
  return React.createElement('svg', {
    'aria-hidden': true,
    dangerouslySetInnerHTML: { __html: BODY },
    focusable: false,
    style: {
      height: '' + (HEIGHT / 10) + 'em',
      width: '' + (WIDTH / 10) + 'em'
    },
    viewbox: '0 0 ' + WIDTH + ' ' + HEIGHT
  });
}
