/*
  - $gt 大于
    例： 寻找age大于40的field
    输入  db.user.find( { age: { $gt:40 } } )
    
  - $gte 大于等于
    例： 寻找age大于等于40的field
    输入  db.user.find( { age: { $gte:40 } } )

  - $lt 小于
    例： 寻找age小于40的field
    输入  db.user.find( { age: { $lt:40 } } )

  - $lte 小于等于
    例： 寻找age小于等于40的field
    输入  db.user.find( { age: { $lte:40 } } )

  - $ne 不等于
    例： 寻找age不等于40的field
    输入  db.user.find( { age: { $ne:40 } } )
  
  - $nor 
    例： 寻找name不等于anna，age不等于40的field
    输入  db.user.find(
              { $nor: [ {name:"Anna"} , {age:40}] }
           )
  - $exists
    例    寻找拥有a字段的文档
    输入  db.records.find( { a: { $exists: true } } )

    例    寻找没有a字段的文档
    输入  db.records.find( { a: { $exists: false } } )


  
 */