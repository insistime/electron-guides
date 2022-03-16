'use strict';

// electron
var electron = require('electron');
var ipcMain = electron.ipcMain;

// ipc
ipcMain.handle('ipc-login-success', function(event, ...args){
  console.log('ipc-login-success', ...args);
  return 'suc';
});