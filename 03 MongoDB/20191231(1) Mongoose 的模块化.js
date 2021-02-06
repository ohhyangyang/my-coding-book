//从tools目录中引入连接mongoDB的模块
require("./tools/connect_mongo");

//定义一个变量，引入Stu模块
var StuModel=require("./models/StuModel");


var bbb=new StuModel({
    name:"hehe",
    age:18,
    address:"mars"
});

bbb.save(function (err) {
    if(!err){
        console.log("保存成功");
    }

})

StuModel.find({},function (err,docs) {
    if(!err){
        console.log(docs);
    }
})