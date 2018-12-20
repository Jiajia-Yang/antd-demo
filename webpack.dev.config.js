const configBase = require('./webpack.config.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const PORT = 1234;

module.exports = {
  ...configBase,
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './src'),
    hot: false,
    host: '127.0.0.1',
    port: PORT,
    proxy: {
      '/api/*': {
        target: 'http://localhost:1111',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new ExtractTextPlugin('style.[hash:4].css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/`,
    }),
  ],
};
