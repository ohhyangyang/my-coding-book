/*
* Node模块函数
  当Node在执行模块中的代码时，它会首先在代码的最顶部添加如下代码：
          function (exports, require, module, __filename, __dirname) {
  在代码最底部添加如下代码
          }
          
  也就是说Node自动把每个js文件都封装到函数里，并且传递进了5个实参：
     1 exports对象 exports对象中封装了要暴露出去的对象，用来将变量或函数暴露到外部
     2 require函数 用来引入外部的模块
     3 module 代表着当前模块本身
              而exports就是module的属性
              因此既可以使用exports，也可以使用module.exports
     4 __filename 代表当前模块的完整路径
               /Users/young/Desktop/web development/NodeJS/test/20191213(2)Module模块化详解.js
     5 __dirname 当前模块所在文件夹的完整路径
               /Users/young/Desktop/web development/NodeJS/test

*global对象
  在node中存在global全局对象，作用类似于网页中的window
     在Node全局中创建的变量都会作为global的属性保存
     在Node全局中创建的函数都会作为global的方法保存

* arguments对象 作为函数中的隐藏的对象存在于每个函数里
  因此arguments.callee则代表了当前模块执行的函数对象，
  （加上""会因为拼串而显示出函数内的内容）

 */

//模块的函数变量和全局的变量
var a=10; //加var为设置当前模块函数的变量（非全局变量）
console.log(global.a);//undefined，因为a不是全局变量

b=20;//不加var设置全局变量（不推荐这么使用）
console.log(global.b);//20，因为b是全局变量
/*
⚠️⚠️⚠️
声明全局变量的方法，
1.函数外声明，加var
2.函数内声明，不加var，并且执行函数
3.函数内声明 window.变量，并且执行函数
 */


//通过arguments.callee可显示出当前的node函数
console.log(arguments.callee+"");//function (exports, require, module, __filename, __dirname) {..}

//exports为module的属性
console.log(exports==module.exports);//true
console.log(typeof module)

//__filename
console.log(__filename);///Users/young/Desktop/web development/NodeJS/test/20191213(2)Module模块化详解.js
console.log(typeof __filename)

//__dirname
console.log(__dirname);///Users/young/Desktop/web development/NodeJS/test