var express = require('express');
var app = express();

//define routes here..

app.get('/',function(req,res){
    res.send("<html><body><h1>Hello this is index</h1></body></html>");
});

app.post('/submit-data',function(req,res){
    res.send('POST Request');
})
app.put('/update-data',function(req,res){
    res.send('PUT Request');
})
app.delete('/delete-data',function(req,res){
    res.send('DELETE Request');
})
var server = app.listen(5050,function(){
    console.log('Node server is running...');
})