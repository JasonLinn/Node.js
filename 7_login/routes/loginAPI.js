var express = require('express');
var loginAPI = express.Router();

var isLogin = false;
//進入需要驗證的頁面
loginAPI.get('/',function(req,res){
    var name="guest";
    isLogin = false;
    //有登入會改變登入者姓名及登入狀態
    if(req.signedCookies.firstName && req.signedCookies.lastName){
        name = req.signedCookies.firstName + req.signedCookies.lastName;
        isLogin = true;
    }
    //沒有登入會導入index.pug樣板
    res.render('index',{title:'Express',member:name,logstatus:isLogin});
});

//送出表單後
loginAPI.post('/post',function(req,res){
    if(req.body.firstName=="" || req.body.lastName==""){
        //如果其中有一個是空值，則回到login頁面
        //redirect(重定向)
        return res.redirect('Login.html');
    }else{
        res.cookie('firstName',req.body.firstName,{
            path:'/cookie',signed:true,maxAge:600000
        });//set cookie
        res.cookie('lastName',req.body.lastName,{
            path:'/cookie',signed:true,maxAge:600000
        });//100min
    }
})

//登出
loginAPI.get('/logout',function(req,res){
    res.clearCookie('firstName',{path:'/cookie'});
    res.clearCookie('lastName',{path:'/cookie'});
    return res.redirect('/cookie');
    //登出做清理的動作，並返回路由/cookie
})

module.exports = loginAPI;