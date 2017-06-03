var datasets = require('./recordset.js'); //先載入原本資料集,建立mongodb資料庫
var modelCreate = require('./todofirstdb.js'); //引入建立資料庫的設計

modelCreate.InsertNew(datasets,function(res){
    console.log('res',res);
})