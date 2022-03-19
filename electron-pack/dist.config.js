'use strict';

// path
var path = require('path');

/**
 * dist.config.js
 */
module.exports = {
    srcPath     : 'electron-src/electron-app',
    distPath    : 'electron-dist',
    srcFiles    : [
        'main',
        'node_modules',
        'renderer-index',
        'renderer-login',
        'package.json'
    ]
};