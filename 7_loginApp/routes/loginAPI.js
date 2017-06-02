var express = require('express');
var loginAPI = express.Router();

/*================================
domain (字串) 適用此cookie的domain name
encode (函式) 用於cookie編碼的同步函式，預設encodeURIComponent.
expires (日期) cookie的到期日，超過此日期，即失效。
httpOnly (布林) 標記此cookie只能從web server　訪問，以避免不正確的進入來取得竄改。
maxAge (數字) 設定此cookie的生存時間(毫秒為單位)，比方60000(10分鐘後到期，必須重新訪問)
path (字串) 適用此cookie的路徑，預設： “/”.
secure (布林) 設定此cookie是否只在https使用。
signed (布林) 此cookie是否要設簽章。(如果是true，必須使用cookie-parser設定簽章 )    
=================================*/
var isLogin=false;
// 進入需要驗證的頁面...
loginAPI.get('/',function(req,res){
    var name = 'guest';
    isLogin = false;
    if(req.signedCookies.firstName && req.signedCookies.lastName){
        name = req.signedCookies.firstName+' '+req.signedCookies.lastName;
        isLogin = true;
    }
    res.render('index',{title:'Express',member:name,logstatus:isLogin});
    



});

loginAPI.post('/post',function(req,res){
    if(req.body.firstName == "" || req.body.lastName == ""){
        return res.redirect('Login.html');
    }else{
        //Response (server設定cookie，回傳給client)
        //res.cookie(name, value [, options])

        //在 /cookie有效 使用簽章  生存值100min
        res.cookie('firstName',req.body.firstName,{path:'/cookie',signed:true,maxAge:600000});
        res.cookie('lastName',req.body.lastName,{path:'/cookie',signed:true,maxAge:600000});
        return res.redirect('/cookie');
    }
})

loginAPI.get('/logout',function(req,res){
    res.clearCookie('firstName',{path:'/cookie'});
    res.clearCookie('lastName',{path:'/cookie'});
    return res.redirect('/cookie');
})

module.exports = loginAPI;