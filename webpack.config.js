const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = {
  entry: {
    client: resolve('./src/index.js')
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@src': path.join(__dirname, './src'),
      '@actions': path.join(__dirname, './src/redux/actions'),
      '@reducers': path.join(__dirname, './src/redux/reducers'),
      '@apis': path.join(__dirname, './src/apis'),
      '@components': path.join(__dirname, './src/components'),
      '@configs': path.join(__dirname, './src/configs'),
      '@config': path.join(__dirname, './src/configs/config.js'),
      '@ajax': path.join(__dirname, './src/configs/ajax.js'),
    }
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { 'presets': ['react', 'es2017'] }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            { loader: 'css', options: { sourceMap: true } },
            { loader: 'sass', options: { sourceMap: true } }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]'
        }
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'font/[name].[hash:4].[ext]'
        }
      }
    ]
  },
}