var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: ['whatwg-fetch','./src/js/root.js'],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true
  }
}
