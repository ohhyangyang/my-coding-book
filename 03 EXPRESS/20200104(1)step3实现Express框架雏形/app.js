/*
⚠️app.js在express.js的基础上使用，拥有注册各种middleWare中间件的功能

在开发时express注册中间件时是有先后顺序的
串行匹配运行按顺序注册的各注册的中间件如：
           1、日志、cookie、bodyparser等开发者自己注册的中间件
           2、router中间件
           3、静态文件服务
           4、模板引擎处理
           经过匹配的中间件处理后输出返回

通过www.js已知app()是一个函数，但同时一个函数对象也可以拥有它方法，如app.use()
而app.js则是一个操作app.use()的使用文件
 */

var express = require('./lib/express');
//引用express.js

var path = require('path');

var app = express();//app为express函数的返回值

//添加中间件
//目前还缺少 app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
    console.log('middleware 1');
    next();
});

app.use(function(req, res, next) {
    console.log('middleware 12');
    next();
});

//例如查询 http://localhost:8090/hello
app.use('/hello', function(req, res){
    console.log('/hello..');
    res.send('hello world');
});

//例如查询 http://localhost:8090/getWeather?city=hangzhou
app.use('/getWeather', function(req, res){
    res.send({url:'/getWeather', city: req.query.city});
});

//例如查询aaa
app.use(function(req, res){
    res.send(404, 'haha Not Found');
});


module.exports = app;