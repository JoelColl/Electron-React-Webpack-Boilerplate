const { app } = require('electron');
const serve = require('electron-serve');
const { createWindow } = require('./helpers');

const isProd = process.env.NODE_ENV === 'production';

module.exports = function runElectron() {
  if (isProd) {
    serve({ directory: 'app' });
  } else {
    app.setPath('userData', `${app.getPath('userData')} (development)`);
  }

  let mainWindow;
  (async () => {
    await app.whenReady();

    mainWindow = createWindow('main', {
      width: 1000,
      height: 600,
    });

    if (isProd) {
      await mainWindow.loadURL('app://./index.html');
    } else {
      await mainWindow.loadURL(`http://localhost:8082`);
    }

    if (!isProd) {
      const {
        REACT_DEVELOPER_TOOLS,
        default: installExtension,
      } = require('electron-devtools-installer');
      await installExtension(REACT_DEVELOPER_TOOLS, {
        loadExtensionOptions: { allowFileAccess: true },
      });

      mainWindow.webContents.openDevTools();
    }
  })();

  app.on('window-all-closed', () => {
    app.quit();
  });
};