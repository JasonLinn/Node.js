const http = require('http');//1.載入Node.js原生模組 http


/*============================================
      使用http提供的createServer()
      去建立一個http Server，它包含回呼函式
      並使用用request及response 參數。


      所謂回呼函式(call back) 就是只有當事件
      被觸發的時候才執行的函數！
==============================================*/
//request 及 response
const server = http.createServer((req, res) => {  //2.建立server
  //在此處理 客戶端向 http server 發送過來的 req
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World\n<h1>haha</h1>');
  //如果請求(req)是"/"則回應(res)下方程式
  // if (req.url == '/') {
  //   //首先要先設定response header，用 writeHead() 方法
  //   res.writeHead(200, { 'Content-Type': 'text/html' });  
  //   //接著再寫回應的網頁body內容，用write()方法
  //   res.write('<html><body>This is Home Page.</body></html>');
  //   //end()是送出res不是結束
  //   res.end();
  // } else if (req.url == '/student') {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.write('<html><body>This is student Page.</body></html>');
  //   res.end();
  // } else if (req.url == '/admin') {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.write('<html><body>This is admin Page.</body></html>');
  //   res.end();
  // } else
  //   res.end('Invalid Request!');  

});


// server.listen(5000); //3 - 進入此網站的監聽 port, 就是 localhost:xxxx 的 xxxx
// console.log('Node.js web server at port 5000 is running..')
const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

