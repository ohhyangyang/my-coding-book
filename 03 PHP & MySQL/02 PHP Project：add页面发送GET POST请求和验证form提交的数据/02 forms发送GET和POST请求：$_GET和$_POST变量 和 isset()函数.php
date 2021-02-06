<!--

- WEB部分
  GET & POST请求
    GET sends the data in the URL
    POST sends the data in the request header (hidden in URL) 更安全

  <form>
    method 发送请求的方式
    action 表示当提交表单到server时，server的地址（例如以下例子是将数据发回到当前位置的PHP中）



- server部分

  $_GET 和 $_POST 变量
    在PHP中，预定义的$_GET和$_POST变量(关联数组类型)用于收集来自 method="GET"和 method="POST"的表单中的值。
    ⚠️⚠️⚠️ 表单域的name属性值会自动成为 $_GET 数组中的键

    通过GET发送数据，当用户点击submit按钮时，填写的数据会通过URL被传递，传递到其表单action属性对应的服务器位置，
    并在server通过$_GET变量来接收数据

    通过POST发送数据，当用户点击submit按钮时，填写的数据会通过请求体被传递，传递到其表单action属性对应的服务器位置，
    并在server通过$_POST变量来接收数据

  isset()函数
    用于检测变量是否设置。并且不是NULL
    返回值：
      若变量不存在则返回FALSE      
      若变量存在且其值为NULL，也返回FALSE
      若变量存在且值不为NULL，则返回TURE
    ⚠️⚠️ 如果一次传入多个参数，那么isset()只有在全部参数都被设置时返回TRUE，
         中途遇到没有设置的变量时就会立即停止。


-->




<?php
//通过设置form的action属性，将数据发送到这里，以下开始验证数据
if(isset($_GET['submit'])){
  //$_GET 数组中的键为表单内input的name属性值
    echo $_GET['email'];
    echo $_GET['title'];
    echo $_GET['ingredients'];
}

// if(isset($_POST['submit'])){
//     echo $_POST['email'];
//     echo $_POST['title'];
//     echo $_POST['ingredients'];
// }

/*
⚠️⚠️⚠️
当前此$_GET和$_POST数组为关联数组，key分别为各input的name属性值：'email' 'title' 'ingredients' 和 'submit'
当点击submit提交数据至server后，$_GET和$_POST数组中'submit'键会被初始化而产生一个对应的值

所以首先需要检测是否$_GET和$_POST数组中的submit被set了，
如果被设置了，则接着获取数据
*/

?>



<!DOCTYPE html>
<html>
    <?php include('templates/header.php'); ?>

    <section class="container grey-text"></section>
       <h4 class="center">Add a Pizza</h4>
       <form  class="white" action="02 forms发送GET和POST请求：$_GET和$_POST变量 和 isset()函数.php" method="GET">
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