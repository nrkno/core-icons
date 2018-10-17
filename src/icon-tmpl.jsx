import React from 'react'

const BODY = '{{BODY}}'
const HEIGHT = '{{HEIGHT}}'
const WIDTH = '{{WIDTH}}'

/**
 * Render icon as independant SVG element
 */
export default function renderSVG () {
  return React.createElement('svg', {
    'aria-hidden': true,
    dangerouslySetInnerHTML: { __html: BODY },
    focusable: false,
    style: {
      height: `${HEIGHT / 10}em`,
      width: `${WIDTH / 10}em`
    },
    viewbox: `0 0 ${WIDTH} ${HEIGHT}`
  })
}
