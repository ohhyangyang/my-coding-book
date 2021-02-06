var express = require('./lib/express');
var path = require('path');
var bodyParser = require('body-parser');//引用npm中的bodyParser模块
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mimeType = require('./lib/mime');//自己手写了一个mimeType中间件


var app = express()

/*
在开发时express注册中间件时是有先后顺序的
串行匹配运行按顺序注册的各注册的中间件如：
           1、日志、cookie、bodyparser等开发者自己注册的中间件
           2、静态文件服务
           3、router中间件
           4、模板引擎处理
           经过匹配的中间件处理后输出返回
 */

app.use(urlencodedParser);//urlencodedParser中间件为通过npm获得的

app.use(mimeType);

app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));//设置模版引擎目录


app.use(function(req, res, next) {
    console.log('middleware 1');
    next();
});

app.use(function(req, res, next) {
    console.log('middleware 12');
    next();
});


app.use('/hello', function(req, res){
    console.log('/hello..');
    res.send('hello world');
});

app.use('/getWeather', function(req, res){
    res.send({url:'/getWeather', city: req.query.city});
});

app.use('/search', function(req, res){
    res.send(req.body);
});

//模版引擎，在模版的基础上添加想传递的内容
app.use('/about', function(req, res){//模版引擎
    res.render('about.html', {
        title: '饥人谷直播14班开班了',
        teacher: '若愚',
        date: '7月中旬',
        intro: 'http://jirengu.com'
    });
});

app.use(function(req, res){
    res.send(404, 'haha Not Found')
})


module.exports = app;