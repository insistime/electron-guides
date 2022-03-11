'use strict';

var appConfig = require('./app.config.js');

module.exports = {
    dir             : 'src',
    out             : 'out',
    name            : appConfig.appName,
    appVersion      : appConfig.appVersion,
    appCopyright    : appConfig.appCopyright,
    icon            : require('path').resolve(__dirname, '../icon/icon.icns')
};