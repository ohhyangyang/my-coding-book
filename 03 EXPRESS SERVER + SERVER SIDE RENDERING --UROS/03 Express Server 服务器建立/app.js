/*
在packeage.json中，在scripts中写 "start": "node app.js"
这样的话，在terminal中输入npm run start，就可以启动app.js
同理其他的关键字，例如 "test"xxx 就可以通过npm run test来启动xxx
*/



const express = require('express');

//1 CREATE SERVER
const app = express();


//2 MIDDLEWARE
//middleware for static files
//static files:例如一个图标logo的地址，css样式

app.use( express.static('public') )
/*
  ⚠️⚠️ 将public设置为static文件夹以后即可从中获取资源了
  127.0.0.1:3000/cat.jpg 即可获取cat图片
  127.0.0.1:3000/dog.jpg 即可获取dog图片
  ⚠️⚠️
  如果请求的html文件中有嵌入有样式，图片等，
  那么浏览器会自动对server发送对css文件，对font样式，对图片等等的请求，以用于对html的styling
  例如 127.0.0.1:300/css/about.css
  ⚠️⚠️
  public中储存的css样式的路径必须在相对的html中写成以下的href样式：
    <link rel="stylesheet" href="/css/xxx.css" />    (一定不能写成"./css/xxx.css")
  那么浏览器就会使用 127.0.0.1:300/css/about.css对server来发送css样式请求
   
*/


//3 ROUTES
//一个网页地址的Routes (endpoints)，例如 / , /about
 app.get('/welcome',(req,res,next)=>{
    
    console.log('req',req);
    res.send('<h1> Welcome Ironhackers!!!! </h1>');
 });

 app.get('/about',(req,res,next)=>{
     res.send('<h1>About Page</h1>');
 })

 app.get('/',(req,res,next)=>{
    res.sendFile(__dirname + '/public/views/index.html')
    
})





//4 SET LISTENER
app.listen(3000,()=>{
    console.log('Server is running at port 3000')
})