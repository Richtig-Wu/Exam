var express = require('express');
var app = express();
var fwq = require('http').createServer(app);

app.use(express.static(__dirname + '/'));

fwq.listen(2017);
