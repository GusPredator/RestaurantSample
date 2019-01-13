const thisWindow = require("electron").remote.getCurrentWindow();

const exitBtn = document.getElementById("exitBtn");

function exit(){
    thisWindow.close();
}

exitBtn.addEventListener('click', exit);