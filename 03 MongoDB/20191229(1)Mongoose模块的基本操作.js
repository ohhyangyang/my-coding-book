/*
- 之前学习，我们是通过shell来完成对数据库的操作
  而在开发中，大部分时候，我们需要通过程序来完成对数据库的操作
  而Mongoose就是一个可以通过Node来操作MongoDB的模块

- Mongoose
  Mongoose是一个对象文档模型库 (Object Document Model)
  它对Node原生的MongoDB进行了进一步的优化封装，并提供了更多功能
  （原生的MongoDB模块是非常麻烦的）

- Mongoose的优点
  1 为文档创建一个模式结构的约束(Schema)，对文档模式进行验证
  2 数据类型如果不匹配，可以自动类型转换为对象模型
  3 可以使用中间件来使数据库和业务逻辑结合到一起
  4 比Node原生的MongDB模块操作更简单

- Mongoose的新对象
  1 Schema 模式对象
        定义约束了数据库中的文档结构
  2 Model 模型对象
        相当于MongoDB数据库中中的集合collection
  3 Document 文档对象
        表示集合中的具体文档

- 下载安装Mongoose，并连接mongDB（可参考NPM的使用的章节）
 下载Mongoose
   1 打开terminal，进入项目文件夹
   2 先给创建一个package.json
   3 输入 npm i mongoose回车
   
 引入Mongoose，连接MongDB
   4 在项目中引入mongoose模块
     var mongoose = require("mongoose");
   5 连接MongoDB数据库
     输入mongoose.connect('mongodb://数据库ip地址:端口号/数据库名', {useNewUrlParser: true,useUnifiedTopology: true});
     例 mongoose.connect('mongodb://localhost:27017/yang_test', {useNewUrlParser: true,useUnifiedTopology: true});
     (Mongoose时常更新，连接的方法时有更新，可参考官网http://mongoosejs.com）
   6 断开数据库连接
     mongoose.disconnect()
     （⚠️MongoDB为非关系型数据库，和java等的关系型数据库不同，没有事物控制，
     一般只需要连接一次，连接一次后，除非项目停止服务器关闭，否则一般不会断开）

- 监听MongoDB数据库的连接状态 -->connection属性
    mongoose对象有一个属性叫connection，该对象代表着数据库的连接，
    可以对connection上的一些事件进行监听，来获悉数据库的连接与断开
      mongoose.connection.once("open",function () {});   -->监听数据库连接
      mongoose.connection.once("close",function () {});   -->监听数据库断开

- 创建Schema对象和Model对象
  1 连接到数据库后，将构造函数mongoose.Schemma赋值给一个变量（optional）
       var Schema = mongoose.Schema;
  2 创建Schema 制定模式对象规则
       var xxxSchema = new Schema({     -->或者如果不执行1的话可直接写new mongoose.Schema
           字段名1:数据类型,          -->⚠️数据类型首字母大写
           字段名2:数据类型,
           字段名3:{                 -->如果配置的条件为多个，则可以传一个对象
               type:String,         -->或者可以用Number，不建议使用Boolean，因为只可以有两个选项，为开发的长远考虑的话，不建议
               default:"female"     -->可设置默认值，即使不设置，会默认显示的值
               ...
           },
           address:String
       })
  3 依照Schema规则,创建Model  -->Model代表数据库中的集合collection
       var XxxModel = mongoose.model(modelName, xxxSchema);    -->⚠️ XxxModel为构造函数，所以需要首字母大写
               参数  modelName  要创建的集合的名字(string)，mongoose会自动将modelName变复数
                    xxxSchema  使用的schema对象
  4 向model中插入一个文档
       XxxModel.create({doc},function(err){});
               参数  {doc}   要插入的文档（必须按schema的约束插入）
                     function(err)  回调函数

  ⚠️Schema规则生成Model构造函数，Model创造Entity实例，Model和Entity都可对数据库操作,但Model比Entity可以实现的功能更多
  ⚠️Document对象是Model的实例

*/
//引入Mongoose模块
var mongoose = require("mongoose");

//连接MongDB数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true,useUnifiedTopology: true});

//监听MongoDB连接的事件
mongoose.connection.once("open",function () {
    console.log("MongoDB连接成功～");
});

//监听MongoDB断开的事件
mongoose.connection.once("close",function () {
    console.log("MongoDB断开成功～");
});

//断开MongoDB连接（一般不使用）
//mongoose.disconnect()

//将mongoose.Schemma赋值给一个变量（optional）
var Schema = mongoose.Schema;

//如何创建Schema 模式对象
var stuSchema = new Schema({
    name:String,
    age:Number,
    gender:{                  //如果配置的条件为多个，可以传一个对象
        type:String,          //或者可以用Number，不建议使用Boolean，因为只可以有两个选项，为开发的长远考虑的话，不建议
        default:"female"      //默认值设置为female
    },
    address:String
})

//通过Schema创建model  -->代表集合collection
var StuModel = mongoose.model("student",stuSchema);
//数据库中创建了students集合，因为mongoose会自动将集合名变成复数

//向数据库中插入文档

StuModel.create({
    name:"Yang",
    age:18,
    gender:"female",
    address:"Barcelona"
},function (err) {
    if(!err){
        console.log(("插入成功"));
    }
});

StuModel.create({
    name:"Bubu",
    age:18,
    address:"Barcelona"  //不写gender也会默认显示female
},function (err) {
    if(!err){
        console.log(("插入成功"));
    }
});