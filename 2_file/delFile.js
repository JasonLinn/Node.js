var fs = require('fs');

fs.unlink('test.txt',function(){
    console.log('已刪除檔案');
})