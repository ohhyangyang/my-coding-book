/*
- MongoDB基本概念
   document --> collection --> database --> database server（课件的图解）

   database server 数据库服务器
        我们之前安装的就是mongodb的数据库服务器（和客户端）
        一个数据库服务器中可以存放多个数据库

   database 数据库
        数据库是一个仓库，在仓库中可以存放集合。

   collection 集合
        集合类似于数组，集合中可以存放文档

   document 文档
        文档是数据可中的最小单位，我们存储和操作的都是文档

   field  代表文档中的一个键值对

   在MongoDB中，数据库和集合都不需要手动创建，当我们创建文档时，如果文档所在的集合和数据库不存在，会自动创建数据库和集合

- 基本指令
    "show dbs (show databases)"     显示所有的数据库
          admin   0.000GB
          config  0.000GB
          local   0.000GB
    "use 数据库名"       进入到指定的数据库中
          使用use时，如果该数据库存在，则会进入到相应的数据库中，
          如果不存在，则会自动创建该数据库，且直到存入文档后，才会真正创建该数据库
    "db"     表示当前所处在的数据库
    "db.createCollection("xxx")"   创建collection
    "show collections"     显示所在数据库中所有的集合
    

- _id  文档的唯一标识
  当我们向集合中插入文档时，如果没有给文档指定_id属性，数据库则会自动为文档添加（根据时间戳和机器码的计算来获得）
  （另外每调一次ObjectId()就会生成一个_id）

  如果不喜欢自动添加的_id，也可以自己指定（不推荐），但必须确保他的唯一性
         例
         输入    db.goodluck.insert({_id:"hello",name:"suika",age:30,gender:"female"});
 */