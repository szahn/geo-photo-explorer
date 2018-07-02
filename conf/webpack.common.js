const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

module.exports = {
  context: path.join(process.cwd(), 'src'), //the home directory for webpack
  devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools
  entry: {
    app: './index.jsx'
  },

  output: {
    path: path.join(process.cwd(), 'docs'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.js'],  // extensions that are used
    modules: [path.join(process.cwd(), 'src'), 'node_modules'] // directories where to look for modules
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },{
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
        }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })  
  ]
};