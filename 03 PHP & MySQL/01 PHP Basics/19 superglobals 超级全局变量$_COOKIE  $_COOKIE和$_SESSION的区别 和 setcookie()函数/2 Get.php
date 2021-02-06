<!--


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
   //⚠️⚠️ 如果没有设置session name，则赋值Guest
   $name = $_SESSION['name'] ?? 'Guest';

   //重置$_SESSION
   //session_unset();

   //get cookie from 1 save.php
   //⚠️⚠️ 如果没有设置cookie gender则赋值unknown
   $gender = $_COOKIE['gender'] ?? 'Unknown';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <span>Hello <?php echo htmlspecialchars($name); ?></span>
    <span>(<?php echo htmlspecialchars($gender); ?>)</span>
</body>
</html>