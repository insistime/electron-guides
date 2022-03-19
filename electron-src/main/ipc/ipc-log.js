'use strict';

// electron
var electron = require('electron');
var ipcMain = electron.ipcMain;

// q
var q = require('qiao-electron');

// ipc
/**
 * renderer-log
 *  arg {msg:'',type:''}
 */
ipcMain.on('renderer-log', function(event, arg){
  // check
  if(!arg || !arg.msg) return;

  // log
  q.log(arg.msg, arg.type);
});