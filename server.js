var express = require('express');
var omdb = require('omdb');

var GitHubApi = require("node-github");
var github = new GitHubApi({
    version: "3.0.0"
});

var app = express();
var PORT = process.env.PORT || 8090;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/register", function(req, res) {
  res.sendFile(process.cwd() + "/views/register.html");
});

app.get("/dashboard", function(req, res) {
  res.sendFile(process.cwd() + "/views/dashboard.html");
});


app.get('/github/:gitName', function(req, res) {
  github.user.getFrom({
      user: req.params.gitName
  }, function(err, gitResponse){
      res.send(JSON.stringify(gitResponse))
  });
});

app.get('/movies/:movieName', function(req, res) {
  omdb.search(req.params.movieName, function(err, movies) {
    console.log(movies);
    var firstMovie = movies[0];

    res.send(JSON.stringify(firstMovie));
  });
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
