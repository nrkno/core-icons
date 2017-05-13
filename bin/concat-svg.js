/* eslint-disable no-sync*/
const path = require('path');
const fs = require('fs');

const svgToSymbol = (file, xml) => String(xml) // Work with file as string
  .replace('>', ` id="${file.slice(0, -4)}">`) // Add filename as id
  .replace(/(<\/?)svg/gi, '$1symbol')          // Convert to symbols
  .replace(/\s*xmlns=[^\s>]+/gi, '')           // Remove xmlns
  .replace(/\s*([<>])\s*/g, '$1');             // Strip white space around tokens

module.exports = (config) => Promise
  .resolve(fs.readdirSync(config.srcPath).filter((file) => file.slice(-4) === '.svg'))
  .then((files) => files.map((file) => svgToSymbol(file, fs.readFileSync(path.join(config.srcPath, file)))))
  .then((symbols) => `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols.join('')}</svg>`)
  .then((svg) => `document.documentElement.firstElementChild.insertAdjacentHTML('beforeend', '${svg}');`)
  .then((js) => `/*!${config.banner}*/\n${js}`)
  .then((js) => {
    fs.writeFileSync(path.join(config.distPath, config.svgFileName), js);
    fs.writeFileSync(path.join(config.distPath, config.svgFileNameMin), js);
  });
