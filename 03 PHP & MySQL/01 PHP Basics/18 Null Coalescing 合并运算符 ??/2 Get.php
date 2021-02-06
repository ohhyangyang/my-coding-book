<!--
- 合并运算符 ??
   是用于执行isset()检测的三元运算的快捷方式。
   NULL 合并运算符会判断变量是否存在且值不为NULL，
   如果是，它就会返回自身的值，否则返回它的第二个操作数。
   
   以前我们这样写三元运算符：
        $site = isset($_GET['site']) ? $_GET['site'] : '菜鸟教程';
   
   现在我们可以直接这样写：
        $site = $_GET['site'] ?? '菜鸟教程'; 

  


-->


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
   /*
    ⚠️如果没有因为noname而被unset，则直接赋值，
      如果被unset了，则赋值为 Guest
    */

   $name = $_SESSION['name'] ?? 'Guest';

 

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