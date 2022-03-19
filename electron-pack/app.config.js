'use strict';

// path
var path = require('path');

// electron-src package.json
var srcPkg = require('../electron-src/electron-app/package.json');

// app config
module.exports = {
    appName         : srcPkg.name,
    appVersion      : srcPkg.version,
    appIconPath     : path.resolve(__dirname, './static/icon/icon.icns'),
    appCopyright    : 'Copyright © 2022 vq版权所有',
};