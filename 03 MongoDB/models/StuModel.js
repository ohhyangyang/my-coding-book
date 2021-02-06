/*
定义一个module，来创建一个student的Model（collection）
 */
//引入mongoose模块
var mongoose=require("mongoose");
//赋值Schema到一个变量
var Schema=mongoose.Schema;
//创建一个student的schema
var stuSchema=new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"secret"
    },
    address:String
});

//根据student的schema创建student的Model
var StuModel=mongoose.model("student",stuSchema);

//将StuModel的内容直接赋值给exports对象，⚠️⚠️这样在引用模块时，更简单
module.exports=StuModel;
/*
⚠️⚠️⚠️
如果写成exports.StuModel=StuModel，表示将StuModel对象作为exports对象的一个属性被保存
那么在引用这个模块时还需要通过"var xxx=require("./student模块").StuModel"来获取StuModel对象
 */
