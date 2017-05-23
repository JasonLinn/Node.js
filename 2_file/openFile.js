var fs = require('fs');


/*======================
　　flag
    r   閱讀
    r+  讀寫
    rs  同步模式讀取
    rs+ 打開文件進行讀寫，同步打開
=======================*/  
fs.open('writeFile.txt','rs+',function(err,fd){
    if(err) throw err;
    console.log('檔案開啟成功');
})