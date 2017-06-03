var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var express = require('express');

app = express();

app.use(session({
    secret:'recommand 128 bytes radom string',
    store:new MongoStore({url:'mongodb://localhost:27017/sessiondb'}),
    cookie:{maxAge:60*1000}, //1min到期
    resave: false,
    saveUninitialized: true,
}))