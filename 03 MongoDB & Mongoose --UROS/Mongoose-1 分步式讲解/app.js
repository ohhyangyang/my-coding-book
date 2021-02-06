/*
- Schema --blueprint
  the schemas and queries are written in JS
*/
//1 引入mongoose
const mongoose = require('mongoose');


//2 Connect to the database - 在mongo shell中，类似于 “use 数据库” 关键字
/*
⚠️⚠️
这个mongoose.connect()连接只需要在app.js开启一次，
在其他mongoose只需要输入const mongoose = require('mongoose');即可
*/
mongoose
  .connect(
    'mongodb://localhost:27017/example_mongoose', 
    {useNewUrlParser: true,useUnifiedTopology: true}
    )
    .then((connectionObject)=>{
        console.log('Connected to the database');
    })

//3 创建 collection "cats"
/*
collections in DB will be a assigned Model
⚠️⚠️ 创建model时，需要首字母大写，但是使用在collection时会自动被调成小写
    例如  cats - Cat model
         dogs - Dog model
*/
const Cat = mongoose.model('Cat',
  //SCHEMA BOJECT
  {
      name:String,
      color:String
  }

)

const Dog = mongoose.model('Dog',{name:String , age:Number})

//4 创建一个文档 -- create在mongo shell中类似于insertOne()
//⚠️⚠️⚠️collection不存在就create it，存在就manage it
//⚠️⚠️⚠️创建的文档不一定要拥有schemma中的所有属性
Cat
  .create({name:"Iron Kitty Cat" ,color:"Ironhack blue"})
  .then((createdDocument)=>{
       console.log(createdDocument)
  })
  .catch((error)=>{
      console.log('error');
  })



//5 创建多个文档
const arrayDogs =[
    {name:'daisy',age:1},
    {name:'bella',age:3},
    {name:'sudo',age:6}
]

const dogPromise = Dog.insertMany(arrayDogs);

Promise.all([dogPromise]) //⚠️⚠️监听array中的promise，当全部获得之后，将往下进行
/*
Promise.all() : https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Promise.allSettled() ： https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
Promise.all() 如果数组中的任何一个promise是rejected状态，结果都会是报错
Promise.allSettled() 会返回一组promise的resolved或rejected的返回结果
*/
  .then((result)=>{
      console.log(result) //⚠️⚠️将会在terminal返回一个装载结果的array
  })
  .catch((error)=>{
      console.log(error)
  })



//5 查询文档
Cat.find()
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })

//6 Mongoose connectin events

mongoose.connection.on('connected',()=>{
    console.log('Mongoose connected');
})

mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose disconnected');
})

mongoose.connection.on('error',(error)=>{
    console.log(error);
})

//7 Node events
//在Node断开时会触发SIGHT，提示mongoose安全关闭
/*
原因：在项目中database可能占用很多ports，在Node意外断开时，mongodb很可能无法安全退出port并关闭系统
     使ports始终呈现在占用状态，而无法再次被database连接
*/
process.on('SIGHT',()=>{
    mongoose.connection.close(()=>{
        console.log('Mongoose connection desconnected due to the app termination')
    })
})