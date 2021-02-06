var express = require('./lib/express')
var path = require('path')
var bodyParser = require('./lib/body-parser')


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

//尝试获取POST请求的相关信息，如果获取到，则放到req上，并next到下一个static中间件上
app.use(bodyParser)

//看是否有和static请求相关信息，如果找到，发送res，并结束next循环，如果找不到，继续向下next
app.use(express.static(path.join(__dirname, 'static')))


app.use(function(req, res, next) {
    console.log('middleware 1')
    next()
})

app.use(function(req, res, next) {
    console.log('middleware 12')
    next()
})


app.use('/hello', function(req, res){
    console.log('/hello..')
    res.send('hello world')
})

app.use('/getWeather', function(req, res){
    res.send({url:'/getWeather', city: req.query.city})
})

app.use('/search', function(req, res){
    res.send(req.body)
})

//如果都匹配不上，发送404
app.use(function(req, res){
    res.send(404, 'haha Not Found')
})


module.exports = app