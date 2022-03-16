'use strict';

// electron
var electron = require('electron');

// app
var app = electron.app;

// window all closed
app.on('window-all-closed', function(){
  if (process.platform !== 'darwin') app.quit();
});