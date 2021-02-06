/*
Introduction: https://github.com/ross-u/m2-code-alone-jsx-library-app

-Generator准备注意事项
1 通过express generatot创建项目
    在terminal的目标目录下输入 "npx express-generator --no-view 项目目录名称"
2 npm install下载express-generator相关的dependencies
  npm install nodemon  --save-dev 下载nodemon为devDependencies
3 在JSON中设置scripts  "start:dev": "nodemon -e '*' ./bin/www"
4 添加views models文件夹 和相关jsx文件
5 ⚠️⚠️删除public中的index.html 否则会自动捕捉该文件为home开启页面


启动服务器 npm run start:dev

www文件作用：用于建立app，
特点是兼容稳定性强，同时支持ES5 ES6的server


//////////////////////////////////////////////////////////////////////////////////
-

//////////////////////////////////////////////////////////////////////////////////
-开启项目步骤

app.js
1 npm install express-react-views react react-dom
  npm install --save mongoose dotenv
2 引入 dotenv  require('dotenv').config()
  输入隐藏端口位置
    1 npm下载dotenv
    2 在app.js加入 require('dotenv').config()
    3 然后在在根目录添加.env文件并输入  PORT=xxx
3 引入 express-react-view 和 body-parser
4 文件中所有的var改为const 

8 引入 booksRoute
  const bookRouter = require("./routes/booksRouter")

5 DB connection
    const DB_NAME = "xxx"
    mongoose.connect('mongodb://localhost:27017/${DB_NAME}',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false
    })
    .then((x)=>{console.log(x.connections[0].name)}) 
                ⚠️⚠️⚠️x对象中装有所有数据库连接的信息，通过x.connections[0].name可以获得数据库名字
    .catch((error)=>{
      console.log("Error connecting to Mongo",error)
    })

6 设置view engine
    app.set("view",__dirname+"/views");
    app.set("view engine","jsx");
    app.engine("jsx",erv.createEngine());

7 设置middleware
   在原有中间件的基础上添加bodyparser的两个中间件
   // parse application/x-www-form-urlencoded  用于解析req.body中用户发送回的form文件
   app.use(bodyParser.urlencoded({ extended: false })); 

   // parse application/json    用于解析req.body中用户发送回的json文件
   app.use(bodyParser.json());



9 设置routes
  app.use("/".indexRouter)  ⚠️⚠️ 设置主页面
  app.use("/books",usersRouter)  ⚠️⚠️⚠️所有以books开始的routes，都在booksRoute中


/////////////////////////////////////////////////////////////
Layout.jsx
1 const React = require('react);
2 function Layout(props){
    return(
        <html>
        ...
        {props.children}
        ...
        </html>
    )
  }
3 module.exports = Layout

Home.jsx
1 const React = require('react);
  const Layout = require('./Layout)
2 function Home(props){
    return(
        <Layout>
          <h1>Home Page</h1>
        </Layout>
    )
  }
3 module.exports = Home

Books.jsx
1 const React = require('react);
  const Layout = require('./Layout)
2 function Books(props){
    return(
        <Layout>
          <h1>Home Page</h1>
        </Layout>
    )
  }
3 module.exports = Books

/////////////////////////////////////////////////////////////
booksRouter.js
1 const express = require('express')
  const booksRouter = express.Router()

2  ⚠️⚠️⚠️ server会带着带有GET /books/xxx的请求以从上向下的顺序开始过滤routes

   获取GET /books
   booksRouter.get('/' , (req,res,next)=>{
   })

   获取GET /books/add
   booksRouter.get('/add' , (req,res,next)=>{
   })
   
   ⚠️⚠️⚠️ dynamic parameter必须写在相同请求的最下面，不然会截获/books/add的结果
   获取GET /books/1hdsafuoiafuwqerhfasdl
   booksRouter.get('/:bookId' , (req,res,next)=>{
   })

   获取POST /books
   booksRouter.post('/' , (req,res,next)=>{
   })

3 module.exports = booksRouter

/////////////////////////////////////////////////////////////
创建schemas文件夹
Book.model.js  创建book collection
1 const mongoose = require("mongoose")
  const Schema = mongoose.Schema

2 const bookSchema = new Schema(
      {
        title:String,
        description: String,
        rating: Number,
        authors:[
          {
            types: Schema.Types.ObjectId,   //⚠️⚠️⚠️authors设定为ID类型
            ref:"Author"   //⚠️⚠️指定为了 Author collection使用
          }
        ]

        ⚠️⚠️⚠️ 如果植入的数组中有比shcema更多的信息，将会被忽略
      },
      {
        timestamps:{
          createdAt:"created_at",
          updatedAt:"updated_at"
        }
        ⚠️⚠️⚠️ timestamps选项告诉mongoose将createdAt和updateAt字段分配给当前模式。
        https://mongoosejs.com/docs/guide.html#timestamps
        举例：
        insertOne: {
         document: {
         name: 'Jean-Luc Picard',
         ship: 'USS Stargazer'
           // Mongoose will add `created_at` and `updatedAt`
         }
        },
        updateOne: {
         filter: { name: 'Jean-Luc Picard' },
         update: {
           $set: {
             ship: 'USS Enterprise'
             // Mongoose will add `updatedAt`
           }
         }
         }


        
      }
  )

3 const Book = mongoose.model("Book",bookSchema);
4 module.exports = Book

Author.model.js 创建 author collection






/////////////////////////////////////////////////////////////
创建 mock data 和 seed.js
bin/authors-mock-data.js
bin/books-mock-data.js
bin/seed.js


mock文件中有relationship的两个data之间的排列顺序要平行一一对应

bin/seed.js  ⚠️⚠️ 停止terminal 启动 node ./bin/seed.js
                或在scripts中添加字段
const mongoose= require("mongoose")

引入collections
const Book = require('./../models/Book.model)
const Author  = require('./../models/Author.model)

引入mock
const books = require('./books-mock-data)
const authors = require('./authors-mock-data)

const DB_NAME="xxx"

mongoose
   .connect(xxx)
   .then((x)=>{
      const pr = x.connection.dropDatabase()  ⚠️⚠️⚠️为了不重复添加data要先dropdtabase，然后重建

      return pr
    })
    .then(()=>{
      const pr = Author.create(authors);  
      ⚠️⚠️⚠️ 通过authors数组创建documents
      ⚠️⚠️⚠️
      insertmany() returns an array even if you only pass it one document 在当下情况会返回数组！！！
      and create() returns an object, if you only pass it one document 在当下情况会返回数组！！！

      return pr
    })
    .then((createdAuthors)=>{
      console.log(createdAuthors.length)

      ⚠️⚠️⚠️ 建立author文档后，在books数组的每个对象中添加 authors
      const updatedBooks = books.map( (bookObj,i)=>{

        const authorObj = createdAuthors[i];  //获取 bookObj所对应的 authors对象

        bookObj.authors = [ authorObj._id]

        return bookObj
      })

      const pr = Book.create(updatedBooks);

      return pr;

    })
    .then( (createdBook)=>{
      console.log(createdBooks.length)

      mongoose.connection.close()
    })



1 SEED SEQUENCE
   connect to DB

   drop the exsiting database

   create the authors

   create the books

   disconnect






*/