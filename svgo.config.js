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
          // Increase floatPrecision for higher fidelity when processing large logos (default is 3)
          // cleanupNumericValues: {
          //   floatPrecision: 4
          // },
          // convertPathData: {
          //   floatPrecision: 4
          // }
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
