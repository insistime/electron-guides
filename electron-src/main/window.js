'use strict';

// path
var path = require('path');

// electron
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;

/**
 * create login window
 * @returns 
 */
exports.createLoginWindow = function(){
  var options = {
    width: 200,
    height: 300,
    center: true,
    maximizable: false,
    fullscreenable: false,
    backgroundColor: '#66CD00',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  };

  var win = new BrowserWindow(options);
  win.loadFile(path.join(__dirname, '../renderer-login/dist/index.html'));

  return win;
};

/**
 * open index window
 */
exports.openIndexWindow = function(){
  var windows = BrowserWindow.getAllWindows();
  if(!windows || !windows.length) return;

  var loginWindow = windows[0];
  loginWindow.close();

  var options = {
    width: 800,
    height: 600,
    backgroundColor: '#66CD00'
  };

  var win = new BrowserWindow(options);
  win.loadFile(path.join(__dirname, '../renderer-index/dist/index.html'));
};