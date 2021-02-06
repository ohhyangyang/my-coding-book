/*
Promise实践，fs读取多个文件，演示Promise如何解决回调地狱
需求：依次按顺序读取resources文件里的三个文件内容，并将三个文件内容合并输出

⚠️⚠️ 该实践用以模拟项目中读取数据库的场景（有递进关系的层级读取），比如：
        读取网站用户，再根据用户读取用户的其他信息：详细信息，订单。。
 */


//引入 fs 模块
const fs = require("fs");


//////fs原始操作//////////////////////////////////////////////////////////////////////
/*
⚠️⚠️ 存在的问题：
      1 data1 data2 data3参数命名容易重名，且不容易发现问题
      2 回调函数无限向前缩进
 */
// //读取为学
// fs.readFile('./Promise_resources/为学.md', (err, data1)=>{
//
//     //读取插秧诗
//     fs.readFile('./Promise_resources/插秧诗.md', (err, data2)=>{
//
//         //读取观书有感
//         fs.readFile('./Promise_resources/观书有感.md', (err, data3)=>{
//
//             let result = data1 + '\r\n' +data2  +'\r\n'+ data3;
//
//             console.log(result);
//         });
//     });
// });

//////使用 promise 实现//////////////////////////////////////////////////////////////////////

//声明一个Promise对象，读取'为学'
const p = new Promise((resolve, reject) => {
    
    //fs读取'为学'到data
    fs.readFile("./Promise_resources/为学.md", (err, data) => {
        
        resolve(data);  //⚠️⚠️改变第一个promise状态为fulfilled，并传递读取的'为学'data给下方的then()的value参数
    });
});

//处理第一个Promise的状态结果
p.then(value => {
    //⚠️⚠️这里为第一个Promise fulfilled状态对应的回调函数，第一个Promise的的'为学'数据传递给了当前value参数
    
    //⚠️⚠️ 第一个Promise返回创建第二个promise对象，读取'插秧诗'
    return new Promise((resolve, reject) => {
        
        //fs读取'插秧诗'到data
        fs.readFile("./Promise_resources/插秧诗.md", (err, data) => {
            
            resolve([value, data]); //⚠️⚠️ 改变第二个promise状态为fulfilled，并传递'为学'value和'插秧诗'data形成的数组给下方的then()的value参数
        });
    });
    
    //处理第二个Promise的状态结果
}).then(value => {
    //⚠️⚠️  这里为第二个Promise fulfilled状态对应的回调函数，第二个Promise的'为学''插秧诗'数组传递给了当前value参数
    
    //⚠️⚠️  第二个Promise返回创建第三个promise对象，读取'观书有感'
    return new Promise((resolve, reject) => {
        
        //fs读取'观书有感'到data
        fs.readFile("./Promise_resources/观书有感.md", (err, data) => {
            
            //⚠️⚠️ 给装有'为学'和'插秧诗'的value数组参数添加元素
            value.push(data);
            
            resolve(value);  //⚠️⚠️ 改变第三个promise状态为fulfilled，并传递'为学''插秧诗''观书有'组成的value数组给下方的then()的value参数
        });
    })
    
    //处理第三个Promise的状态结果
}).then(value => {
    //⚠️⚠️  这里为第三个Promise fulfilled状态对应的回调函数，第三个Promise的'为学''插秧诗''观书有'组成的最终数组传递给了当前value参数
    
    //合并最终value数组，并从控制台输出
    console.log(value.join('\r\n'));
});