<!--
 - mysqli_fetch_assoc()函数
       从结果集中取得一行作为关联数组。

 - date()
    PHP date() 函数可把时间戳格式化为可读性更好的日期和时间
    语法 date(format,timestamp)
         format	必需。规定时间戳的格式。
         timestamp	可选。规定时间戳。默认是当前时间和日期。
-->

<?php 
//连接数据库
include('config/db_connect.php');

//⚠️⚠️⚠️ 通过点击index页面的more info, 通过href的URL传递了当前pizza对应的id，使用该ID通过SELECT语句查询到对应的pizza信息

if(isset($_GET['id'])){
  //⚠️⚠️ 在index页面点击more info，相当于向服务器发送了带有id参数的GET请求，所以可以通过验证 isset($_GET['id']) 来检测是否点击了more info


    //过滤并获取从index页面传递进来的id
    $id = mysqli_real_escape_string($connect,$_GET['id']);

    //写SELECT语句，选择目标id对应的结果
    $sql = "SELECT * FROM pizzas WHERE id = $id";

    //获取查询结果
    $result = mysqli_query($connect,$sql);

    //从结果集中取得一行作为关联数组。通过id获得了该pizza
    $pizza = mysqli_fetch_assoc($result);
    
    // 释放结果内存。
    mysqli_free_result($result);

    // 关闭数据库连接
    mysqli_close($connect);

    //print_r($pizza);
    
}

?>

<!DOCTYPE html>
<html lang="en">
  <?php include('templates/header.php'); ?>
  <div class="container center">
  
  <!-- 通过上方php代码获得了id对应的pizza，首先验证是否存在这个$pizza，存在则渲染至页面 -->
    <?php if($pizza): ?>
      <h4><?php echo htmlspecialchars($pizza['title']); ?></h4>
      <p>Created by: <?php echo htmlspecialchars($pizza['email']); ?></p>
      <p><?php echo date($pizza['created_at']); ?></p>
      <h5>Ingredients</h5>
      <p><?php echo htmlspecialchars($pizza['ingredients']); ?></p>
    <?php else: ?>
      <h5>No such piiza exists.</h5>
    <?php endif; ?>
  </div>
  <?php include('templates/footer.php'); ?>
</html>