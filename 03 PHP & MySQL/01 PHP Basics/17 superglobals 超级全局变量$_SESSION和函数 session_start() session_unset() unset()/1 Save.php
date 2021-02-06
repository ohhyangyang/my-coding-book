<!-- 
    - <form name="name"  action="<php echo $_SERVER['PHP_SELF']; ?>" method="POST">
      代表将表格数据提交至当前文件


    - $_SESSION
        $_SESSION变量用于存储有关用户session的信息，或更改用户session的设置。
        $_SESSION变量储存单一用户的，并且可供应用程序中的所有页面使用。

        $_SESSION不会像$_COOKIE一样在用户计算机上存储数据，
        ⚠️⚠️而是在加载不同页面之间的两次请求之间将数据存储在服务器上，例如：submit forms，go to new page

        它通过在服务器上存储用户信息以便随后使用（比如用户名称、购买商品等）。
        可以使用session和session变量来跟踪数据，直到关闭该网页

        session是临时的，在用户离开网站后将被删除。
        如果您需要永久存储信息，可以把数据存储在数据库中。
        
        也可以over write $_SESSION['name']


    - session_start()
      在您把用户信息存储到 PHP session 中之前，首先必须启动会话。
          ⚠️⚠️ session_start() 函数必须位于 <html> 标签之前：

    - session_unset() 释放所有的session变量

    - unset(变量)
       unset() 函数用于销毁给定的变量。

    
-->
<?php
  //echo $_SERVER['REQUEST_METHOD']

  if(isset($_POST['submit'])){
  //当点击submit时
      
      // 打开session
      session_start();

      // 提交信息同时，储存该信息至$_SESSION
      $_SESSION['name'] = $_POST['name'];

      
      // 并跳转至其他页面
      header('Location:2 Get.php');

  }

?>

<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <form name="name"  action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <input type="text" name="name">
        <input type="submit" name="submit" value="submit">
    </form> 
</body>
</html>