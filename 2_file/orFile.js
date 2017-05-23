var fs = require('fs');

fs.open('TestFile.txt', 'r', function (err, fd) {
    debugger;
    if (err) {
        return console.error(err);
    }
    //buffer: 數據寫入的緩衝區。
    var buffer = new Buffer(1024);
    debugger;
    fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes,buffer) {
        //err 為錯誤訊息， bytesRead 表示讀取的字元數，buffer 為緩衝區對象。
        if (err) throw err;
    debugger;
        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(bytes + " 字元被讀取");
            console.log(buffer.slice(0, bytes).toString());
            // console.log('buffer',buffer);
        }

        // Close the opened file.
        fs.close(fd, function (err) {
            if (err) throw err;
        });
    });
});

//node --debug-brk orFile.js