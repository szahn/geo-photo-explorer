const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  mode: 'development',
  devServer: {
    publicPath: '/',
    port: 9000,
    contentBase: path.join(process.cwd(), 'docs'), // static file location
    host: 'localhost',
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    noInfo: false,
    stats: 'minimal',
    hot: false  // hot module replacement. Depends on HotModuleReplacementPlugin
  }
});