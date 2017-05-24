var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
    db.collection("Persons", function (err, collection) {
        collection.find({ firstName: "James" }).toArray(function (err, items) {
            if (err) throw err;
            console.log(items);
            console.log("We found " + items.length + " results!");
        });

    });
    db.close(); //關閉連線
});