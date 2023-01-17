import path from 'path';
import AppTray from './AppTray';
import MainWindow from './MainWindow';
import config from '../../app.config.main';

class WindowManager {
  /**
   * @private {WindowManager}
   */
  static __instance

  /**
   * @private {MainWindow}
   */
  static __mainWindow

  /**
   * @return {WindowManager}
   */
  static getInstance() {
    if (!WindowManager.__instance) {
      WindowManager.__instance = new WindowManager();
    }

    return WindowManager.__instance;
  }

  createMainWindow() {
    const mainWindow = new MainWindow(this, {
      width: 800,
      height: 480,
      show: false,
      frame: true,
      fullscreenable: false,
      resizable: false,
      transparent: false,
      skipTaskbar: process.platform !== 'linux',
      icon: path.join(config.assetsDir, process.platform !== 'win32' ? 'appIconColored.png' : 'appIconColored.ico'),
      webPreferences: {
        // Prevents renderer process code from not running when window is
        // hidden
        backgroundThrottling: false,
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
        webSecurity: false,
      },
    });

    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    mainWindow.setHandlers();

    WindowManager.__mainWindow = mainWindow;
  }

  /**
   * @return {MainWindow}
   */
  getMainWindow() {
    if (!WindowManager.__mainWindow) {
      this.createMainWindow();
    }

    return WindowManager.__mainWindow;
  }
}

export default WindowManager;
