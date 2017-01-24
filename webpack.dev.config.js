var path = require('path')
var ROOT_PATH = path.resolve(__dirname +'/client')

module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    filename: path.resolve(ROOT_PATH, 'bundle.js')
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watch: true
}
