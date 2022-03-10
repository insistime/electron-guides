// electron pakcager
var electronPackager    = require('electron-packager');

// options
var options = {
    dir             : 'src',
    out             : 'out',
    appCopyright    : 'Copyright © 2022 vq版权所有',
    appVersion      : '0.0.1',
    overwrite       : true,
    arch            : 'x64',
    name            : 'vq'
};

// pack
electronPackager(options);