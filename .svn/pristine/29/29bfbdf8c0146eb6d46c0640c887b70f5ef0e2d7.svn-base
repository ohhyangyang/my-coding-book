/*
简单文件写入
- 异步fs.writeFile(file, data[, options], callback)
- 同步fs.writeFileSync(file, data[, options])

       file 要操作文件的路径
       data 要写入的数据
       options 选项，可以对写入进行一些设置，一般省略不写(optional)
             encoding 指定编码 默认值: 'utf8'。
             mode 指定权限 默认值: 0o666
             flag 操作文件的形式 传递一个带{flag:"操作形式"}的对象。默认值: 'w'。
                  'r' - 只读。如果文件不存在，则出现异常。    -->常用
                   w  可写, 如果不存在则创建，如果存在则截断    -->常用
                   a  追加, 如果不存在则创建    -->常用
                  'r+' - 打开文件用于读取和写入。如果文件不存在，则出现异常。
                  rs  在同步模式下打开文件用于读取
                  rs+  在同步模式下打开文件用于读写
                  wx  打开文件用于写操作, 如果 存在 则打开失败
                  w+  打开文件用于读写，如果不存在则创建 如果存在则截断
                  wx+  打开文件用于读写, 如果 存在 则打开失败
                  ax  打开文件用于追加, 如果路径存在则失败
                  a+  打开文件进行读取和追加, 如果不存在则创建该文件
                  ax+  打开文件进行读取和追加，如果路径存在则失败
       callback 写入完成后执行的函数
             参数 err 错误对象
 */
var fs=require("fs");

//异步文件写入的简单版本
fs.writeFile("03hello easywrite.txt","通过writeFile写入的内容",{flag:"a"},function (err) {
    if(!err){
        console.log("写入成功！");
    }else{
        console.log(err);
    }
})

//同步的同理

// 为其他位置写入文件，在桌面（/Users/young/Desktop）上创建hello文件
fs.writeFile("/Users/young/Desktop/hello.txt","通过writeFile写入的内容",{flag:"a"},function (err) {
    if(!err){
        console.log("写入成功！");
    }else{
        console.log(err);
    }
});
/*
⚠️⚠️若写入的相对路径如 c:\Users|yang\Desktop\hello.txt （Windows系统）
     \ 作为string要写成："c:\\Users|\yang\\Desktop\\hello.txt"
     或可改写成："c:/Users/yang/Desktop/hello.txt"
 */
