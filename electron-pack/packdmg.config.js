'use strict';

// path
const path = require('path');

// app config
const appConfig = require('./app.config.js');

// packmac config
const packmacConfig = require('./packmac.config.js');

// app env
const appEnv = 'online';

// app path
const appPath = path.resolve(__dirname, `../${packmacConfig.out}/${appConfig.appName}-darwin-${packmacConfig.arch}/${appConfig.appName}.app`);

// background
const background = path.resolve(__dirname, './static/bg.png');

// get contents
const getContents = () => {
    return [ 
        { x: 520, y: 200, type: 'link', path: '/Applications' },
        { x: 120, y: 200, type: 'file', path: appPath } 
    ];
};

// packdmg config
module.exports = {
    name            : `${appConfig.appName}-${appEnv}-${appConfig.appVersion}`,
    appPath         : appPath,

    icon            : appConfig.appIconPath,
    iconSize        : 80,
    background      : background,
    contents        : getContents(),

    overwrite       : true,
    debug           : false,

    out             : path.resolve(__dirname, '../electron-out/dmg')
};