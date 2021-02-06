/*
  Document的方法
  Document对象是Model的实例
  document的方法需要通过使用Model的find方法返回的doc结果来结合使用

- doc.save([options],[callback]) 保存文档
  （功能类似Model对象.create())

- doc.update(doc,options,callback)  修改文档对象

- doc.remove([callback])  删除文档对象

以下方法不常用
- doc.get(属性名)  获取文档中的指定属性值

- doc.set(name,value) 设定文档的指定属性值
  ⚠️⚠️使用doc.save()后，才会将修改添加到数据库

- doc.id或doc._id 获取文档的_id

- toJSON() 将Document转换为一个JSON对象   (....什么破方法，不好用）
- toObject() 将Document转换为一个普通JS对象  (....什么破方法，不好用）
           ⚠️转换后，所有Document的方法就都不能使用了


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

//创建一个Document
/*var stu=new StuModel({
    name:"gegege",
    age:18,
    gender:"female",
    address: "Canada"
});
console.log(stu);*/
//此时该文档并没有添加到数据库中

//保存文档
/*stu.save(function (err) {
    if(!err){
        console.log("保存成功");
    }
})*/

//查询并修改文档
StuModel.findOne({name:"gegege"},function (err,doc) {
    /*if(!err){
        doc.update({$set:{address:"xxx"}},function (err) {
        if(!err){
            console.log("修改成功");
            }
        });
    }*/
    doc.address="Dalian";
    doc.save();
})

//删除文档
/*StuModel.findOne({name:"Lap"},function (err,doc) {
    if(!err){
        doc.remove(function (err) {
        if(!err){
            console.log("Lap再见");
            }

        })
    }

})*/

//获取文档中指定属性值
StuModel.findById("5e08c033aaa6c4eb74cd7a59",function (err,doc) {
    if(!err){
        console.log(doc.get("name"));//等于console.log(doc.name);

        doc.set("name","小屁屁")//等于doc.name="小屁屁"

        console.log(doc);
        doc.save();
        var o=doc.toObject({ getters: true });
        console.log(o._id);
    }
})
