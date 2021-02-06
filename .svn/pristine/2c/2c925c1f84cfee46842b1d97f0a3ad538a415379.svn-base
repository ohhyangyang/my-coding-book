/*
- 文件的读取
  1 同步文件读取
  2 异步文件读取
  3 简单文件读取
  4 流式文件读取

1和2和之前的写入方式非常相似，此处不细说
     open-->read-->close

- 简单文件读取
   异步 fs.readFile(path[, options], callback)
   同步 fs.readFileSync(path[, options])
        path 要读取的文件的路径
        options 读取的选项，一般都不写
        callback 回调函数，通过回调函数将读取到的内容返回
            参数 err 错误对象
                 data 读取到的数据，会返回一个buffer的装有二进制的数组
                                  且只能是buffer的类型，因为文件类型多种多样，可能是jpg,音频，视频etc，buffer的通用型更高
*/
var fs=require("fs");

//读取文件
fs.readFile("05yang.jpg",function (err,data) {
    if(!err){
        console.log("文件读取成功！");
        //将data写入到桌面新文件中（相当于复制）
        fs.writeFile("/Users/young/Desktop/06 new yang.jpg",data,function (err) {
            if(!err){
                console.log("文件写入成功！");
            }
        });
    }
});