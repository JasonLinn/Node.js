const http = require('http');//1.載入Node.js原生模組 http

const server = http.createServer((req, res) => {  //2.建立server
  if (req.url == '/') {
    //首先要先設定response header，用 writeHead() 方法
    res.writeHead(200, { 'Content-Type': 'text/html' });  
    //接著再寫回應的網頁body內容，用write()方法
    res.write('<html><body>This is Home Page.</body></html>');
    //end()是送出res不是結束
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body>This is student Page.</body></html>');
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body>This is admin Page.</body></html>');
    res.end();
  } else
    res.end('Invalid Request!');  

});


server.listen(5000); //3 - 進入此網站的監聽 port, 就是 localhost:xxxx 的 xxxx
console.log('Node.js web server at port 5000 is running..')