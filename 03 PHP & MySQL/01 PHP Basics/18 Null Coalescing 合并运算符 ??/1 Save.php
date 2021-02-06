<!-- 

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