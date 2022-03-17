'use strict';

// qiao-electron
var q = require('qiao-electron');

/**
 * app init
 */
module.exports = function(){
  // set application menu
  q.setApplicationMenu();
  
  // set about version
  q.setAboutVersion(require('../package.json').version);
};