var express = require('express'),
	app = express(),
	server = require('http').createServer(app);


app.use(express.static(__dirname + '/public'))
.use(express.json());

server.listen(8080);
console.log('Server up!');

app.get('/', function (req, res, next) {
	res.sendfile(__dirname + '/index.html');
});