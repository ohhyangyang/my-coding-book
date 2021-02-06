<!--
- array_filter()函数
  array_filter()用一个callbacl函数过滤数组中的值。
  输入数组中的每个键值给callback函数。
  如果callback函数返回 true，则把输入数组中的当前键值返回结果数组中。数组键名保持不变。
  语法
       array_filter(array,callback);
         array	      必需。要过滤的数组。
         callback 	可选。过滤数组的回调函数。
   返回值 过滤后的数组
   ⚠️⚠️ 如下文例子，并没有使用callback函数，
         那么如果没有提供callback函数，将删除array中所有等值为FALSE的元素。
         如果最终数组删除为空，则返回false

- header()函数
   用于向客户端发送原始的HTTP报头 （和expressjs中的setheader()类似，都是要遵守HTTP协议)
   形式种类繁多
   此次使用了location来重定向网页到01 header & footer.php


接下来开始学习MySQL，从而学习如何去处理这些用户数据
-->



<?php



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
   ⚠️⚠️⚠️
   array_filter()依次过滤$errors数组中的键值，
   如果数据有error，键值则不全为空，删除所有false键值后则最终不返回空数组，为true，
   如果数据没有error，键值全为空，删除所有false键值后则最终返回空数组，为false
   */
   if(array_filter($errors)){
      //如有errors，则只向用户提示错误，不做更多处理
      //echo "errors in the form";

   } else {
      //⚠️⚠️⚠️此处为终于获得了正确数据！！！！

      
      //若没有errors，则跳转页面
      //echo "form is valid";
      header('location: 01 header & footer.php');

   }
}


?>




<!DOCTYPE html>
<html>

    <?php include('templates/header.php'); ?>
    
    <section class="container grey-text"></section>
       <h4 class="center">Add a Pizza</h4>
       <form  class="white" action="07 验证$errors&重定向：array_filter()和header().php" method="GET">
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