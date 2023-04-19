module.exports = {
  js2svg: {
    indent: 2 // Match editorconfig
  },
  plugins: [
    // Use default preset
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Disable removeViewBox
          removeViewBox: false
        }
      }
    },
    // Enable removeDimensions to keep viewBox and prune width/height common in figma exports
    'removeDimensions',
    // Prune [fill="none"] on svg-tag if present
    {
      name: 'removeAttrs',
      params: {
        attrs: 'svg:fill:none'
      }
    }
  ]
}
