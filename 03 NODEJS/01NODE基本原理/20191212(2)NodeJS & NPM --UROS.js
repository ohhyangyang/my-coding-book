/*
- NodeJS的组成
     Chrome V8引擎（C++语言编写），用来compile JS
     Libuv（C语言），用于interact语言, 提供对基于事件循环的异步I/O的支持
     NodeJS Binding Library
     NodeJS Core librery（JS）

- NodeJS概念
     - NodeJS is a JS environment, working on machines
         Node.js 是能夠在伺服器端運行 JavaScript 的開放原始碼、跨平台 JavaScript 執行環境。

     - Node Version Manger 下载Node，并且切换各个版本的Node

     - 在Terminal中执行外部的js文件中的代码
         1 首先进入到对应的文件目录
         2 输入 node xxx.js
         3 回车输出结果

- const chalk = require("chalk")
  
  module.exports = greetings;  ⚠️⚠️⚠️ only can export one object
  const greeting = require('./greetings')

- NPM基本流程
   - 
    NPM用于上传，下载，管理，更新模块包
    1 创建npm项目
    npm init     创建项目
    npm init -y  defalt创建项目，⚠️⚠️⚠️ 要求valid name，不可以有空格

    2 下载模块包
    npm i chalk 创建dependencies的模块包 （或者install）   
    npm i --save-dev express  创建devDependencies的模块包（或者install）
    npm i --global nodemon  全局下载模块包

    3 创建.gitignore
     加入https://github.com/github/gitignore/blob/master/Node.gitignore中的内容，
     来防止node_module上传到github
    
    4 连接到github，并上传文件（不上传node_module）
     git init
     git remote add origin URL
     git add .
     git commit -m"xx"
     git push origin master

    5 下载其他项目的node_module
      npm install


*/