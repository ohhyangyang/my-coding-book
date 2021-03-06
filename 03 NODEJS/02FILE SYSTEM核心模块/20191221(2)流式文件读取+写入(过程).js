/*
- 流式文件读取
  适用于大文件，可以分多次将文件读取到内存中

- 流式文件读取+写入的流程：（复杂）
  1 创建一个可读流
    fs.createReadStream(path[, options])
    创建一个可写流
    fs.createWriteStream(path[, options])
  2 监听ws可写流和rs可读流

  3 为可读流绑定data事件，以读取可读流数据，
    rs.on("data",callback)
        callback 回调函数，读取的结果会通过data回调参数返回
             参数 data 读取到的数据
    并通过读callback将取到的data写入到ws可写流中
    ws.write(data);
    ⚠️读取完毕后会自动关闭流
    ⚠️每次只会读取65536个字节，避免一次性占用大量的内存空间，
      因此光读取不够，还要把它写入另一个文件中

  3plus版 第三步可以简略，通过pipe()直接将可读流中的内容输出到可写流中
    ⚠️pipe()会自动关闭流
    （具体见下一页笔记）

  4 在rs可读流的close监听流中设定ws可写流的关闭
    即在数据读取完毕后，就关闭可写流！！


 */
var fs=require("fs");

//创建一个可读流
var rs=fs.createReadStream("05yang.jpg");
//创建一个可写流
var ws=fs.createWriteStream("06newyang.jpg");

//给rs可读流和ws可写流绑定open和close事件，设置监听流的开启和关闭
rs.once("open",function () {
    console.log("可读流打开了～～");
});
rs.once("close",function () {
    console.log("可读流关闭了～～");
    //⚠️数据读取完毕后，关闭可写流！！
    ws.end();
});
ws.once("open",function () {
    console.log("可写流打开了～～");
});
ws.once("close",function () {
    console.log("可写流关闭了～～");
});

//读取可读流rs的数据，需要为可读流绑定一个data事件，它会自动开始读取数据，⚠️读取完毕后会自动关闭可读流
rs.on("data",function (data) {
    console.log(data);
    //得到的结果为若干组buffer数据，需要把它们导入到一个另一个文件中！！！
    //将读取到的数据写入到ws可写流中
    ws.write(data);
});