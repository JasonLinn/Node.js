var http = require('http');

var nStatic = require('node-static');

//預設路徑變成在./public裡面
var fileServer = new nStatic.Server('./public');

http.createServer(function (req, res) {

    fileServer.serve(req, res);

}).listen(5050);
console.log('server run in port:5050');