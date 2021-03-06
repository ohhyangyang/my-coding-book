/*
exports和module.exports
  通过exports只能通过exports.XXX的方式来向外暴露内部变量
      例 exports.a=XXX;
  而module.exports即可以通过module.exports.XXX，也可以直接赋值
      例 module.exports.a=XXX;
      或 module.exports={a:XXX};
      (如果实在区分不开，就只使用module.exports，肯定不会错）

 */

/*
声明一段可暴露的变量和函数
module.exports.name="yang";
moudle.exports.age=18;
module.exports.sayName=function () {
    console.log("I'm Yang");
};
可统一写成如下：
 */
module.exports={
    name:"yang",
    age:18,
    sayName:function () {
        console.log("I'm Yang");
    }
}
/*
⚠️⚠️⚠️
千万不可以写成如下形式，会报错：
exports={
    name:"yang",
    age:18,
    sayName:function () {
        console.log("I'm Yang");
    }
}
具体原因见图表
 */