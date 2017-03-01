var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/simple.html');
});

app.get('/client.js', function(req, res){
  res.sendFile(__dirname + '/client.js');
});

http.listen(8080, '172.31.16.61', function () {
  console.log('listening on *:8081 172.31.18.133');
});
