var msg = require('./1_Messages.js');
/*======================
另外，值得一提的是，我們只有在自創module時，require() 
裡要寫清楚檔案path，如果是原生模組或是npm時，則不需要。　　
=======================*/
//第一個是物件
console.log(msg);
//第二個屬性引用
console.log(msg.simpleMessage);
//第三個是引用function
msg.log('I"m function');