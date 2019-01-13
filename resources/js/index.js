const electron = require("electron").remote;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

const thisWindow = require("electron").remote.getCurrentWindow();

const inButton = document.getElementById("getInBtn");
const outButton = document.getElementById("getOutBtn");

function createWindow() {
    win = new BrowserWindow( {width: 1280, height: 1024, frame: false } );
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../views/mainMenu.html'),
        protocol: 'file',
        slashes: true
    }))

    win.on('closed', () => { win = null });

    // win.webContents.openDevTools();
}

function logIn() {
    createWindow();
    thisWindow.close();
}

function closeAll() {
    thisWindow.close();
}

inButton.addEventListener('click', logIn);
outButton.addEventListener('click', closeAll);