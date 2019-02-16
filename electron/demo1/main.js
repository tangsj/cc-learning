const { app, BrowserWindow } = require('electron');
const Serialport = require('serialport');

var window = null;

app.on('ready', function() {
  window = new BrowserWindow({ 
    width: 1024, 
    height: 600, 
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });

  window.on('closed', () => {
    window = null
  }); 

  // window.webContents.openDevTools()

  window.loadFile('./index.html');
});
