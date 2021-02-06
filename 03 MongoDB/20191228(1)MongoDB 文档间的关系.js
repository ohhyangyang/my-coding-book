/*
文档之间的关系类型

⚠️一个文档用{}
⚠️不同文档之间的用[{},{}]

 - one to one 一对一
    例1  丈夫--妻子

       在MongogDB中，可以通过内嵌文档的形式来体现出一对一的关系

          db.wifeAndHusband.insert([     -->添加两个一对一文档
             {
               name:"黄蓉",
               husband:{name:"郭靖"}
             },
             {
               name:"潘金莲",
               husband:{name:"西门庆"}
              }
          ]);
    
    例2  1user-- 1address
         ->user collection
           {
               "_id":ObjectId("1234567")
               "name":"Willy",
               "lastName":"Doe",
               "email":"xxx@gmail.com"
               "phone:1234567",
               "address":ObjectId("abcdefg")
           }
         ->adrress collection
           {
               "_id": ObjectId("abcdefg")
               "street":"123 Street",
               "city":"Faketon",
               "state":"MA",
               "zip":"12345",
               "user":ObjectId("1234567")
           }  

 - one to many 一对多（或叫many to one 多对一） ⚠️用得最多
     例1  父母--孩子
         用户--订单
         文章--评论

         也可以通过内嵌文档映射
         db.users.insert([           -->在users集合中添加swk和zbj用户
               {username:"swk"},
               {username:"zbj"}
         ]);
         db.orders.insert({           -->在orders集合中添加swk的订单，通过swk的_id与之关联
             list:["苹果","香蕉","大鸭梨"]
             user_id:ObjectId("5e06fa39c0296b197d223f68")
         });
         db.orders.insert({           -->在orders集合中添加swk的订单，通过swk的_id与之关联
             list:["西瓜","水蜜桃"],
             user_id:ObjectId("5e06fa39c0296b197d223f68")
         });
         db.orders.insert({           -->在orders集合中添加zbj的订单，通过zbj的_id与之关联
             list:["榴莲","山竹","火龙果"],
             user_id:ObjectId("5e06fa39c0296b197d223f69")
         });

         var swkId=db.users.findOne({username:"swk"})._id;         -->在users集合中查询swk的_id
         (或者输入var swkId=db.users.find({username:"swk"})[0]._id;）
         db.orders.find({user_id:swkId});        -->在orders集合中通过swk的_id查询他的订单
    
    例2 1user - 2addresses
 - many to many 多对多
     例  分类--商品
         老师--学生

         db.teachers.insert([        -->在teachers集合中添加Tommy Alice Chloe老师
              {name:"Tommy"},
              {name:"Alice"},
              {name:"Chloe"}
         ]);
         db.students.insert([        -->在students集合中添加小明和小红，并通过老师的_id与他们的老师们相关联
              {
                  name:"小明",
                  teachers_id:[
                       ObjectId("5e07047cc0296b197d223f6d"),
                       ObjectId("5e07047cc0296b197d223f6e")
                  ]
              },
              {
                  name:"小红",
                  teachers_id:[
                       ObjectId("5e07047cc0296b197d223f6d"),
                       ObjectId("5e07047cc0296b197d223f6e"),
                       ObjectId("5e07047cc0296b197d223f6f")
                  ]
              }
         ]);
         var ChloeId=db.teachers.findOne({name:"Chloe"})._id;    -->在teachers集合中查询chloe老师的_id
         db.students.find({teachers_id:ChloeId});   -->在students集合中，查询chloe老师的学生


 */
