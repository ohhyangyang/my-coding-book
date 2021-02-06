<?php  
   //打开session
   session_start();
   
   // 也可以over write $_SESSION['name']
   //$_SESSION['name'] = 'yoshi';

   //如果地址栏中查询为noname
   if($_SERVER['QUERY_STRING'] == 'noname'){
             
     //重置($_SESSION['name']
     unset($_SESSION['name']);

     
     
   }

   //提取在 2 Get $_SESSION 中储存的信息，并应用于下方html中
   $name = $_SESSION['name'];

   //⚠️⚠️ 在url地址栏中加入 ?noname 之后页面会报错，因为此时的name已经被unset了
   //⚠️⚠️ 下一节讲如何用合并运算符解决问题

   //重置$_SESSION
   //session_unset();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Hello <?php echo htmlspecialchars($name); ?></p>
</body>
</html>