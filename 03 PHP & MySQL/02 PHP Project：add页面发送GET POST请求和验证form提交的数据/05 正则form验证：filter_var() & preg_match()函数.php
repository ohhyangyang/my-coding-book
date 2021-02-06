<!--
- regular expression 正则
    见JS
- filter_var()函数通过指定的过滤器过滤变量
    如果成功，则返回已过滤的数据，如果失败，则返回 false。

    语法 filter_var(variable, filter, options)
        variable	必需。规定要过滤的变量。
        filter	   可选。规定要使用的过滤器的ID。
        options	规定包含标志/选项的数组。检查每个过滤器可能的标志和选项。

- preg_match()用于进行正则表达式匹配，
   语法 preg_match( string pattern, string subject [, array matches ] )
       pattern	正则表达式
       subject	需要匹配检索的对象
       matches	可选，存储匹配结果的数组， 
           $matches[0] 将包含与整个模式匹配的文本，
           $matches[1] 将包含与第一个捕获的括号中的子模式所匹配的文本，以此类推
     成功返回 1 ，否则返回 0 
-->



<?php


//通过设置form的action属性，将数据发送到这里，以下开始验证数据
if(isset($_GET['submit'])){

   //check email
   if(empty($_GET['email'])){
      echo "An email is required <br/>";
   } else {
      $email = $_GET['email'];
      
      //正则验证email
      if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
         echo 'email must be a valid email address' . '<br/>';
      }
   }

   //check title
   if(empty($_GET['title'])){
      echo "A title is required <br/>";
   } else {
      $title = $_GET['title'];

      //正则验证title，只能为字母或空格
      /*

      ^x 以x开头
      x+ x出现至少一次
      x$ 以x结尾
      a-zA-z 所有字母
      \s 空白字符

      */

      if(!preg_match('/^[a-zA-z\s]+$/', $title) ){
         echo 'must be letters and spaces only' . '<br/>';
      }
   }

   //check ingredients
   if(empty($_GET['ingredients'])){
      echo "At least one ingredient is required <br/>";
   } else {
      $ingredients = $_GET['ingredients'];

      //正则验证ingredients   
      /*
      
      ^x 以x开头
      x+ x出现至少一次
      x$ 以x结尾
      a-zA-z 所有字母
      \s 空白字符
      x* 0个或多个x
      
      大括号用来分组
      */
      if(!preg_match('/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/',$ingredients)){
         echo 'ingredients must be a comma separated list';
      }
   }


}


?>



<!DOCTYPE html>
<html>

    <?php include('templates/header.php'); ?>

    <section class="container grey-text"></section>
       <h4 class="center">Add a Pizza</h4>
       <form  class="white" action="05 正则form验证：filter_var() & preg_match()函数.php" method="GET">
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