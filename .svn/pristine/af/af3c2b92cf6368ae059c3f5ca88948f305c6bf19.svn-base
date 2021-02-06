/*
异步文件的写入
   1 打开或创建文件
     fs.open(path, flags[, mode], callback)
          path 要打开文件的路径
          flags 打开文件要做的操作的类型
               "r" 只读的  -->打开文件用于读取。如果文件不存在，则出现异常。
               "w" 可写的  -->打开文件用于写入。如果文件不存在则创建文件，如果文件已存在则截断文件。
          mode 设置文件的操作权限，一般不传（optional）
          callback 回调函数
               参数 err 错误对象，如果没有错误则为null
                    fd 文件描述符
          返回值 undefined，统一通过callback返回
   2 向文件中写入内容
     fs.write(fd, string[, position[, encoding]], callback)
          fd 要写入的文件的描述符
          string 要写入的内容
          position 写入的起始位置，一般不传（optional）
          encoding 要写入的编码，默认值为 'utf-8'，一般不传（optional）
          callback 回调函数
               参数 err 错误对象，如果没有错误则为null
                   written 被写入了多少字节（optional）
                   string 写入的内容（optional）
                   （⚠️参数都可以通过arguments查看）
   3 保存文件并关闭
     fs.close(fd, callback)
          fd 要关闭的文件的描述符
     ⚠️⚠️关闭文件这一步在服务器中是很有必要的，如果同时开启很多个文件，会占用内存空间，影响性能

异步IO(Input/Output)的代码执行顺序:
1 引入fs模块
2 执行fs的open方法，并将之交给后台的IO线程池，由IO线程池来进行打开文件的操作
3 执行open后面的一系列代码
4 最后再执行open中的回调函数

⚠️异步虽然写起来更复杂，但使用上无阻塞，且逻辑上考虑的更完备
*/
//引入fs模块
var fs=require("fs");

//创建文件
fs.open("02hello async.txt","w",function(err,fd) {
    console.log("我是回调函数")
    if(!err){
        //如果open的参数没出错，则对该文件进行写入
        fs.write(fd,"通过异步写入的内容",function(err){
            if(!err){
                console.log("异步写入成功");
            }

            //关闭文件
            fs.close(fd,function(err){
                if(!err){
                    console.log("文件已关闭");
                }
            });
        });
    }else{
        console.log(err);
    }
});

console.log("我是open后面的函数")