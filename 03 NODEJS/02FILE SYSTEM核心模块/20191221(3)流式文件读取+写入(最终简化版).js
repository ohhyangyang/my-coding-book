/*
- 流式文件读取+写入的流程：（最终的简化版）
  1 创建一个可读流
    var rs=fs.createReadStream(path[, options])
  2 创建一个可写流
    var ws=fs.createWriteStream(path[, options])
  3 通过pipe()将可读流输出到可写流中
    rs.pipe(ws);
    ⚠️pipe()会在结束后自动关闭流
 */
var fs=require("fs");

//创建一个可读流
var rs=fs.createReadStream("05yang.jpg");
//创建一个可写流
var ws=fs.createWriteStream("07newnewyang.jpg");

//将可读流输出到可写流中
rs.pipe(ws);
