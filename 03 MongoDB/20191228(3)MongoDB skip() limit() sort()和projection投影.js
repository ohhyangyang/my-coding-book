/*
- 关于分页 练习23 24 25

  格式： skip((页码-1)x每页显示的条数).limit(每页显示的条数)

     每页显示十条  skip
      1～10       0      limit(10)
      11～20      10     skip(10).limit(10)
      21～30      20     skeip(20).limit(10)
      ...

- skip()用于跳过指定数量的数据
- limit()可以设置显示数据的上限️

- sort()文档排序
    查询文档的结果是按照_id的值升序排列的
    使用sort({排序规则})可以用来指定文档排序的规则
         sort({sal:1})为升序
         sort({sal:-1})为降序
     例1   db.emp.find().sort({sal:1});  -->按照salary升序排列
     例2   db.emp.find().sort({sal:1,empno:-1});  -->按照salary升序排列，如果工资相同的，则按照empno员工号的降序排列

     ⚠️⚠️在MongDB中limit() skip() sort()可以以任意顺序调用

- projection 投影参数
    find()传递的第二个参数
         find({查询条件},{返回结果条件(即投影)})
    可控制查询结果显示哪些部分
     例1  db.emp.find({},{ename:1});   -->显示ename和_id (_id在默认情况下都显示）
     例2  db.emp.find({},{ename:1,_id:0});    -->只显示ename，将_id设为0，代表不显示_id
     例3  db.emp.find({},{ename:1,_id:0,sal:1});    -->显示ename员工名和sal工资


 */

