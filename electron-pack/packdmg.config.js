'use strict';

// path
var path = require('path');

// app config
var appConfig = require('./app.config.js');

// packmac config
var packmacConfig = require('./packmac.config.js');

// app env
var appEnv = 'online';

// app path
var appPath = path.resolve(__dirname, `../${packmacConfig.out}/${appConfig.appName}-darwin-${packmacConfig.arch}/${appConfig.appName}.app`);

// background
var background = path.resolve(__dirname, './static/bg.png');

// packdmg config
module.exports = {
    name            : `${appConfig.appName}-${appEnv}-${appConfig.appVersion}`,
    appPath         : appPath,

    icon            : appConfig.appIconPath,
    iconSize        : 80,
    background      : background,

    overwrite       : true,
    debug           : false,

    out             : path.resolve(__dirname, '../electron-out/dmg')
};