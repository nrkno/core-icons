// Test package exports using testpack-cli
const icons = require('@nrk/core-icons/jsx')
const expressive = require('@nrk/core-icons/jsx/expressive')
const logos = require('@nrk/core-icons/jsx/logo')
const previews = require('@nrk/core-icons/jsx/preview')

console.info(`
Package contains the following for React as commonJS:\n
 - ${Object.keys(icons).length} icons\n
 - ${Object.keys(expressive).length} expressive icons\n
 - ${Object.keys(logos).length} logos\n
 - ${Object.keys(previews).length} previews\n
`)
