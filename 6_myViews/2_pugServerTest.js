var http = require('http'); // 1 - Import Node.js core module
var pug = require('pug');

var data = pug.renderFile('./sample.pug');


var server = http.createServer(function (req, res) {   // 2 - creating server
    if (req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        //set response content
        res.write(data);
        res.end();
    }else{
        res.end('Invalid Request!');
    }
})

server.listen(3000); //3 - Listen for any incoming requestes
console.log('Node.js web server at port 3000 is running...');