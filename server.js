'use strict';

// modules
let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
let webpack = require('webpack');
let webpackMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

// app variables
const webpackConfig = require(path.resolve(__dirname, 'webpack.config.js'));
const BUILD_PATH = path.resolve(__dirname, 'build');
const isDevelopment = process.env.NODE_ENV === 'development';

// middlewares
app.use(express.static(BUILD_PATH));

if (isDevelopment) {
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(
    compiler,
    {stats: {colors: true}}
  ));

  app.use(webpackHotMiddleware(compiler));
}

// routes
app.get('*', (req, res) => {
  // handle annoying favicon.ico requests
  if (req.url === '/favicon.ico') {
    res.status(200).send({'Content-Type': 'image/x-icon'});
    res.end();
    return;
  }
  res.send(fs.readFileSync(path.resolve(BUILD_PATH, 'index.html'), 'utf8'));
});

app.listen(3000, () => {
  console.log('App listening at 3000.');
});
