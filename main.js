const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1480,
    height: 920,
    frame: false,
    transparent: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
  });

  //set position window
  const mainScreen = screen.getPrimaryDisplay();
  const screenWidth = mainScreen.size.width;
  const screenHeight = mainScreen.size.height;

  const windowWidth = mainWindow.getSize()[0];
  const windowHeight = mainWindow.getSize()[1];

  const x = (screenWidth - windowWidth) / 2;
  const y = (screenHeight - windowHeight) / 2;
  mainWindow.setPosition(x, y);



  mainWindow.loadFile('./index.html');
  mainWindow.webContents.openDevTools();

  ipcMain.on('reload-app', () => { app.relaunch(); app.quit() });
  ipcMain.on('quit-app', () => { app.quit() });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
