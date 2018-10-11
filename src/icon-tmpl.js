export { renderAsSymbol, renderAsSprite, renderAsSVG };

const BODY = '{{BODY}}';
const HEIGHT = '{{HEIGHT}}';
const ID = '{{ID}}';
const WIDTH = '{{WIDTH}}';

/**
 * Render icon as symbol definition
 */
function renderAsSymbol() {
  return '<symbol id=\"'
    + ID
    + '\" viewBox=\"0 0 '
    + WIDTH
    + ' '
    + HEIGHT
    + '\">'
    + BODY
    + '</symbol>';
}

/**
 * Render icon as sprite (referencing symbol definition)
 */
function renderAsSprite() {
  return '<svg style=\"width:'
    + (WIDTH / 10)
    + 'em;height:'
    + (HEIGHT / 10)
    + 'em\" focusable=\"false\" aria-hidden=\"true\"><use xlink:href=\"#'
    + ID
    + '\" /></svg>';
}

/**
 * Render icon as independant SVG element
 */
function renderAsSVG() {
  return '<svg style=\"width:'
    + (WIDTH / 10)
    + 'em;height:'
    + (HEIGHT / 10)
    + 'em\" viewBox=\"0 0 '
    + WIDTH
    + ' '
    + HEIGHT
    + '\" focusable=\"false\" aria-hidden=\"true\">'
    + BODY
    + '</svg>';
}
