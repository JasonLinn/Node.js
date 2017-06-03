var express = require('express');
var app = express();
var dataset = require('./recordset.js'); //要有資料來做頁面呈現, 所以直接匯入!

//set view engine
app.set("view engine", "pug")
//set view directory
app.set("views", __dirname + "/views")　// 樣版所在位置

app.get('/todo', function (req, res) {
    　　　res.render('restfulTP', { itemlist: dataset });  // render 到 restful樣版
});

app.use('/restful', express.static(__dirname + '/public')); //一些必要的javascript, css皆放入此!!
app.listen(3000, function () {
    console.log('Ready...for 3000');
});