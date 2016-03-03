var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Awesome App!'})
  ]
};
