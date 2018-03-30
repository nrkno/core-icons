/* globals ICONS */
export default function coreIcons (id) {
  if (!id) return Object.keys(ICONS).map(coreIcons)
  if (!ICONS.hasOwnProperty(id)) return null

  const [body, width, height] = ICONS[id]
  const symbol = `<symbol id="${id}" viewBox="0 0 ${width} ${height}">${body}</symbol>`
  const sprite = `<svg style="width:${width / 10}em;height:${height / 10}em" aria-hidden="true"><use xlink:href="#${id}" /></svg>`
  const svg = `<svg style="width:${width / 10}em;height:${height / 10}em" viewBox="0 0 ${width} ${height}" aria-hidden="true">${body}</svg>`

  return {id, width, height, body, sprite, symbol, svg}
}

if (typeof document !== 'undefined') {
  const div = document.createElement('div') // Render in div before inject to workaround adblockers
  const all = coreIcons().map(({symbol}) => symbol).join('')

  div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${all}</svg>`
  document.documentElement.lastElementChild.appendChild(div.firstElementChild)
}
