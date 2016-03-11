var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var isDevelopment = process.env.NODE_ENV !== 'production';
var BUILD_PATH = path.resolve(__dirname, 'build');

var common = {
  entry: {
    app: ['./app/app.js'],
    vendor: ['isomorphic-fetch', 'react', 'react-dom', 'react-redux',
      'react-router', 'redux', 'redux-thunk']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Awesome App!',
      templateContent: '<html><head></head><body><div id="app"></div></body></html>'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app']
    }),
    new webpack.NoErrorsPlugin()
  ]
};

var finalConf;
if (isDevelopment) {
  finalConf = Object.assign({}, common);
  finalConf.entry.app = ['webpack-hot-middleware/client',
    ...finalConf.entry.app]; // HMR
  finalConf.devtool = 'source-map';
  finalConf.plugins = [...finalConf.plugins,
    new webpack.HotModuleReplacementPlugin()];
} else {
  // production config
  finalConf = Object.assign({}, common);
  finalConf.output.filename = '[name].bundle.[chunkhash].js';
  finalConf.output.chunkFilename = '[name].bundle.[chunkhash].js';
  finalConf.devtool = false;
  finalConf.plugins = [...finalConf.plugins,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CleanWebpackPlugin(['build']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
  ];
}

module.exports = finalConf;
