/*
[Update Operation更新修改]

- db.collection名.update({查询旧文档的条件},{新文档增删改部分},{配置选项})   修改或添加或删除一个或多个文档中的指定字段，或替换整个为新对象（兼容性最好）

                   默认情况：update()在默认情况下会使用新文档来替换整个旧文档
                                    默认当查询到多个文档对象时，只会修改第一个文档（功能同updateOne())

                   参数： 查询旧文档的条件  输入和目标文档相关的字段
                         新文档增删改部分  输入要修改的字段部分或要替换的新文档对象

                                           ⚠️如需要只修改文档中的某部分，则需要在新文档中使用"修改操作符"
                                            {$set:{修改或添加的部分}} 可以用来修改文档中的指定属性 例1 2
                                            {$unset:{删除的部分}} 可以用来删除文档中的指定属性 例3
                                            {$push:{数列中增加的元素}} 用来向数列中添加新的元素，即使数组中有该元素，仍会添加 练习14
                                            {$addToSet:{数列中增加的元素}}  向数组中添加一个新元素，如数组中已经存在了此元素，则不添加 练习14
                                            {$inc: {a: XXX}} 相当于"+=XXX"️  {$inc: {a: -XXX}} 相当于"-=XXX"️ 练习33
                                            更多修改操作符  https://docs.mongodb.com/manual/reference/operator/update/


                         配置选项(optional)  其他的相关options
                                     {multi:true} 如想更改多个文档对象，可已传递multi属性 (功能同updateMany()) 例4

         例1      将字段名name为Yang的文档的age修改为18
         输入     db.goodluck.update(
                         {name:"Yang"},
                         {$set:{age:18}}
                  );
         终端显示     -->WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

         例2      在字段名name为Yang的文档中添加address字段
         输入     db.goodluck.update(
                         {name:"Yang"},
                         {$set:{address:"Barcelona"}}
                  );
         终端显示     -->WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

         例3      在字段名name为Yang的文档中删除address字段
         输入     db.goodluck.update(
                         {name:"Yang"},
                         {$unset:{address:XXX}}    ⚠️此处只需输入正确的字段名即可，其值可输入任意值
                  );
         终端显示     -->WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

         例4      在字段名age为18的两个文档中添加address字段
         输入     db.goodluck.update(
                         {age:18},
                         {$set:{address:"barcelona"}},
                         {multi:true}
                  );
         终端显示     -->WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })

- db.collection名.updateMany( queryObj , updateObj )   修改或添加或删除所有指定文档中的指定字段，或替换所有指定文档对象
          
          例1   修改所有的phone为phone常量

          cosnt phone = { personal:"" , work:"" , ext:"+34"}   //先声明phone

          db.users.updateMany(
                 {},
                 { $set: { phone : phone }}       //植入phone
          )

          例2   给所有40岁以下的用户添加whatsappfield

          cosnt phone = { personal:"" , work:"" , ext:"+34"}   //先声明phone

          db.users.updateMany(
                 { age: { $lte: 40 } },
                 { $set: { "phone.whatsapp" : "" }}       //植入phone  ⚠️⚠️ 必须加引号给 phone.whatsapp
          )
- db.collection名.updateOne( queryObj , updateObj )   修改或添加或删除一个指定文档中的指定字段，或替换一个指定文档对象
          例 修改name为anna的field为Anna - updated 1，（⚠️⚠️会修改第一个找到的文档）
          输入   db.users.updateOne(
                  {name:"Anna"} ,
                  {$set: { name:"Anna - updated 1"}}
           )
- db.collection名.replaceOne( queryObj , newObj )  替换一个文档对象
          例 替换name为chris的文档 （⚠️⚠️⚠️ 会替换第一个找到的对象）
          输入  db.user.replaceOne(
                 { name :'Chris' },
                 { species:'Robot' , age:'Unknown' , emotions : false } 
          )
 */