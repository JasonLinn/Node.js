var express = require('express');
var app = express();

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/Images', express.static(__dirname + '/Images'));

var server = app.listen(5050);
console.log('Node server run in port:5050...');