const configBase = require('./webpack.config.js');
<<<<<<< HEAD
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
=======
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
>>>>>>> 2b7d92597f5627e2d8dfefc7080859c3c706adf6

module.exports = {
  ...configBase,
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new ExtractTextPlugin('style.[hash:4].css'),
  ],
};

