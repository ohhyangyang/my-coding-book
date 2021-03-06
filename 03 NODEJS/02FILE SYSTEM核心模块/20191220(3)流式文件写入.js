/*
- 前面所学习的写入方式均为一次性的写入文件，即先将全部内容保存在一个buffer里，然后再一次性的写入文件内，
  可类比成水缸倒水：一个装有很大量水（一吨）的水缸，需要把这个水缸全部抱到另一个水缸处，再倒水，很可能抱不起来，也可能会很慢
  因此同步、异步和简单文件写入都不适合大文件，这种方式占内存较大，速度过慢，内存溢出，对性能的损耗也较大
  由此引出流式写入，如同在水缸之间插了一根水管

- 流式文件写入  -->适合大文件
  1 创建ws可写流（插水管）
    fs.createWriteStream(path[, options])
         path 文件路径（和哪个文件连接？）
         options 配置的参数，可省略不写

  2 通过ws向文件输出内容（水传递）
    ws.write(文件内容的字符串)
    ⚠️⚠️可重复使用该命令来增加内容

  3 关闭ws流（拔水管）
    ws.end();   ⚠️拔的是输送端的管子
    (不可以使用ws.close()，因为它拔的是输出端的馆子，可能造成内容还留在管子里，没到达缸里的现象）

  4 监听流（optional）
    ws.once("open",callback);
    ws.once("close",callback);
  而使用once，可以绑定流的open和close事件来监听流的打开和关闭
 （⚠️⚠️用on的话太浪费，用on的话，触发一次以后，事件还在，但是该事件已经不会再发生了）

- 监听事件
   on(事件的字符串,回调函数)  -->可以为对象绑定一个事件，
   once(事件的字符串,回调函数)  -->可以为对象绑定一个一次性事件，⚠️触发一次之后自动失效

 */
var fs=require("fs");

//流式文件写入

//创建可写流（插水管）
var ws=fs.createWriteStream("04hello stream.txt");

//绑定可写流ws的open和close事件来监听流的打开和关闭
ws.once("open",function () {
    console.log("流打开了～～");
});
ws.once("close",function () {
    console.log("流关闭了～～");
});


//通过ws向文件输出内容
ws.write("通过可写流写入");
ws.write("hello");
ws.write("hola");
ws.write("你好");

//关闭流（拔水管）
ws.end();