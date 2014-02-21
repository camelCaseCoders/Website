var express = require('express'),
	app = express(),
	server = require('http').createServer(app);


app.use(express.static(__dirname + '/public'))
.use(express.json());

server.listen(8080);
console.log('Server up!');

var htmldir = __dirname + '/html';

app.get('/', function (req, res, next) {
	res.sendfile(htmldir + '/index.html');
});