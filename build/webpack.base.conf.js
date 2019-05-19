var webpack = require('webpack');
var config = require('./config');
var merge = require('lodash/merge');
var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var sBase = config.sBase;

process.noDeprecation = true;

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = {
    entry: config.entry,
    output: {
        path: config.sDist,
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.(html)$/, loader: 'html-loader'},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name:'/assets/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve:{
        modules: [ "node_modules", sBase, sBase+"pages", sBase+"widget",sBase+'mock',sBase+'assets'],
        extensions:['.vue','.js','.json'],
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': resolve('src')
        }
    }
}