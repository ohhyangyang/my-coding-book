/*
为什么要使用Promise来取代原始方法？
当拥有多个异步任务时，以免陷入回调地狱
 */


//引入 fs 模块//////////////////////////////////////
const fs = require('fs');

//原始方法：调用方法读取文件
// fs.readFile('./Promise_resources/为学.md', (err, data)=>{
//     //如果失败, 则抛出错误
//     if(err) throw err;
//     //如果没有出错, 则输出内容
//     console.log(data.toString());
// });

//使用 Promise方法封装以上原始方法///////////////////////////////
const p = new Promise(function(resolve, reject){
    fs.readFile("./resources/为学.mda", (err, data)=>{
        //判断如果失败，改变p状态为失败
        if(err) reject(err);
        //如果成功，改变p状态为成功
        resolve(data);
    });
});

//调用p的then()函数，根据Promise状态指定回调，
// 成功则调用第一个callback，失败则调用第二个callback
p.then(function(value){
    console.log(value.toString());
}, function(reason){
    console.log("读取失败!!");
});
