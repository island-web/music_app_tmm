const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

let mainWindow = null;
let dialogWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    frame: false,
    transparent: false,
    show: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
  });

  mainWindow.loadFile('./index.html');

  mainWindow.webContents.openDevTools();

  //******************************************************************************************************************************************************* */
  // Listen from renderer processes

  ipcMain.on('reload-app', () => { app.relaunch(); app.quit() });

  ipcMain.on('quit-app', () => { app.quit() });

  ipcMain.on('close-login-window', () => { dialogWindow.close() });

  ipcMain.on('checkAuth', (event, data) => { mainWindow.webContents.send('checkAuth', data) });

  ipcMain.on('resultAuth', (event, data) => { dialogWindow.webContents.send('resultAuth', data) });
  //******************************************************************************************************************************************************* */

}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
