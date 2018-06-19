const globImport = require('rollup-plugin-glob-import')

export default {
  input: 'client/app.js',
  output: {
    file: 'public/javascripts/app.js',
    format: 'cjs'
  },
  plugins: [
    globImport() // See the "Options" section below.
  ]
}
