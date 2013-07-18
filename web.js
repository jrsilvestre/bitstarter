var express = require('express');
var fs = require('fs');

var fcontent = fs.readFileSync('index.html');
var buffer = new Buffer(fcontent.length);
buffer.write(fcontent.toString(), 0);
var output = buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
