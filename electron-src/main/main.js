'use strict';

// path
var path = require('path');

// electron
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;

// app
var app = electron.app;
var appInit = require('./app-init.js');
require('./app-event.js');

// window
var win = require('./window.js');

// app ready
app.whenReady().then(() => {
  // app init
  appInit();

  // create window
  win.createWindow();

  // activate
  app.on('activate', function(){
    if (BrowserWindow.getAllWindows().length === 0) win.createWindow();
  });
});