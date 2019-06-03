const path = require(path)

module.exports = {
  entry: {
    app: './project/js/main.js'
  },
  module: {
    loader: [{
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: {},
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname,'dist')
  }
}