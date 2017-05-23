var fs = require('fs');

fs.writeFile('writeFile.txt','您好嗎?',function(err){
    if(err)
        console.log(err);
    else
        console.log('Write operation complete');
})