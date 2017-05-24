var mongoData = require('./3_monListData.js');

mongoData.personList(function(res){
    console.log('res',res);
})