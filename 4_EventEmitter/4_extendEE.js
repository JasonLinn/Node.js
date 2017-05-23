/*======================
繼承EventEmitter 類別
我們可以用 util.inherits()，
它是utility module的方法，
所以，一開始就必須用require(‘util’)載入該模組。
=======================*/
var emitter = require('events').EventEmitter;
//繼承時，需要用到的模組  //utility 效用
var util = require('util');

//prcessor處理器
function LoopProcessor(num){
    var me = this;
    setTimeout(function(){
        for(var i=1;i<=num;i++){
            me.emit('BeforeProcess',i);
            console.log('Processing number:' + i);
            me.emit('AfterProcess',i);
        }
    },2000)
    return this;
}

//直接讓LoopProcessor 繼承 emitter 類別
util.inherits(LoopProcessor,emitter)
var lp  = new LoopProcessor(3);

lp.on('BeforeProcess',function(data){
    console.log('About to start the process for' + data);
});

lp.on('AfterProcess',function(data){
    console.log('Completed processing' + data);
})