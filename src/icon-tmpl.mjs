var BODY = '{{BODY}}'
var HEIGHT = '{{HEIGHT}}'
var WIDTH = '{{WIDTH}}'

/**
 * Render icon as independant SVG element
 */
export default `<svg style="width:${WIDTH / 10}em;height:${HEIGHT / 10}em" viewBox="0 0 ${WIDTH} ${HEIGHT}" focusable="false" aria-hidden="true">${BODY}</svg>`
