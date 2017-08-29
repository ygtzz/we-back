var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var config = require('./config');
var merge = require('lodash/merge');
var path = require('path');
var sBase = config.sBase;

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

var aPlugin = [];
// var aPostcss = [autoprefixer({browsers: ['> 5%','ie 9']})];
var aPostcss = [];

module.exports = {
    entry: config.entry,
    output: {
        // path: config.sDist,
        path:path.resolve(__dirname, '../dist'),
        publicPath:'/',
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel", include:[resolve('src')]},
            {test: /\.(html)$/, loader: 'html'},
            {test: /\.vue$/, loader: 'vue'},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name:'/static/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: aPlugin,
    postcss: function () {
        return aPostcss;
    },
    resolve:{
        modulesDirectories: [ "node_modules",sBase,sBase+"pages", sBase+"widget"],
        extensions:['','.vue','.js','.json'],
        alias: {
            '@': resolve('src'),
            'vue': 'vue/dist/vue.js'
        }
    }
}