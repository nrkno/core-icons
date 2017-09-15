const concatSvg = require('@nrk/svg-to-js');
const path = require('path');
const fs = require('fs');

const config = {
  svgFileName: 'core-icons.js',
  svgFileNameMin: 'core-icons.min.js',
  srcPath: path.join(__dirname, '../src'),
  distPath: path.join(__dirname, '../dist'),
  banner: `Copyright (c) 2015-${new Date().getFullYear()} NRK <opensource@nrk.no>`
};

console.log('Building SVG');
concatSvg(config)
  .then(() => console.log('Merged and minified SVG'))
  .catch((err) => console.log(err.stack));
