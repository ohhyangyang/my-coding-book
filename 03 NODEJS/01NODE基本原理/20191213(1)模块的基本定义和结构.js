/*
*模块化
  在Node中，一个js文件就是一个模块
  且每个js文件中的代码都是独立运行在一个函数中⚠️，在全局中看不到
  所以一个模块中的变量和函数在其他模块中无法访问


*模块引用
  require()函数引入其他js模块
  在Node中，通过require()函数来引入外部的模块
     参数   引入的文件的路径(string)
     返回值 一个代表着引入的模块的对象

  ⚠️如使用相对路径，必须要以.或者..开头，且.js可以省略
    例 require("./02 module.js")或require("./02 module");

*模块定义（见01 module.js)
  创建module
  exports向外部暴露变量，属性和方法
  只需要在模块中将需要向外部暴露的目标设置为exports的属性即可

*模块标识
 模块分成两大类：
   核心模块
       由Node引擎提供的模块
       它的标识就是模块的名字
   文件模块
       由用户自己创建的模块
       它的标识就是文件的路径（绝对路径或相对路径，一般都用相对路径）
       相对路径使用.或..开头

 */

//模块引用：require()引入外部模块
var md=require("./01 module"); //我是一个01 module模块
/*
⚠️ ./代表当前路径
   .js可以省略
 */

//模块定义
console.log(md);//{ x: '我是01 module的x变量', y: '我是y', fn: [Function] }
                //只能访问加了exports的x，y和fn，而无法访问a和z变量

console.log(md.x);//我是01 module的x变量（访问了暴露的x变量）

//模块标识
var fs=require("fs");//Node引擎提供的核心模块
console.log(fs);


/*
math练习:
定义一个math模块，在模块中提供两个方法
add(a,b);  求两个数的和
mul(a,b);  求两个数的乘积
 */
var math=require("./02 math");//用户自己创建的文件模块
var x=math.add(3,4);
var y=math.mul(6,8);
console.log(x);//7
console.log(y);//48

