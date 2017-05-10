/* eslint-disable no-console, no-process-exit */
const chalk = require('chalk');
const emoji = require('node-emoji');
const path = require('path');

const concatSvg = require('./concat-svg');
const parseArgs = require('minimist');

const yearReplacePattern = '||YEAR_FOR_COPYRIGHT||';

const defaultOptions = {
  svgFileName: 'core-icons.js',
  svgFileNameMin: 'core-icons.min.js',
  srcPath: path.join(__dirname, '../src'),
  distPath: path.join(__dirname, '../dist'),
  banner: `Copyright (c) 2015-${yearReplacePattern} NRK <opensource@nrk.no>`
};

console.log(chalk.yellow('Building SVG'));
const argv = parseArgs(process.argv.slice(2), {
  string: [
    'svgFileName',
    'svgFileNameMin',
    'srcPath',
    'distPath',
    'banner'
  ],
  default: defaultOptions,
  unknown: () => {
    console.log(`Passed in invalid options: ${chalk.styles.red.open}${process.argv.slice(2)}${chalk.styles.red.close}`);
    console.log('Usage: $ node build.js ');
    Object.keys(defaultOptions).map((key) => console.log(`  --${key} ${defaultOptions[key]}`));
    console.log('');
    process.exit(1);
  }
});
argv.banner = argv.banner.replace(yearReplacePattern, new Date().getFullYear());
concatSvg(argv)
  .then(() => console.log(chalk.green(` ${emoji.get('heavy_check_mark')} merged and minified SVG`)))
  .catch((err) => console.log(err.stack));
