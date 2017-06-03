//載入第三方模組
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//載入路由檔案
var routerCookie = require('./routes/loginAPI');

var app = express(); //建立一個express物件

//set view engine
app.set("view engine", "pug")
//set view directory
app.set("views", __dirname + "/views")

//將request進來的data 轉成 json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// sign for cookie
app.use(cookieParser('123456789'));
// Create a router to handle routes for a set of loginAPI
// 抓出來, 變成獨立檔案
// -------------------------------------------------------

//靜態檔案 like .js, .json, .xml, html....
app.use(express.static(__dirname + '/public'));

// 允許 /cookie 使用這個路由
app.use('/cookie', routerCookie);

app.listen(3000, function () {
    console.log('Ready...for 3000');
});