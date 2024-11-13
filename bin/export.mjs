import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import path, { dirname } from 'node:path'

/**
 * @typedef {object} StateGroupInfo
 * @property {string} name
 * @property {string} nodeId
 */

/**
 * @typedef {object} FrameInfo
 * @property {string} name
 * @property {string} nodeId
 * @property {string} pageId
 * @property {string} pageName
 * @property {string} backgroundColor
 * @property {StateGroupInfo} containingStateGroup
 */

/**
 * @typedef {object} User
 * @property {string} nodeId
 * @property {string} handle
 * @property {string} img_url
 */

/**
 * @typedef {object} Component
 * @property {string} key
 * @property {string} file_key
 * @property {string} node_id
 * @property {string} thumbnail_url
 * @property {string} name
 * @property {string} description
 * @property {string} updated_at
 * @property {string} created_at
 * @property {User} user
 * @property {FrameInfo} containing_frame
 */

/**
 *
 * @param {string} path
 * @param {Record<string, any>} options
 * @returns {unknown}
 */
const get = (path, options = {}) => {
  const url = new URL(path, `https://api.figma.com`)
  if (options.query) {
    for (const [key, val] of Object.entries(options.query ?? {})) {
      url.searchParams.set(key, val)
    }
  }

  return fetch(url, {
    headers: {
      'X-FIGMA-TOKEN': process.env.FIGMA_TOKEN,
    },
  }).then((res) => res.json())
}

const logoParamsToRemove = ['mode=monochrome', 'rendersize=small', 'layout=title-right']

/**
 *
 * @param {string} name
 * @param {string} paramString
 * @returns {string}
 */
const logoVariantName = (name, paramString, prefix = 'nrk-logo') => {
  // convert component parameters (`key=value, key2=value2`) into a plain object
  const params = Object.fromEntries(
    paramString
      .split(', ')
      .filter((d) => !logoParamsToRemove.includes(d))
      .map((d) => d.split('='))
  )

  if (params.rendersize === 'large') {
    prefix = `large/${prefix}-large`
  }

  // pick layout and mode if present
  const variant = [params.layout, params.mode].filter(Boolean).join('-')

  let filename = `${prefix}-${name}`

  if (variant.length > 0) {
    filename = `${filename}-${variant}`
  }

  return filename
}

/**
 *
 * @param {Component} component
 * @returns {string}
 */
const iconFile = (component) => {
  const { pageName, containingStateGroup } = component.containing_frame
  let { name } = containingStateGroup

  if (pageName === 'icons') {
    let dir = 'icon'
    if (name.includes('expressive') || component.name.includes('variant=expressive')) {
      dir = 'expressive'
      name = name.replace(/(--active)?$/, '-expressive$1')
    }
    return path.join(dir, `${name}.svg`)
  } else if (pageName === 'logos') {
    return path.join('logo', `${logoVariantName(name, component.name)}.svg`)
  } else if (pageName === 'preview') {
    return path.join('preview', `${logoVariantName(name, component.name, 'nrk-logo-preview')}.svg`)
  }
}

/**
 *
 * @param {string} filepath
 * @returns {Date}
 */
const gitUpdated = (file) => new Date(execSync(`git log -1 --pretty="format:%ci" ${file}`))

/** @type {Component[]} */
const components = await get(`/v1/files/${process.env.FIGMA_FILE_KEY}/components`).then(
  (d) => d.meta.components
)

console.log(`${components.length} components total. Checking for any updates`)

/** @type {Array<{ component: Component, filename: string }>} */
const updatedComponents = []

for (const component of components) {
  const filename = iconFile(component)

  // const libFile = path.join('lib', filename)
  // check if figma modified timestamp is after our file's modified timestamp
  // if (existsSync(libFile)) {
  //   const figmaUpdated = new Date(component.updated_at)
  //   const fileUpdated = gitUpdated(libFile)

  //   // skip if our version is newer
  //   if (fileUpdated.valueOf() > figmaUpdated.valueOf()) {
  //     continue
  //   }
  // }

  updatedComponents.push({ component, filename })
}

console.log(`${updatedComponents.length} components are new or updated and need to be downloaded.`)

const tmpDir = '.tmp'
mkdirSync(tmpDir, { recursive: true })

async function generateImages(components, chunkSize = 100) {
  let images = {}
  for (let i = 0; i < components.length; i += chunkSize) {
    const chunk = components.slice(i, i + chunkSize)
    const chunkResponse = await get(`/v1/images/${process.env.FIGMA_FILE_KEY}`, {
      query: {
        ids: chunk.map((d) => d.component.node_id).join(','),
        scale: 1,
        format: 'svg',
      },
    })

    images = { ...images, ...chunkResponse.images }
  }

  return images
}

const images = await generateImages(updatedComponents)

await Promise.all(
  updatedComponents.map(({ component, filename }) => {
    const tmpFile = path.join(tmpDir, filename)
    mkdirSync(dirname(tmpFile), { recursive: true })

    const imageUrl = images[component.node_id]

    return fetch(imageUrl)
      .then((res) => res.arrayBuffer())
      .then((buf) => writeFile(tmpFile, Buffer.from(buf)))
  })
)
