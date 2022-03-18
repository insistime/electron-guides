'use strict';

// electron
var electron = require('electron');
var ipcMain = electron.ipcMain;

// win
var win = require('../window.js');

// ipc
ipcMain.handle('ipc-login-success', function(event, ...args){
  if(!args || !args.length) return 'fail';
  
  var name = args[0];
  if(name != 'admin') return 'fail';
  
  win.openIndexWindow();

  return 'suc';
});