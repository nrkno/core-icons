import React from 'react'

var BODY = '{{BODY}}';
var HEIGHT = '{{HEIGHT}}';
var WIDTH = '{{WIDTH}}';

/**
 * Render icon as independant SVG element
 */
export default function renderSVG() {
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
