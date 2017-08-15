var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://admin:root@ds139082.mlab.com:39082/heroku_fqjf3chf", function (err, db) {
    if (err) throw err;
    //Write databse Insert/Update/Query code here..
    console.log('mongodb is running!');
    db.close(); //關閉連線
});