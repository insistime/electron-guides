'use strict';

// path
var path = require('path');

/**
 * dist.config.js
 */
module.exports = {
    srcPath     : 'electron-src',
    distPath    : 'electron-dist',
    srcFiles    : [
        'main',
        'node_modules',
        'renderer-index/dist',
        'renderer-login/dist',
        'package.json'
    ]
};