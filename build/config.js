var path = require('path');
var proxy = require('./proxy');

var sBase = './src/';
module.exports = {
    sBase: sBase,
    sDist: '/dist',
    sDest: './dist',
    entry: {
        index: sBase + 'pages/index/index.js'
    },
    dev: {
        proxy: proxy,
        env: '',
        port: 8086,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
    },
    pre: {
        
    },
    prod: {
        path: {
            script: 'static/scripts/',
            style: 'static/style/'
        }
    }
}