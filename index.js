//Load express module with `require` directive
var express = require('express')
var mysql = require('mysql');
var app = express()

app.get('/', function (req, res) {
  var con = mysql.createConnection({
    host: "34.67.75.146",
    port: 3306,
    user: "root",
    password: "123"
  });
  con.connect(function(err) {
    if (err) {
      res.send(err);
    }else{
      console.log("Connected!");
      res.send('Connected again')
  }
    
    
  });
})
//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
