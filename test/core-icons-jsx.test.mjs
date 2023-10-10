// Test package exports using testpack-cli
import * as icons from '@nrk/core-icons/jsx'
import * as expressive from '@nrk/core-icons/jsx/expressive'
import * as logos from '@nrk/core-icons/jsx/logo'
import * as previews from '@nrk/core-icons/jsx/preview'

console.info(`
Package contains the following for React as ESM:\n
 - ${Object.keys(icons).length} icons\n
 - ${Object.keys(expressive).length} expressive icons\n
 - ${Object.keys(logos).length} logos\n
 - ${Object.keys(previews).length} previews\n
`)
