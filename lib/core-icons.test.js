/* globals describe, expect, test */
const React = require('react')
const ReactDOM = require('react-dom')
const files = require('./core-icons.json')
const coreIcons = require('./core-icons.min.js')
const CoreIcon = require('../jsx/index.js')

describe('core-icons', () => {
  test('should expose API function', () => {
    expect(coreIcons).toBeInstanceOf(Function)
  })
  test('should return null for undefined icons', () => {
    expect(coreIcons('undefined')).toBe(null)
  })
  test('should return all icons when no id is passed', () => {
    expect(coreIcons().map(({id}) => `${id}.svg`)).toEqual(files)
  })
  test('should contain all icons', () => {
    coreIcons().forEach((icon) => expect(icon).toMatchObject({
      id: expect.any(String),
      body: expect.any(String),
      width: expect.any(Number),
      height: expect.any(Number),
      sprite: expect.any(String),
      symbol: expect.any(String),
      svg: expect.any(String)
    }))
  })
  test('should output svg sprite if has DOM', () => {
    expect(document.querySelectorAll('symbol').length).toBe(files.length)
  })
  test('should output valid svg markup', () => {
    document.body.innerHTML = coreIcons('nrk-logo-nrk').svg
    expect(document.querySelectorAll('svg').length).toBe(1)
    expect(document.querySelector('path')).toBeTruthy()
  })
  test('should render JSX', () => {
    const mount = document.body.appendChild(document.createElement('div')) // React does not like to own <body>
    const icon = React.createElement(CoreIcon, {id: 'nrk-logo-nrk'})

    ReactDOM.render(icon, mount)
    expect(mount.querySelectorAll('svg').length).toBe(1)
    expect(mount.querySelector('path')).toBeTruthy()
  })
})
