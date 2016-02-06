var express = require('express');
var app = express();
var PORT = 8090;


//serves the static resoure files

app.use(express.static(__dirname + '/public/jquery-2.2.0.min'));
app.use(express.static(__dirname + '/public/'));


app.get('/', function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get('/dashboard', function(req, res) {
  res.sendFile(process.cwd() + "/views/dashboard.html");
});

app.get('/reister', function(req, res) {
  res.sendFile(process.cwd() + "/views/register.html");
});

app.listen(PORT, function() {
  console.log("App is listening on port %s", PORT);
});