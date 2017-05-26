var mongoData = require('./3_monListData');
// var msdata = require('./mslistdata.js');

var express = require("express");
var app = express();


//set view engine
app.set("view engine", "pug")
//set view directory


app.set("views", __dirname)
app.get('/', function (req, res) {
    mongoData.personList(function (recordset) {
        //console.log(recordset);
        res.render('personPageTp', { personList: recordset });
    });
});

app.get('/person', function (req, res) {
    mongoData.personList(function (recordset) {
        //console.log(recordset);
        res.render('person', { personList: recordset });
    });
});

app.get('/pugs', function (req, res) {
    app.use(express.static('../5_myApp/public/'));
    mongoData.personList(function (recordset) {
        //console.log(recordset);
        res.render('pugs', { personList: recordset });
    });
});


var server = app.listen(3000,'127.0.0.1', function () {
    console.log('Server is running!');
});