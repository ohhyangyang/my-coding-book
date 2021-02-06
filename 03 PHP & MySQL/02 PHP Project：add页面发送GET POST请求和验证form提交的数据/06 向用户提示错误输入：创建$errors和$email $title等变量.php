<!--
- 如何向用户显示错误输入的提示

  <php>
   首先要在php中创建几个变量
   第一 $email $title...变量，用来获取form收集来的 $_GET中对应的值 
   第二 $errors数组变量，分别对应不同的input，用于保存错误提示

   然后通过if语句来验证$email $title是否为空 或 是否符合RegExp，当出现不同类型错误时，需要返回不同的提示，
   并将之传递给$errors数组，从而传递给html的div中
  <html>
    在html中需要在适当位置预留div标签以显示错误提示，div标签内的文本内容由$errors数组控制

- 另外，在点击submit时，在默认情况下，无论用户输入的数据是否正确，input的内容都会立即被清空，会造成极差的用户体验
  如何控制input内容不被清空？

   控制input标签的value属性（表示input的默认值）
   将form收集来的$email $title...的值放入其中
   ⚠️⚠️⚠️ 不要忘记echo用户输入值时使用htmlspecialchars()来过滤恶意代码
   
   ⚠️⚠️⚠️ 必须先预设定$email $title...为 "" ，因为在首次打开页面时，
           在点击submit之前，还并未运行isset()等一系列函数，
           若不预先设定，$email $title...会显示为undefined变量

   ⚠️⚠️⚠️ value="<php echo $email;?>"> 此处必须加"引号"!!!!!
         （我其实不懂为什么，不加引号就出错
           我理解的echo是输出字符串的，为什么外面还要再加引号????）



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
}
?>



<!DOCTYPE html>
<html>

    <?php include('templates/header.php'); ?>
    
    <section class="container grey-text"></section>
       <h4 class="center">Add a Pizza</h4>
       <form  class="white" action="06 向用户提示错误输入：创建$errors和$email $title等变量.php" method="GET">
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