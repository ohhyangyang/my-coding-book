/*
[Read Operation 读取]

- db.collection名.find({名值对1,名值对2...},{projection})  查询一个或多个文档对象

     ⚠️⚠️⚠️ query ID时，必须使用ObjectId("5e0213da8ce544d38a10372a")
              参数:  当不传条件参数时，则查询集合中所有的文档对象（可写成 find() 或 find({}) )

                    名值对（一个或多个）(optional)  查询含有指定名值对的文档对象（一个或多个）
                           查询操作符
                             {num:{$gt:数值}}   相当于">" greater than   练习19
                             {num:{$eq:数值}}  相当于"="  equal than  练习18
                             {num:{$lt:数值}}  相当于"<"  less than  练习20
                             {&or: [{a: XXX}, {b: XXX}]} 满足a或者b的条件  练习29
                             更多查询操作符  https://docs.mongodb.com/manual/reference/operator/query/

                    projection   (optional)      控制如何返回查询结果

             ⚠️返回值为一个数组，可以通过 "数组[索引].属性名" 来查询其中一个文档对象中的具体值

             ⚠️在开发时，绝对不会执行不带条件的查询

         例1      查找goodluck集合中的所有文档
         输入      db.goodluck.find();
         终端显示    -->{ "_id" : ObjectId("5e0213da8ce544d38a10372a"), "name" : "Yang", "age" : 30, "gender" : "female" }
                       { "_id" : ObjectId("5e0214118ce544d38a10372b"), "name" : "Albert", "age" : 32, "gender" : "male" }
                       { "_id" : ObjectId("5e0219318ce544d38a103730"), "name" : "ma", "age" : 18, "gender" : "female" }
                       { "_id" : ObjectId("5e0219318ce544d38a103731"), "name" : "bubu", "age" : 30, "gender" : "female" }
                       { "_id" : "hello", "name" : "suika", "age" : 30, "gender" : "female" }

         例2      查询goodluck集合中_id为hello的文档
         输入      db.goodluck.find({_id:"hello"});
         终端显示     -->{ "_id" : "hello", "name" : "suika", "age" : 30, "gender" : "female" }

         例3      查询goodluck集合中age为30,gender为female的文档
         输入      db.goodluck.find({age:30,gender:"female"});
         终端显示     -->{ "_id" : ObjectId("5e0213da8ce544d38a10372a"), "name" : "Yang", "age" : 30, "gender" : "female" }
                        { "_id" : ObjectId("5e0219318ce544d38a103731"), "name" : "bubu", "age" : 30, "gender" : "female" }
                        { "_id" : "hello", "name" : "suika", "age" : 30, "gender" : "female" }
         例4      查询集合中name为anna以及age为30的field
         输入      db.user.find(
                      {  $and: [{name:"Anna"}  ,  {age:30}]  }
                  )
         例5       查询集合中name为anna或者age为30的field
          输入        db.user.find(
                      {  $or: [{name:"Anna"}  ,  {age:30}]  }
                  )
         例6      
         输入       db.users.find(
                     {
                       $and:[
                          {$or: [{age:30} , {age:40}]},
                          {$or: [{name:"Anna"} , {name:"Marco"}]},
                       ]
                     }
                    )
          例7      查询nested field
          输入     db.employees.find({"phone.ext":"2143"}) ⚠️⚠️⚠️ 必须加引号！！！
          https://docs.mongodb.com/manual/tutorial/query-embedded-documents/#query-on-nested-field


- db.collection名.findOne({名值对1,名值对2...},{projection})  查询集合中符合条件的第一个文档对象
                    用法和find()类似
                    ⚠️返回值为一个对象，可通过 "对象.属性名" 来查询该对象的具体值

         例      查询goodluck集合中age为30,gender为female的第一个文档对象
         输入     db.goodluck.findOne({age:30,gender:"female"});
         终端显示     -->{ "_id" : ObjectId("5e0213da8ce544d38a10372a"), "name" : "Yang", "age" : 30, "gender" : "female" }

- db.collection名.find().count() 统计一个集合中的文档数
 */