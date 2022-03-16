'use strict';

// path
var path = require('path');

// electron
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;

/**
 * create window
 */
exports.createWindow = function(){
  var loginWin = createLoginWindow();

  setTimeout(() => {
    loginWin.close();
    createIndexWindow();
  }, 2000);
};

// create login window
function createLoginWindow(){
  var options = {
    width: 200,
    height: 300,
    center: true,
    maximizable: false,
    fullscreenable: false,
    backgroundColor: '#66CD00'
  };

  var win = new BrowserWindow(options);
  win.loadFile(path.join(__dirname, '../renderer-login/dist/index.html'));

  return win;
}

// create index window
function createIndexWindow(){
  var options = {
    width: 800,
    height: 600,
    backgroundColor: '#66CD00'
  };

  var win = new BrowserWindow(options);
  win.loadFile(path.join(__dirname, '../renderer-index/dist/index.html'));
}