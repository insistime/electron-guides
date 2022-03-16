'use strict';

// qiao-electron
var q = require('qiao-electron');

// version
var version = require('../package.json').version;

/**
 * app init
 */
module.exports = function(){
  // set application menu
  q.setApplicationMenu();
  
  // set about version
  q.setAboutVersion(version);
};