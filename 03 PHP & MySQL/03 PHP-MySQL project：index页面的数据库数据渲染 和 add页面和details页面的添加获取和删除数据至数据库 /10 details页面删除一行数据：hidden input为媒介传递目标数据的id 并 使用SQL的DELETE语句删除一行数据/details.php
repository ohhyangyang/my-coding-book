<!--

- 删除数据库数据
   STEP1 在下方html中，在要删除的目标数据下方创建一个发送POST请求的 DELETE form，
         请求会发送给当前details.php文件本身
         form中包含一个<input type="hidden">，设置他的value属性为目标数据的id
                  一个<input type="submit">
         通过POST请求，会将带有目标数据id的value属性带入数据库中
   STEP2 在上方PHP中，使用isset()函数检测是否点击了删除键发送了POST请求
   STEP3 如果点击了Delete键，则需首先获取hidden input的ID用于DELETE语句
   
   
   
   会带着目标id给数据库发送删除数据请求


- <input type="hidden">
  "hidden" 类型的 <input> 元素如同一个媒介，允许 Web 开发者存放一些用户不可见、不可改的数据，
  在用户提交表单时，这些数据会一并发送出。
  比如，正被请求或编辑的内容的ID，
       或是一个唯一的安全令牌。
  这些隐藏的 <input>元素在渲染完成的页面中完全不可见，而且没有方法可以使它重新变为可见。
  ⚠️⚠️⚠️ 在练习中是为了传递$pizza['id']数据给数据库而存在的

- DELETE语句 
   DELETE FROM 语句用于从数据库表中删除记录。
   语法
      DELETE FROM   table_name
      WHERE         some_column = some_value     
-->

<?php 
//连接数据库
include('config/db_connect.php');



//通过下方html传递进来的请求删除的目标数据的id
/*
验证是否点击了name属性为delete的input按钮，并发送了POST请求
*/
if(isset($_POST['delete'])){

  //通过 hidden input的键 id_to_delete，获取所对应的值 => <?php echo $pizza['id']; >
  /*
  ⚠️⚠️ 表单域内input的name属性值会自动成为 $_GET 数组中的key，而value属性值为key的值
  ⚠️⚠️ 使用mysqli_real_escape_string()函数，防止用户篡改idden input的value属性值
  */
  $id_to_delete = mysqli_real_escape_string($connect, $_POST['id_to_delete']);
  
  //写SQL删除语句，删除数据库中id为 <?php echo $pizza['id']; >，也就是 $pizza['id'] 的数据
  /*
  ⚠️⚠️ id_to_delete为 hidden input 的key，而这个key对应的值为<?php echo $pizza['id']; ?>
       因此 id = $id_to_delete，可意为 id = $pizza['id']
  */
  $sql = "DELETE FROM pizzas WHERE id = $id_to_delete";
  
  if(mysqli_query($connect,$sql)){
    //success
    header('Location: index.php');
  }else{
    //failure
    echo 'query error' . mysqli_error($connect);
  }

}


//⚠️⚠️⚠️ 通过点击index页面的more info, 通过href的URL传递了当前pizza对应的id，使用该ID通过SELECT语句查询到对应的pizza信息并渲染

if(isset($_GET['id'])){
  //⚠️⚠️ 在index页面点击more info，相当于向服务器发送了带有id参数的GET请求，所以可以通过验证 isset($_GET['id']) 来检测是否点击了more info


    //过滤并获取id
    $id = mysqli_real_escape_string($connect,$_GET['id']);

    //写SELECT语句，选择目标id对应的结果
    $sql = "SELECT * FROM pizzas WHERE id = $id";

    //获取查询结果
    $result = mysqli_query($connect,$sql);

    //从结果集中取得一行作为关联数组。通过id获得了该pizza
    //⚠️ 获得的$pizza不在函数中，为全局变量
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

  <!-- details -->
  <div class="container center">

  <!-- 通过上方php代码获得了id对应的$pizza，在下面的html首先验证是否存在这个$pizza，存在则渲染至页面 -->
    <?php if($pizza): ?>
      <h4><?php echo htmlspecialchars($pizza['title']); ?></h4>
      <p>Created by: <?php echo htmlspecialchars($pizza['email']); ?></p>
      <p><?php echo date($pizza['created_at']); ?></p>
      <h5>Ingredients</h5>
      <p><?php echo htmlspecialchars($pizza['ingredients']); ?></p>

 <!-- DELETE FORM-->
      <form action="details.php" method="POST">

        <input type="hidden" name="id_to_delete" value="<?php echo $pizza['id']; ?>">
        <!-- 
          ⚠️⚠️ 为了将$pizza['id']传递到上方php中，创建了 hidden input作为看不见的媒介
                将该$pizza的id作为 hidden input 的 value值 传递，而它的key为 id_to_delete
                此处的name和value为一对键值对：
                   id_to_delete: <php echo $pizza['id'];
        -->

        <input type="submit" name='delete' value="Delete" class="btn brand z-depth-0">
      </form>


    <?php else: ?>
      <h5>No such piiza exists.</h5>
    <?php endif; ?>
  </div>

  



  <?php include('templates/footer.php'); ?>
</html>