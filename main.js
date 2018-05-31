const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow
let errorWindow

function createWindow () {
  // mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow = new BrowserWindow({
    webPreferences: {
      plugins: true  // set it explicitly to false even if it should be the default
    }
  })

  // password for this test file is: 123456
  mainWindow.loadURL('file:///pdf-sample.protected.pdf')
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })

}


app.on('ready', createWindow)


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

