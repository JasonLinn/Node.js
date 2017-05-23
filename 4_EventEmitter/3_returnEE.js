var emitter = require('events').EventEmitter;
/*======================
1.從函式return EventEmitter 物件
繼承EventEmitter 類別
=======================*/
function LoopProcessor(num) {
    var e = new emitter();
    setTimeout(function () {
        for (var i = 1; i <= num; i++) {
            //emit觸發事件
            e.emit('BeforeProcess', i);
            console.log('Processing number :' + i);
            e.emit('AfterProcess', i);
        }
    },2000);
    return e;
}

var lp = LoopProcessor(3);
//on綁定事件
lp.on('BeforeProcess',function(data){
    console.log('About to start the process for '+ data);
})
lp.on('AfterProcess',function(data){
    console.log('Completed processing' + data);
})