const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    common: path.join(__dirname, './src/index.js'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash:4].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@src': path.join(__dirname, './src'),
      '@pages': path.join(__dirname, './src/pages'),
      '@actions': path.join(__dirname, './src/redux/actions'),
      '@reducers': path.join(__dirname, './src/redux/reducers'),
      '@service': path.join(__dirname, './src/service'),
      '@components': path.join(__dirname, './src/components'),
    },
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'common',
      filename: 'common.[hash:4].js',
      minChunks: 1,
      chunks: 'initial',
    },
  },
};
