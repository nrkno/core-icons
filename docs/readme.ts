import manifest from '#lib/manifest.json' with { type: 'json' }
import type { Asset } from '#src/manifest.ts'
import { toExportedName } from '#utils/string.ts'
import { toCamelCase, toPascalCase } from '#utils/string.ts'

const pkgs = {
  effective: await import('#lib/effective.ts'),
  expressive: await import('#lib/expressive.ts'),
  logo: await import('#lib/logo.ts'),
}

document.querySelector('.docs-icons')!.innerHTML = manifest.assets
  .filter((d) => d.kind === 'icon')
  .map((icon) => {
    const pkg = pkgs[icon.variant! as keyof typeof pkgs]
    const svg = pkg[toExportedName(icon.id) as keyof typeof pkg] as string
    return toHtml(icon, svg)
  })
  .join('')

function toHtml(asset: Asset, svg: string): string {
  const variant = asset.kind === 'icon' ? `data-variant="${asset.variant}"` : ''
  return /* html */ `
    <div data-icon="${asset.id}" ${variant} style="padding: 1em">
      ${svg.replace(/<svg/, `<svg id=${asset.id}`)}
      <span style="font-size: .9rem">${asset.id}</span>
      <div class="docs-pops" style="font-size: .9rem">
        <button type="button" data-id="${asset.id}" onclick="copyHTML(this)">Copy HTML</button>
        <button type="button" data-id="${asset.id}" onclick="copyCSS(this)">Copy CSS</button>
        <button type="button" data-id="${asset.id}" onclick="copyJS(this)">Copy JS</button>
        <button type="button" data-id="${asset.id}" onclick="copyJS(this, true)">Copy JSX</button>
      </div>
    </div>
  `
}
document.querySelector('.docs-logos')!.innerHTML = manifest.assets
  .filter((d) => d.kind === 'logo')
  .map((logo) => {
    const svg = pkgs.logo[toExportedName(logo.id, 'logo') as keyof typeof pkgs.logo]
    return toHtml(logo, svg as string)
  })
  .join('')

document.addEventListener('input', function (event) {
  const input = event.target as HTMLInputElement
  const icons = document.querySelector<HTMLElement>('.docs-icons')!
  const logos = document.querySelector<HTMLElement>('.docs-logos')!

  if (input.name === 'search') {
    for (const el of icons.children as HTMLCollectionOf<HTMLElement>) {
      el.style.display = el.getAttribute('data-icon')!.includes(input.value) ? '' : 'none'
    }
  } else if (input.name === 'search-logos') {
    for (const el of logos.children as HTMLCollectionOf<HTMLElement>) {
      el.style.display = el.getAttribute('data-icon')!.includes(input.value) ? '' : 'none'
    }
  }
})

/**
 * Copy to clipboard for CSS examples
 */
async function copyToClipBoard(button: HTMLButtonElement, textToCopy: string) {
  const buttonText = button.textContent
  const copy = document.getElementById('docs-copy') as HTMLInputElement
  copy.value = textToCopy
  copy.select()
  copy.setSelectionRange(0, 99999) // For mobile devices
  await navigator.clipboard.writeText(copy.value)
  button.textContent = 'Copied!'
  // Reset buttonText after an appropriate pause
  setTimeout(function () {
    button.textContent = buttonText
  }, 1600)
}

function copyJS(button: HTMLButtonElement, pascal?: boolean) {
  const id = button.dataset.id!
  void copyToClipBoard(button, pascal ? toPascalCase(id) : toCamelCase(id))
}

function copyCSS(button: HTMLButtonElement) {
  const svg = document
    .getElementById(button.dataset.id!)!
    .outerHTML.trim()
    .replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
  const cssString = `background: url('data:image/svg+xml,${escapeSVG(svg)}') no-repeat center / contain;`
  void copyToClipBoard(button, cssString)
}

function escapeSVG(data: string) {
  return data
    .replace(/>\s{1,}</g, '><')
    .replace(/\s{2,}/g, ' ')
    .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)
}

function copyHTML(button: HTMLButtonElement) {
  const svg = document.getElementById(button.dataset.id!)!.outerHTML.trim()
  void copyToClipBoard(button, svg)
}

function toggleExpressive() {
  document.querySelector('.docs-icons')!.classList.toggle('expressive')
}

declare global {
  function toggleExpressive(): void
  function copyHTML(button: HTMLButtonElement): void
  function copyCSS(button: HTMLButtonElement): void
  function copyJS(button: HTMLButtonElement, jsx?: boolean): void
}

globalThis.toggleExpressive = toggleExpressive
globalThis.copyHTML = copyHTML
globalThis.copyCSS = copyCSS
globalThis.copyJS = copyJS
