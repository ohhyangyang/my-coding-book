//1 引入express
const express = require('express');

//2 创建应用对象
const app = express();

//3 创建路由规则

//原生1 当客户端发出get请求时，执行以下
app.get('/server',(req,res)=>{
    /*
    解读：
    发送get请求时，如果请求行的第二段内容的url的路径是/yangServer
    则会执行以下回调函数中的代码，并最终通过res来响应给前端
     */
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    
    //设置响应体
    res.send('HELLO AJAX GET');

});

//原生2 当客户端发出post请求时，执行以下
app.post('/server',(req,res)=>{
    /*
    解读：
    发送post请求时，如果请求行的第二段内容的url的路径是/yangServer
    则会执行以下回调函数中的代码，并最终通过res来响应给前端
     */
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    
    //设置响应头，接受自定义请求头
    //res.setHeader('Access-Control-Allow-Headers','*');
    
    //设置响应体
    res.send('HELLO AJAX POST');
    
});

//原生3 当客户端发出GET JSON请求时，执行以下
app.get('/json-server',(req,res)=>{
    /*
    解读：
    发送post请求时，如果请求行的第二段内容的url的路径是/yangServer
    则会执行以下回调函数中的代码，并最终通过res来响应给前端
     */
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    
    //设置响应头，接受自定义请求头
    res.setHeader('Access-Control-Allow-Headers','*');
    
    //响应一个数据
    const data = {
        name: 'Yang'
    };
    //将对象转换为字符串
    let dataStr = JSON.stringify(data);
    
    //将dataStr设置响应体
    res.send(dataStr);
    
});

//原生4 针对IE缓存问题，执行以下
app.get('/ie',(req,res)=>{
    /*
    解读：
    发送get请求时，如果请求行的第二段内容的url的路径是/yangServer
    则会执行以下回调函数中的代码，并最终通过res来响应给前端
     */
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    
    //设置响应体
    res.send('HELLO 神奇的IE');
    
});

//原生5 原生6 原生7 针对延时响应设置，取消请求设置和请求重复问题，执行以下
app.get('/delay',(req,res)=>{
    /*
    解读：
    发送get请求时，如果请求行的第二段内容的url的路径是/yangServer
    则会执行以下回调函数中的代码，并最终通过res来响应给前端
     */
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    
    //设置响应体，针对延时主题做一个延时3s的效果
    setTimeout(()=>{
        
        res.send('延时响应');
     },3000)
    
});

//jQuery 服务
app.all('/jquery-server',(req,res)=>{
    //接受所有类型请求
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    const data = {name:'Yang'};
    
    res.send(JSON.stringify(data));
});

//Axios 服务
app.all('/axios-server',(req,res)=>{
    //接受所有类型请求
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    const data = {name:'Yang'};
    
    res.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server',(req,res)=>{
    //接受所有类型请求
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    const data = {name:'Yang'};
    
    res.send(JSON.stringify(data));
});

//JSONP 原理演示
app.all('/jsonp-server',(req,res)=>{
    
    //res.send('console.log("HELLO JSONP SERVER")');
    
    const data = {
        name: 'Yang'
    };
    let dataStr = JSON.stringify(data);
    
    //返回一个JS代码形式的结果，交给浏览器解析
    res.end(`handle(${dataStr})`);
});

//JSONP实践，检测用户名是否存在
app.all('/check-username',(req,res)=>{
    
    const data = {
        exist: 1,
        msg: "该用户名已经存在"
    }
    
    let dataStr = JSON.stringify(data);
    
    //返回一个handleExist函数，交给浏览器解析
    res.end(`handleExist(${dataStr})`);
});

//jQuery JSONP
app.all('/jquery-jsonp-server',(req,res)=>{
    
    const data = {
        name:'Yang',
        city:['Barcelona','Dalian']
    };
    
    //转化数据为字符串
    let dataStr = JSON.stringify(data);
    
    //接收jQuery-JSONP请求发来的callback函数： jQuery35106042896420454702_1597054157478
    let cb = req.query.callback;
    
    //返回jQuery指定的函数，交给浏览器解析
    res.end(`${cb}(${dataStr})`);
});

//CORS
app.all('/cors-server',(req,res)=>{
    /*
    ⚠️⚠️ 要想实现跨域请求，必须要在服务器端返回结果的时候设置一个响应头
            res.setHeader('Access-Control-Allow-Origin','*')
            *代表了通配
            或者可以写，允许实现跨域的网站的url
         
     */
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('HELLO CORS');
})






// 4 设置监听，监听端口是否启动服务

app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...")
})
// 此时登陆地址为：http://127.0.0.1:8000/yangServer


//5 在终端打开server
  /*
  在terminal打开当前文件夹，输入node server 回车,
  ！！！！！ ⚠️⚠️⚠️ 通过学习后推荐使用：输入nodemon server文件名
  
    如控制台出现"服务已经启动，8000端口监听中..."，则证明启动成功
    如端口发生冲突无法打开，用ctrl+C可以关闭一个端口，或改别的端口
   */
