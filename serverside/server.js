var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8082, '172.31.26.132');
console.log('Server running at http://172.31.26.132:8080/');