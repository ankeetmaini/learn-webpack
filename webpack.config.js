var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var isDevelopment = process.env.NODE_ENV === 'development';
var BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  entry: isDevelopment
    ? ['./app/app.js', 'webpack-hot-middleware/client'] : ['./app/app.js'],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Awesome App!',
      templateContent: '<html><head></head><body><div id="app"></div></body></html>'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
