// Test package exports using testpack-cli
import * as icons from '@nrk/core-icons'
import * as expressive from '@nrk/core-icons/expressive'
import * as logos from '@nrk/core-icons/logo'
import * as largeLogos from '@nrk/core-icons/logo/large'
import * as previews from '@nrk/core-icons/preview'

console.info(`
Package contains the following for ESM:\n
 - ${Object.keys(icons).length} icons\n
 - ${Object.keys(expressive).length} expressive icons\n
 - ${Object.keys(logos).length} logos\n
 - ${Object.keys(largeLogos).length} large format logos\n
 - ${Object.keys(previews).length} previews\n
`)
