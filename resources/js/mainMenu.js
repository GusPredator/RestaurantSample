const electron = require("electron").remote;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

const thisWindow = require("electron").remote.getCurrentWindow();

const userLink = document.getElementById("userLink");
const exitBtn = document.getElementById("exitBtn");

function createWindow() {
    win = new BrowserWindow( {width: 400, height: 400, frame: false } );
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../views/userMenu.html'),
        protocol: 'file',
        slashes: true
    }))

    win.on('closed', () => { win = null });

    // win.webContents.openDevTools();
}

function exit(){
    thisWindow.close();
}

userLink.addEventListener('click', createWindow);
exitBtn.addEventListener('click', exit);