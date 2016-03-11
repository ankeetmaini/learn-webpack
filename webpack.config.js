var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var isDevelopment = process.env.NODE_ENV === 'development';
var BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  entry: isDevelopment
    ? ['./app/app.js', 'webpack-hot-middleware/client'] : {
      app: './app/app.js',
      vendor: ['isomorphic-fetch', 'react', 'react-dom', 'react-redux',
        'react-router', 'redux', 'redux-thunk']
    },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css' }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Awesome App!',
      templateContent: '<html><head></head><body><div id="app"></div></body></html>'
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
