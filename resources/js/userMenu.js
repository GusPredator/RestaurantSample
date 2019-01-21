const thisWindow = require("electron").remote.getCurrentWindow();

var mysql = require('mysql');

var connection = mysql.createConnection({
  hots: "localhost",
  user: "root",
  password: "",
  database: "restaurantsample" 
})

const inputUserName = document.getElementById("userNameInput");
const inputPassWord = document.getElementById("passWordInput");
const saveBtn = document.getElementById("saveBtn");
const closeBtn = document.getElementById("closeBtn");

function setConnection(){
  connection.connect(function(err){
    if(err) alert(err);
    alert('Connected!');
    var theQuery = "INSERT INTO users (username, password) VALUES ('admin', 'admin123');";
    connection.query(theQuery, function(err, result) {
      if(err) alert(err);
      alert("1 record inserted!");
    })
  })
}

function exit(){
  thisWindow.close();
}

saveBtn.addEventListener('click', setConnection);
closeBtn.addEventListener('click', exit);

