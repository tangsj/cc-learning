const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var window = null;

app.on('ready', function() {
  window = new BrowserWindow({width: 1024, height: 600});
  window.loadURL('https://www.hjlapp.com/admin');
});
