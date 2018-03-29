/* globals ICONS */
import React from 'react'

function assign (target, ...sources) {
  sources.filter(Boolean).forEach((source) => {
    if (source) Object.keys(source).forEach((key) => (target[key] = source[key]))
  })
  return target
}

export default function CoreIcon (props) {
  if (!ICONS.hasOwnProperty(props.id)) return null
  const [body, width, height] = ICONS[props.id]
  const attr = assign({}, props, {
    'aria-hidden': true,
    viewBox: `0 0 ${width} ${height}`,
    dangerouslySetInnerHTML: {__html: body},
    style: assign({
      width: props.width || `${width / 10}em`,
      height: props.height || `${height / 10}em`
    }, props.style)
  })

  return React.createElement('svg', attr)
}
