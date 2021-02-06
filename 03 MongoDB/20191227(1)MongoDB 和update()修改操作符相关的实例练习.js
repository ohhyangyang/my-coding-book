
//1 进入yang_test数据库
use yang_test;
//2 向数据库的user集合中插入一个文档
db.user.insert({username:"Yang"});
//3 查询user集合中的文档
db.user.find();
//4 向数据库的user集合中插入一个文档
db.user.insert({username:"Albert"});
//5 查询数据库的user集合中的文档
db.user.find();
//6 统计数据库的user集合中的文档数量
db.user.find().count();  //2
//7 查询数据库user集合中username为Yang的文档
db.user.find({username:"Yang"});
//8 向数据库user集合中username为Yang的文档中，添加一个address属性，属性值为Barcelona
db.user.update({username:"Yang"},{$set:{address:"Barcelona"}});
//9 使用{username:"Bubu"}替换username为Albert的文档
db.user.update({username:"Albert"},{username:"Bubu"});
//10 删除username为Yang的文档的address属性
db.user.update({username:"Yang"},{$unset:{address:"Barcelona"}});

//11 向username为Yang的文档中，添加一个hobby:{cities:["beijing","shanghai","shenzhen"] , movies:["sanguo","hero"]}
db.user.update({username:"Yang"},{$set:{hobby:{cities:["beijing","shanghai","shenzhen"] , movies:["sanguo","hero"]}}});
//⚠️MongoDB的文档的字段的值也可以是一个文档，我们称其为内嵌文档

//12 向username为Bubu的文档中，添加一个hobby:{movies:["A Chinese Odyssey","King of comedy"]}
db.user.update({username:"Bubu"},{$set:{hobby:{movies:["A Chinese Odyssey","King of comedy"]}}});

//13 查询喜欢电影hero的文档
db.user.find({"hobby.movies":"hero"});
//⚠️MongoDB支持通过内嵌文档的属性进行查询，可以通过 "字段名1.字段名2":"值" 的形式来匹配

//14 向Bubu中添加一个新电影Interstellar
db.user.update({username:"Bubu"},{$addToSet:{"hobby.movies":"interstellar"}});
//⚠️{$push:{数列中增加的元素}} 用来向数列中添加新的元素，即使数组中有该元素，仍会添加
//⚠️{$addToSet:{数列中增加的元素}}  向数组中添加一个新元素，如数组中已经存在了此元素，则不添加

//15 删除喜欢北京的用户
db.user.remove({"hobby.cities":"beijing"});

//16 删除user集合
db.user.drop();   //优于db.user.remove({});

//17 向numers中插入20000条数据
//方法一 （推荐）
var arr=[];
for(var i=1;i<=20000;i++){
    arr.push({num:i});
}
db.numbers.insert(arr);
db.numbers.find().count();
//方法二 （不推荐，执行了20000次的insert，又慢又性能差）
for(var i=1;i<=20000;i++){
    db.numbers.insert({num:i});
}

