const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  // Load the HTML file of your application.
  win.loadFile('@editor/index.html')
}

app.whenReady().then(createWindow)