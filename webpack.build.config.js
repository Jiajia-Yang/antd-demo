const configBase = require('./webpack.config.js');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = {
    ...configBase,
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html')
        }),
        new ExtractTextPlugin('style.[hash:4].css'),
    ]
}
