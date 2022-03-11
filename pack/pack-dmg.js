// electron installer dmg
var electronDMG = require('electron-installer-dmg');

// pack dmg config
var packdmgConfig = require('./packdmg.config.js');

// dmg
electronDMG(packdmgConfig, function(err){
    console.log(err);
});