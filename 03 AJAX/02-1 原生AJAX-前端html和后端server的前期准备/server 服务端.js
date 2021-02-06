//引入express
const express = require('express');

//创建应用对象
const app = express();
//创建路由规则
app.get('/server',(req,res)=>{
    /*
    解读：
    发送请求时，如果请求行的第二段内容的url的路径是/server
    则会执行以下回调函数中的代码，并最终通过res来响应给前端
     */
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    res.send('HELLO AJAX');

});
//监听端口是否启动服务
/*
如端口发生冲突，用ctrl+C可以关闭一个端口，或改别的端口
 */
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...")
})

//在终端打开server
/*
在terminal打开当前文件夹，输入node server 回车
  ！！！！！ ⚠️⚠️⚠️ 通过学习后推荐使用：输入nodemon server文件名
  
  如控制台出现"服务已经启动，8000端口监听中..."，则证明启动成功
  如端口发生冲突无法打开，用ctrl+C可以关闭一个端口，或改别的端口


 */

// 登陆地址：http://127.0.0.1:8000/server