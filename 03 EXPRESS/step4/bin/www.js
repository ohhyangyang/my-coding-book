#!/usr/bin/env node
//#!/usr/bin/env node使得该文件默认通过Node来执行

//⚠️www为创建server的启动目录

var app = require('../app');
//标准的nodejs引入外部模块的方法，引用app.js
var http = require('http');

http.createServer(app).listen(8090);
//当有request过来的时候，就把它交给创建的app函数去操作

console.log('open http://localhost:8090');