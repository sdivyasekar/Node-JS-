
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'plain text'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
