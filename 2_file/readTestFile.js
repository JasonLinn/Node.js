/*======================
Node.js 的 fs module ，是用來操作實體檔案，
可以同步或非同步存取檔案系統操作。
一般建議使用　"非同步存取""　檔案，性能高、速度快、無阻塞。
=======================*/

var fs = require('fs');
/*======================
　　fileName: 檔案的完整路徑及檔名，格式字串。
    options: options 可能是一個物件或字串，包含"編碼"及"flag"。這裡預設的編碼是 utf8 , flag是 “r"。
    call back: 是帶兩個參數的function，err及file data，當我們執行readFile完成時, 要做的事, 例如: 回傳file data。
=======================*/
//fs.readFile(fileName [,options], callback)
fs.readFile('TestFile.txt', function (err, data) {
    if (err) throw err;

    console.log(data.toString());
});