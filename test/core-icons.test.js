// Test package exports using testpack-cli
const icons = require('@nrk/core-icons')
const expressive = require('@nrk/core-icons/expressive')
const logos = require('@nrk/core-icons/logo')
const largeLogos = require('@nrk/core-icons/logo/large')
const previews = require('@nrk/core-icons/preview')

console.info(`
Package contains the following for commonJS:\n
 - ${Object.keys(icons).length} icons\n
 - ${Object.keys(expressive).length} expressive icons\n
 - ${Object.keys(logos).length} logos\n
 - ${Object.keys(largeLogos).length} large format logos\n
 - ${Object.keys(previews).length} previews\n
`)
