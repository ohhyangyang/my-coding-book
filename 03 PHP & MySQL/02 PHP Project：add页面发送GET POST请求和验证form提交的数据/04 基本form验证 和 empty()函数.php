<!--

- 最基础的表格验证(后端)  server form validation
   （更复杂的验证就要应用到正则表达式）
   （另外我不太清楚这么做是不是必要，因为前端的正则表达式就已经足够了吧？）

- empty()函数 判断一个变量是否为空
  返回值：
    若变量不存在则返回TRUE
    若变量存在且值为""、0、"0"、NULL、、FALSE、array()、var $var; 以及没有任何属性的对象，则返回TURE
    若变量存在且值不为""、0、"0"、NULL、、FALSE、array()、var $var; 以及没有任何属性的对象，则返回FALSE
-->



<?php


//通过设置form的action属性，将数据发送到这里，以下开始验证数据
if(isset($_GET['submit'])){

   //check email
   if(empty($_GET['email'])){
      echo "An email is required <br/>";
   } else {
      echo htmlspecialchars($_GET['email']);
   }

   //check title
   if(empty($_GET['title'])){
      echo "A title is required <br/>";
   } else {
      echo htmlspecialchars($_GET['title']);
   }

   //check ingredients
   if(empty($_GET['ingredients'])){
      echo "At least one ingredient is required <br/>";
   } else {
      echo htmlspecialchars($_GET['ingredients']);
   }


}


?>



<!DOCTYPE html>
<html>

    <?php include('templates/header.php'); ?>

    <section class="container grey-text"></section>
       <h4 class="center">Add a Pizza</h4>
       <form  class="white" action="04 基本form验证 和 empty()函数.php" method="GET">
       <!--<form  class="white" action="add.php" method="POST">-->
           <label>Your Email:</label>
           <input type="text" name="email">
           <label>Pizza Title:</label>
           <input type="text" name="title">
           <label>Ingredients (comma separated):</label>
           <input type="text" name="ingredients">
           <div class="center">
              <input type="submit" name="submit" value="submit" class="btn brand z-depth-0">
           </div>
       </form>

	<?php include('templates/footer.php'); ?>
   

</html>