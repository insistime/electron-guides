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


// app ready
app.whenReady().then(() => {
  // app init
  appInit();

  // create window
  createWindow();

  // activate
  app.on('activate', function(){
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// create window
function createWindow(){
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadFile(path.join(__dirname, '../renderer-login/dist/index.html'));
}