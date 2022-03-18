'use strict';

// electron
var electron = require('electron');

// qiao-electron
var q = require('qiao-electron');

// app
var app = electron.app;
var appInit = require('./app-init.js');
require('./app-event.js');

// window
var win = require('./window.js');

// ipc
require('./ipc/ipc.js');
require('./ipc/ipc-log.js');

// app ready
app.whenReady().then(() => {
  // app init
  appInit();

  // create window
  win.createLoginWindow();

  // activate
  app.on('activate', function(){
    if(q.window.getAllWindows().length === 0) win.createLoginWindow();
  });
});