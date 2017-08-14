const express = require('express');
const app = express();
const db_url = "mongodb://localhost:27017/tododb";

const mongoose = require('mongoose');
mongoose.connect(db_url,function (err,res){
    if (err) {
        console.log('@@@ERROR connecting to: ' + db_url + '. ' + err);
    } else {
        console.log('@@@Succeeded connected to: ' + db_url);
    }
});

const { Schema } = mongoose;

const adminSchema = new mongoose.Schema({
    admin_acc: String,
    admin_psw: String
})


var Admin = mongoose.model('admin',adminSchema);
Admin.find({}).exec(function (err, result) {
    console.log('result',result);
});




app.listen(3002);