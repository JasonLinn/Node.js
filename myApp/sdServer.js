var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder

var server = app.listen(5050);
console.log('Node server run in port:5050');