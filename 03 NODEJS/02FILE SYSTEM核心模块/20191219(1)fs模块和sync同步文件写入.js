/*
-fs模块 (file system) 文件系统
在Node中，与文件系统的交互是非常重要的，服务器的本质就是将本地的文件发送给远程的客户端
file system简单来说就是通过Node代码来操作系统中的文件

⚠️使用fs，需要先引入fs模块，
  fs是核心模块，直接引入，不需要下载

-同步和异步调用文件系统
同步(sync)：同步文件系统会阻塞程序的执行，除非操作完毕，否则不会向下执行代码
synchronous
异步(async)：异步文件系统不会阻塞程序的执行，在操作完成时，通过回调callback函数将结果返回
asynchronous

-同步文件的写入
   1 打开或创建文件
     fs.openSync(path, flags[, mode])
          path 要打开文件的路径
          flags 打开文件要做的操作的类型
               "r" 只读的  -->打开文件用于读取。如果文件不存在，则出现异常。
               "w" 可写的  -->打开文件用于写入。如果文件不存在则创建文件，如果文件已存在则截断文件。
          mode 设置文件的操作权限，一般不传（optional）
          返回值 表示文件描述符的整数。（不确定的一个数）
   2 向文件中写入内容
     fs.writeSync(fd, string[, position[, encoding]])
          fd 要写入的文件的描述符
          string 要写入的内容
          position 写入的起始位置，一般不传（optional）
          encoding 要写入的编码，默认值为 'utf-8'，一般不传（optional）
   3 保存文件并关闭
     fs.closeSync(fd)
          fd 要关闭的文件的描述符
     ⚠️⚠️关闭文件这一步在服务器中是很有必要的，如果同时开启很多个文件，会占用内存空间，影响性能

 */
//引入fs模块
var fs=require("fs");
console.log(fs);

//打开一个可写入的文件
var fd=fs.openSync("01hello sync.txt","w");
console.log(fd);//21，返回值为一个

//向文件中写入内容
fs.writeSync(fd,"今天天气真不错～～～",2);

//关闭文件
fs.closeSync(fd);