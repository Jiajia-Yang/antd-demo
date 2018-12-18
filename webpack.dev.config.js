const configBase = require('./webpack.config.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const {assign} = Object;
const PORT = 1234;


function resolve (relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = {
    ...configBase,
    devServer: {
        contentBase: resolve('./src'),
        historyApiFallback: false,
        hot: false,
        host: '127.0.0.1',
        port: PORT
    },
    plugins: [
        new ExtractTextPlugin('style.[hash:4].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common', // 入口文件名
            filename: 'common.[hash:4].js', // 打包后的文件名
            minChunks: function (module, count) {
                return module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(resolve('./node_modules')) === 0
            }
        }),
        new HtmlWebpackPlugin({
            template: resolve('./index.html')
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${PORT}/#/`
        }),
    ]
}
