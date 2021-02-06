/*
[Delete Operations删除]

⚠️公司里的数据是最值钱的，数据库中的数据一般都不会删除，因此删除的方法都很少调用
  一般会在数据中添加一个isDel字段，来表示数据是否被删除

  例    db.goodluck.insert([             -->添加每个文档时，都会跟随一个isDel字段
              {
                 name:"Yang",
                 isDel:0         -->0表示没删除
              },
              {
                 name:"Albert",
                 isDel:0          -->0表示没删除
              },
              {
                 name:"Bubu",
                 isDel:0          -->0表示没删除
              }
        ]);
        db.goodluck.updateOne({name:"Yang"},{$set{isDel:1}});    -->将idDel值改为1，代表该文档被删除了
        db.goodluck.find({isDel:0});    -->查询时，设置查询isDel为0的文档对象即可，而不要真的去删除数据


- db.collection名.remove({查询条件},{justOne})  删除符合条件的一个或所有文档对象

         默认情况：remove()在默认情况下，当有多个文档符合条件时，会删除多个（功能类似于deleteMany())
                        （若想只删除一个，则需要传递第二个justOne参数）

         参数： 查询条件   和目标文档相关的字段
               justOne (optional)  若第二个参数传递true，则只会删除一个文档对象（相当于deleteOne()) 例3

         ⚠️如果只传递一个空对象作为参数，则会删除集合中的所有文档（但性能和drop()相比略差，因为是一个一个给你删除文档）

         例1      将_id为hello的文档对象删除
         输入     db.goodluck.remove({_id:"hello"});
         终端显示     -->WriteResult({ "nRemoved" : 1 })

         例2      将age为18的两个文档对象删除
         输入     db.goodluck.remove({age:18});
         终端显示     -->WriteResult({ "nRemoved" : 2 })

         例3      删除age为18的两个文档对象中的第一个对象
         输入     db.goodluck.remove({age:18},true);
         终端显示     -->WriteResult({ "nRemoved" : 1 })

         例4      删除goodluck集合中的所有文档
         输入     db.goodluck.remove({});    ⚠️必须加{}
         终端显示     -->WriteResult({ "nRemoved" : 4 })

- db.collection名.deleteOne()

        例    删除name为sarah的第一个文档
        输入  db.users.deleteOne( { name : 'Sarah' } )

- db.collection名.deleteMany()

        例   删除age大于50的所有文档
        输入  db.user.deleteMany( { age : { $gte:50 } } )
      
        例 删除collection中的所有文档 （⚠️⚠️⚠️不要轻易使用）
        输入  db.user.deleteMany( { } )

- db.collection名.drop()  可以删除集合，性能优于remove({}),因为remove({})为逐个删除一个集合中的文档的命令
      drop() method removes the collection from the database. 
      If the collection exists, it will return true , 
      if it doesn't exist, it will return false .
      
- db.dropDatabase()   可以删除数据库    ⚠️⚠️⚠️⚠️小心


 */