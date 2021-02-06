/*
  Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作,但Model比Entity可以实现的功能更多

  Model的增删改查   -->collection

⚠️⚠️带[]的参数均为optional，且callback均为err回调函数
- 增
   Model对象.create(docs,[callback])  -->创建一个或多个文档并添加到数据库中（⚠️Model为构造函数）
   参数： docs 一个文档对象，或一个文档对象的数组
         [callback]   err回调函数，也可以返回添加了的文件，用来查看结果

- 查
  Model对象.find(conditions,[projection],[options],callback)
                                      -->查询所有符合条件的文档，总会返回一个数组⚠️⚠️
  Model对象.findById(id,[projection],[options],[callback])
                                               -->根据id属性查询文档
  Model对象.findOne([conditions],[projection],[options],callback)
                                                -->查询符合条件的第一个文档

   参数： conditions    查询的条件{}
         [projection]    结果中获取到的字段
                             两种表达方式  例 {name:1,_id:0}或者"name -_id"
         [options]    查询选项   例 {skip:1,limit:2}

         function (err,doc(s))   err回调函数，返回查询结果，⚠️必须传此函数，不传没结果
                                 ⚠️⚠️大部分返回的结果为doc对象的数组，只有findOne()返回的是一个具体doc对象

- 改
  Model对象.update(conditions,doc,[options],[callback] -->修改一个或多个文档对象
  Model对象.updateMany(conditions,doc,[options],[callback] -->修改多个文档对象
  Model对象.updateOne(conditions,doc,[options],[callback] -->修改一个文档对象
    参数：conditions  查询的条件{}
         [doc]    修改后的对象
         [options]  配置参数
         [callback]  err回调函数
  Model对象.replaceOne(conditions,doc,[options],[callback])-->替换一个文档对象

- 删  一般都不会使用删除命令！
  Model对象.remove(conditions,[callback])
  Model对象.deleteOne(conditions,[callback])
  Model对象.deleteMany(conditions,[callback])

- 统计
  Model对象.count(conditions,callback) 统计集合中文档数量
         参数： conditions 传空{}，则代表所有的文档
               callback  含有err和count两个参数，count代表返回的统计结果

  ⚠️count()和"通过find()查找文档数组的length"相比，性能更好



 */
var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.once("open",function () {
    console.log("数据库连接成功");
});
var Schema=mongoose.Schema;
var stuSchema=new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"secret"
    },
    address:String
});
var StuModel = mongoose.model("student",stuSchema);

//创建文档
StuModel.create(
    {
        name:"Albert",
        age:32,
        gender:"male",
        address:"Barcelona"
    },
    {
        name:"Lap",
        age:27,
        gender:"male",
        address: "HongKong"
    },function (err) {
    if(!err){
        console.log("插入成功～～");
    }
});

//查询文档
StuModel.find({name:"Albert"},function (err,docs) {
    if(!err){
        console.log(docs);
        console.log(docs[0].name);
    }
})
StuModel.find({},{name:1,_id:0},{skip:1,limit:2},function (err,docs) {
    if(!err){
        console.log(docs);
console.log(docs[0].name);
}
})
StuModel.find({name:"Albert"},"name -_id",function (err,docs) {
    if(!err){
        console.log(docs);
    }
})
StuModel.findById("5e085d5413db4e31e5d9ddd1",function (err,doc) {
    if(!err){
        console.log(doc);
        console.log(doc instanceof StuModel);//true,证明Document对象是Model的实例

    }
})

//修改文档
StuModel.updateOne({name:"Yang"},{$set:{age:30}},function (err) {
    if(!err){
        console.log("修改成功～～");
    }
})

//删除文档
StuModel.deleteMany({name:"Bubu"},function (err) {
    console.log("删除成功");
})

//统计文档数量
StuModel.countDocuments({},function (err,count) {
    if(!err){
        console.log(count);//3
    }
})
StuModel.countDocuments({},function(err,count){
    if(!err){
        console.log(count);
    }
})
StuModel.remove();