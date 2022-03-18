'use strict';

// electron
var electron = require('electron');
var ipcMain = electron.ipcMain;

// log
var log = require('../util/log.js');

// ipc
/**
 * renderer-log
 *  arg {msg:'',type:''}
 */
ipcMain.on('renderer-log', function(event, arg){
  console.log(arg);
  // check
  if(!arg || !arg.msg) return;

  // log
  log.log(arg.msg, arg.type);
});