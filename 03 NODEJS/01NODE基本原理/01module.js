//定义一个模块
console.log("我是一个01 module模块");

//使用exports向外部暴露属性或方法
var a=200;
exports.x="我是01 module的x变量";
exports.y="我是y";
var z=100;
exports.fn=function(){};