const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
            },
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader'
                // [path][name]_[local]_[hash:base64:5]也可以
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                use:[
                    { loader:'css-loader' },
                    { loader:'sass-loader' }
                ],
                    fallback:'style-loader'
                })
            },
        ]
    },

    optimization: {
        splitChunks: {
            name: 'common', // 入口文件名
            filename: 'common.[hash:4].js', // 打包后的文件名
            minChunks: 1,
            chunks: "initial",
        }
    },
}