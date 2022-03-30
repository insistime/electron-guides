'use strict';

// app config
const appConfig = require('./app.config.js');

// packmac config
module.exports = {
    dir             : 'electron-dist',
    out             : 'electron-out',
    arch            : 'x64',
    asar            : true,
    overwrite       : true,
    name            : appConfig.appName,
    icon            : appConfig.appIconPath,
    appVersion      : appConfig.appVersion,
    appCopyright    : appConfig.appCopyright
};