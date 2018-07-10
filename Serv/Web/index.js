var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var stream = fs.createReadStream(__dirname + '/page.html', 'utf8');
  stream.pipe(res);
}).listen(8080);
