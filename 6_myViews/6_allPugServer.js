var mongoData = require('./3_monListData');
// var msdata = require('./mslistdata.js');

var express = require("express");
var app = express();

//set view engine
app.set("view engine", "pug")
//set view directory
app.set("views", __dirname)

app.get('/person', function (req, res) {
    mongoData.personList(function (recordset) {
        //console.log(recordset);
        res.render('personPageTp', { personList: recordset });
    });
});

app.get('/student', function (req, res) {
    mongoData.personList(function (recordset) {
        //console.log(recordset);
        res.render('personTp', { personList: recordset });
    });
});


var server = app.listen(3000,'127.0.0.1', function () {
    console.log('Server is running!');
});