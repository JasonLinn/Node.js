var mongoData = require('./3_monListData.js');
var express = require("express");
var app = express();

//set view engine
app.set("view engine", "pug")
//set view directory
app.set("views", __dirname)

mongoData.personList(function (recordset) {
    //console.log(recordset);
    app.get('/', function (req, res) {
        res.render('personTp', { personList: recordset });
    });

    app.get('/person',function(req,res){
        mongoData.personList
    })

});

var server = app.listen(3000, function () {
    console.log('Server is running!');
});