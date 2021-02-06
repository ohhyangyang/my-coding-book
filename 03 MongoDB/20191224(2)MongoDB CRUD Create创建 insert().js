/*
- 数据库的CRUD操作

  create创建 read读取 update更新修改 delete删除

  也可查看mongodb官网的文档的教程 https://docs.mongodb.com/manual/tutorial/insert-documents/


[Create Operation 创建]

- db.collection名.insert({文档对象1},{文档对象2}...)   插入一个或多个文档对象
                   参数  一个或多个文档对象

         例1     向yang数据库的info的集合中插入一个文档 {name:"Yang",age:18,gender:"girl"}
         输入    db.info.insert({name:"Yang",age:18,gender:"girl"});回车
         终端显示     --> WriteResult({ "nInserted" : 1 })     代表newinserted一个文档

         例2     向yang数据库的info的集合中插入两个文档 {name:"Yang",age:18,gender:"girl"}{name:"Albert",age:32,gender:"male"}
         输入    db.info.insert([
                     {name:"ma",age:18,gender:"female"},
                     {name:"bubu",age:30,gender:"female"}
                ]);
         终端显示     --> WriteResult({ "nInserted" : 1 })     代表newinserted一个文档

- db.collection名.insertOne({文档对象})  插入一个文档对象（必须传一个对象）（3.2以下版本的mongodb不支持）（语义更清晰）

- db.collection名.insertMany([{文档对象1},{文档对象2}...])  插入多个文档对象（必须传数组）（3.2以下版本的mongodb不支持）（语义更清晰）








 */