/*======================
body-parser
這邊值得注意的是，我們需要用到一個中介軟體函式，
這個中介軟體名為 body-parser，它需要透過npm安裝。
而這個模組的功能是用來解析JSON, buffer, 字串, 
及 HTTP Post 請求提交的url 編碼資料。
=======================*/
var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
/*======================
注意！在這例子中，app.get()裡的回傳函式，
我們要以物件 res 回應一個 “靜態文件“，
也就是我們另外新增好的 index.html，
它必須用絕對路徑，所以，我們加了 __dirname，
它是node.js關鍵字，用來返回目前這個.js檔的絕對路徑，
後面附上 /檔名
=======================*/
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html'); //回應靜態文件
})

app.post('/submit-student-data',function(req,res){
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' Submitted Successfully!');
})

var server = app.listen(5050,function(){
    console.log('Node server is running');
})