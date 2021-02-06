<!--
- 保存用户数据至数据库
  ⚠️⚠️ 此页面接上一章PHP Project的add a pizza页面的结果

  STEP1 连接ninja_pizza数据库（直接include()调用config中的connect.php文件）
  STEP2 为了保护数据库，mysqli_real_escape_string()重写用户数据变量
  STEP3 写INSERT语句来描述要插入的数据
  STEP4 使用mysqli_query()函数插入数据至数据库并验证是否错误

- connect.php
  为了不重复书写代码，创建了config文件夹和connect.php来连接数据库

- INSERT语句 插入数据
   语法
     INSERT INTO   table_name
     VALUES   (value1, value2,....)
   或
     INSERT INTO   table_name (column1, column2,...)
     VALUES   (value1, value2,....)

- mysqli_real_escape_string()函数 转义在 SQL 语句中使用的字符串中的特殊字符
  ⚠️⚠️⚠️mysqli_real_escape_string()防止对数据库攻击
         htmlspecialchars()防止对浏览器攻击

   语法 mysqli_real_escape_string($connection,要转义的变量或字符串)



- mysqli_error($connect)函数
   返回最近调用函数的最后一个错误描述


-->



<?php
//引用connect.php连接数据库
include('config/db_connect.php');

$errors = array('email'=>'','title'=>'','ingredients'=>'');
$email = $title = $ingredients = '';



//通过设置form的action属性，将数据发送到这里，以下开始验证数据
if(isset($_GET['submit'])){

   //check email
   if(empty($_GET['email'])){
      $errors['email'] = "An email is required <br/>";
   } else {
      $email = $_GET['email'];
      
      //正则验证email
      if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
         $errors['email'] = 'Must be a valid email address' . '<br/>';
      }
   }

   //check title
   if(empty($_GET['title'])){
      $errors['title'] = "A title is required <br/>";
   } else {
      $title = $_GET['title'];

      //正则验证title，只能为字母或空格
      if(!preg_match('/^[a-zA-z\s]+$/', $title) ){
         $errors['title'] = 'Must be letters and spaces only' . '<br/>';
      }
   }

   //check ingredients
   if(empty($_GET['ingredients'])){
      $errors['ingredients'] = "At least one ingredient is required <br/>";
   } else {
      $ingredients = $_GET['ingredients'];

      //正则验证ingredients   
      if(!preg_match('/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/',$ingredients)){
         $errors['ingredients'] = 'Must be a comma separated list';
      }
   }
   
   //处理验证结果
   /*
   ⚠️⚠️
   array_filter()依次过滤$errors数组中的键值，
   如果数据有error，键值则不全为空，删除所有false键值后则最终不返回空数组，为true，
   如果数据没有error，键值全为空，删除所有false键值后则最终返回空数组，为false
   */
   if(array_filter($errors)){
      //如有errors，则只向用户提示错误，不做更多处理
      //echo "errors in the form";

   } else {
      //⚠️⚠️⚠️此处为终于获得了正确数据！！！！

      //重写无害于数据库的$email $title $ingrdients变量
      $email = mysqli_real_escape_string($connect,$_GET['email']);
      $title = mysqli_real_escape_string($connect,$_GET['title']);
      $ingredients = mysqli_real_escape_string($connect,$_GET['ingredients']);

      //创建sql语句，分别为title email ingredients列添加新数据（必须先被正则验证过，才可以存入数据库）
      $sql = "INSERT INTO pizzas(title,email,ingredients) VALUES('$title','$$email','$ingredients')";
      
      //保存用户数据至数据库并验证
      if(mysqli_query($connect,$sql)){
         //success, 若没有errors，则跳转页面至index
         header('location: index.php');
      }else{
         //error，返回错误
         echo 'query error' . mysqli_error($connect);
      }




      

   }
}


?>




<!DOCTYPE html>
<html>

    <?php include('templates/header.php'); ?>
    
    <section class="container grey-text"></section>
       <h4 class="center">Add a Pizza</h4>
       <form  class="white" action="add.php" method="GET">
       <!--<form  class="white" action="add.php" method="POST">-->
           <label>Your Email:</label>
           <input type="text" name="email" value="<?php echo htmlspecialchars($email);?>">
           <div class="red-text"><?php echo $errors['email']; ?></div>
           <label>Pizza Title:</label>
           <input type="text" name="title" value="<?php echo htmlspecialchars($title);?>">
           <div class="red-text"><?php echo $errors['title']; ?></div>
           <label>Ingredients (comma separated):</label>
           <input type="text" name="ingredients" value="<?php echo htmlspecialchars($ingredients);?>">
           <div class="red-text"><?php echo $errors['ingredients']; ?></div>
           <div class="center">
              <input type="submit" name="submit" value="submit" class="btn brand z-depth-0">
           </div>
       </form>

	<?php include('templates/footer.php'); ?>
   

</html>