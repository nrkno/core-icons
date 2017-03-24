/* eslint-disable no-console, no-sync */
const path = require('path');
const fs = require('fs');

const SVG_FILENAME = 'core-icons.js';
const SVG_FILENAME_MIN = 'core-icons.min.js';
const SRC_PATH = path.join(__dirname, '../src');
const DIST_PATH = path.join(__dirname, '../dist');

const svgToSymbol = (file, xml) => String(xml) // Work with file as string
  .replace('>', ` id="${file.slice(0, -4)}">`) // Add filename as id
  .replace(/(<\/?)svg/gi, '$1symbol')          // Convert to symbols
  .replace(/\s*xmlns=[^\s>]+/gi, '')           // Remove xmlns
  .replace(/\s*([<>])\s*/g, '$1');             // Strip white space around tokens

const buildSvg = () => Promise
  .resolve(fs.readdirSync(SRC_PATH).filter((file) => file.slice(-4) === '.svg'))
  .then((files) => files.map((file) => svgToSymbol(file, fs.readFileSync(path.join(SRC_PATH, file)))))
  .then((symbols) => `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols.join('')}</svg>`)
  .then((svg) => `document.documentElement.firstElementChild.insertAdjacentHTML('beforeend', '${svg}')`)
  .then((js) => {
    fs.writeFileSync(path.join(DIST_PATH, SVG_FILENAME), js);
    fs.writeFileSync(path.join(DIST_PATH, SVG_FILENAME_MIN), js);
  });

buildSvg()
  .then(() => console.log('Merged and minified SVG'))
  .catch((err) => console.log(err.stack));
