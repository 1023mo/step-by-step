const path = require(path)

module.exports = {
  entry: {
    app: './project/js/main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
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