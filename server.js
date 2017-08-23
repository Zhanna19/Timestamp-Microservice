// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var time = require('./time.js')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response) {
    response.send({"unix" : null, "netural" : null})
});

app.get("/:time", function (request, response) {
    response.send(time(request.params.time))
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});