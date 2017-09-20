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

console.log('Building SVG and JSON');
Promise
  .resolve(fs.readdirSync(config.srcPath).filter((file) => file.slice(-4) === '.svg'))
  .then((files) => fs.writeFileSync(path.join(config.distPath, `core-icons.json`), JSON.stringify(files)))
  .then(concatSvg(config))
  .then(() => console.log('Done building'))
  .catch((err) => console.log(err.stack));
