/*
- 验证路径是否存在
  fs.exists(path callback)  -->已经废弃
  fs.existsSync(path)

- 获取文件信息
  fs.stat(path, callback)
  fs.statSync(path)
    callback 会返回一个对象，封装了当前文件状态的信息
       参数 err
            stat 封装文件信息的对象

    stat.size 文件大小
    stat.isFile() 是否是一个文件
    stat.isDirectory() 是否是一个目录（文件夹）

- 删除文件
  fs.unlink(path, callback)
  fs.unlinkSync(path)

- 读取目录的目录结构
  fs.readdir(path [, options], callback)
  fs.readdirSync(path[, options)
      callback
        参数 err
            files 一个字符串数组，每个元素代表一个文件夹或文件名

- 截断文件  将文件改编为一个指定的字节大小
  fs.truncate(path, len, callback）
  fs.truncateSync(path, len）

- 建立目录
  fs.mkdir(path[, mode], callback)
  fs.mkdirSync(path[, mode])

- 删除目录
  fs.rmdir(path, callback)
  fs.rmdirSync(path)

- 重命名或移动文件和目录
  fs.rename(oldPath, newPath, callback)
  fs.renameSync(oldPath, newPath)
      oldPath 旧的路径
      newPath 新的路径

- 监视文件的更改
  fs.watchFile(filename[, options], listener)
      filename 要监视的文件
      options 配置的选项，一般不写
          参数 internal 可以修改监视文件的时间间隔
      listener 回调函数，当文件发生变化时才会执行
          参数 curr 当前文件的状态（stat对象）
               prev 修改前文件的状态（stat对象）
 */

var fs=require("fs");

var a=fs.existsSync("01hello sync.txt");
console.log(a);//true

fs.stat("01hello sync.txt",function (err,stat) {
    console.log(stat);
    console.log(stat.size);//32
    console.log(stat.isFile());//true
    console.log(stat.isDirectory());//false
});

//fs.unlinkSync("07newnewyang.jpg");

fs.readdir(".",function (err,files) {
    //"."代表当前目录
    if(!err){
        console.log(files);
    }
});

fs.truncateSync("01hello sync.txt", 30);

//fs.mkdirSync("08makedir");

//fs.rmdirSync("08makedir");

fs.rename("05yang.jpg","05beautifulyang.jpg",function (err) {
    if(!err){
        console.log("改名成功！");
    }
});
fs.rename("06newyang.jpg","/Users/young/Desktop/beautifulyang.jpg",function (err) {
    if(!err){
        console.log("移动成功！");
    }
});

fs.watchFile("02hello async.txt",{interval:1000},function (curr,prev) {
    console.log("文件发生了变化！");
    console.log("修改前："+prev.size);
    console.log("修改后："+curr.size);

});