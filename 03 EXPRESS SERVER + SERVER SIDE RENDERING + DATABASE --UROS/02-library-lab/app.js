require("dotenv").config();

const express = require('express');  //用于添加服务器
const path = require('path');   //用于合并path
const cookieParser = require('cookie-parser');  
const mongoose = require('mongoose');   //用于mongoDB数据库
const erv = require('express-react-views'); //用于渲染view引擎
const logger = require('morgan');  //用于中间件logs
const bodyParser = require('body-parser')  //用于中间件解析req.body和json

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const booksRouter = require("./routes/booksRouter")
const authorsRouter = require("./routes/authorsRouter"); 

const app = express();

//创建并连接数据库
const DB_NAME = "library";

mongoose.
   connect(`mongodb://localhost:27017/${DB_NAME}`,{
       useNewUrlParser:true,
       useUnifiedTopology:true,
       useFindAndModify:false
   })
   .then((x)=>{
       console.log(`Connected to DB: ${x.connections[0].name}`)  //⚠️ 是collections
   })
   .catch((error)=>{
       console.log("Error connecting to Mongo",error)
   })

//设置view引擎
app.set("views",__dirname+"/views");
app.set("view engine","jsx");
app.engine("jsx",erv.createEngine());


//Middleware
app.use(logger('dev'));
app.use(express.json()); //⚠️express版本的bodyparser，express其实也是应用了body-parser package
app.use(express.urlencoded({ extended: false })); //⚠️express版本的bodyparser
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//添加bodyparser Middleware 解析body，和express.json() express.urlencoded()同理
app.use(bodyParser.urlencoded({extended:false}));  //⚠️⚠️⚠️解析strings & arrays
app.use(bodyParser.json());  //⚠️解析JSON

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


//Routes
//主页
app.get('/',(req,res,next)=>{
    res.render('Home')
});
//books相关routes设置去bookRoute.js
app.use('/books',booksRouter);
app.use("/authors", authorsRouter); 

module.exports = app;
