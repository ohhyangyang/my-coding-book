/*
  Express 简介
   Express 是一个简洁而灵活的 node.js Web应用框架,
   提供了一系列强大特性帮助你创建各种Web应用，和丰富的HTTP工具。
   
   使用Express可以快速地搭建一个完整功能的网站。
   
  Express 框架核心特性：
     可以设置中间件来响应 HTTP 请求。
     定义了路由表用于执行不同的 HTTP 请求动作。
     可以通过向模板传递参数来动态渲染 HTML 页面。
 */

//1 引入express
const express = require('express');

//2 创建应用对象
const app = express();

//3 创建路由规则
      /*
      声明request和response参数
        request: 对请求报文的封装
        response: 对响应报文的封装
       */
app.get('/',(request,response)=>{
    //至少要写一个'/'
    
    //设置响应体
    response.send('HELLO EXPRESS');
});

//4 设定监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...")
});

/*
接上：
   用terminal进入当前文件的文件夹，
   用node启动当前文件：输入node 当前文件名，回车   -->terminal会显示服务已经启动，8000端口监听中...
   打开Google Chrome，登陆地址: 127.0.0.1:8000     -->浏览器页面会显示HELLO EXPRESS
   打开inspector查看请求报文和响应报文
   
   ⚠️⚠️ ctrl+C可以关闭当8000前端口
 */