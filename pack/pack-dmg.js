// requires for electron
var electronDMG         = require('electron-installer-dmg');

// require for qiao
var root    = __dirname;
var qiao    = {};
var config  = require('../src/11-native/package.json')
qiao.path   = require('path');
qiao.config = require('./build-config.json');
qiao.cos    = require('qiao.ext.cos');
qiao.file   = require('qiao.util.file');
qiao.el     = require('qiao.ext.electron');

// dmg
exports.dmg = async function(){
    var setupDmg    = 'yach-' + config.env + '-' + config.version;
    var opts = {
        appPath     : qiao.path.resolve(root, qiao.config.dmg.dir),
        name        : setupDmg,
        // title       : '',
        background  : qiao.path.resolve(root, '../src/11-native/static/img/dmg-bg.png'),
        icon        : qiao.path.resolve(root, '../src/11-native/static/img/icon.icns'),
        overwrite   : true,
        debug       : false,
        out         : qiao.path.resolve(root, qiao.config.dmg.out),
        iconSize    : 80,
        // contents    : '',
        // format      : ''
    };
    
    if(config.env == 'test'){
        opts.appPath = qiao.path.resolve(root, qiao.config.dmg["dir-test"])
    }

    electronDMG(opts, function(err){
        console.log(err);
    });
};