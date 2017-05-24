var express = require('express');
var app = express();

//set view engine
app.set("view engine", "pug")
//set view directory
//如果要自訂樣版存放資料夾，我們在 express server 必須使用 app.set(“veiws","自訂樣版存放資料夾絕對路徑")
app.set("views", __dirname)

app.get('/', function (req, res) {
    res.render('sample');  // render 樣版，執行編繹。
});

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});