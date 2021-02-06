//18 查询numbers中num为500的文档
db.numbers.find({num:500});//区别：查询的可以是包含500的一个num数组

db.numbers.find({num:{$eq:500}});//区别：num不可以是数组，只可以是500，但一般用 num:500 就可以了
//⚠️$eq️相当于️"="

//19 查询numbers中num大于5000的文档
db.numbers.find({num:{$gt:500}});
//⚠️$gt相当于">"

//20 查询numbers中num小于30的文档
db.numbers.find({num:{$lt:30}});
//⚠️$lt相当于"<"

//21 查询numbers中num大于40小于50的文档
db.numbers.find({num:{$gt:40,$lt:50}});
//⚠️$之间用 , 连接

//22 查询numbers中num大于19996的文档
db.numbers.find({num:{$gt:19996}});

//23 查看numbers集合中的前10条数据
db.numbers.find().limit(10);
//⚠️不是所有文档都有num这个属性,limit()可以设置显示数据的上限️
//⚠️在开发时，我们绝对不会执行不带条件的查询

//24 查看numbers集合中的第11～20条数值
db.numbers.find().skip(10).limit(10);
db.numbers.find().limit(10).skip(10);//和上面功能相同
//⚠️skip()用于跳过指定数量的数据

//25 查看numbers集合中的第21～30条数值
db.numbers.find().skip(20).limit(10);
db.numbers.find().limit(10).skip(20);//和上面功能相同


