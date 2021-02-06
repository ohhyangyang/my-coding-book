 <!--
  - PHP变量 $name
   变量规则：
     变量以 $ 符号开始，后面跟着变量的名称
       变量名必须以字母或者下划线字符开始
       变量名只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）
       变量名不能包含空格
       变量名是区分大小写的（$y 和 $Y 是两个不同的变量）

   - PHP常量 NAME
      使用define()函数来定义常量
      语法 define("常量名","常量值"[,大小写是否敏感])
          ⚠️⚠️ 通常常量名为全大写，且无需加$
          ⚠️⚠️ true  大小写不敏感
               false  大小写敏感（默认值）
-->

<?php 
  //变量
  $name = 'Yoshi';
  $age = 30;

  $name = 'Mario';
  
  //常量
  define('CITY','Barcelona');
  //⚠️ CITY只能被赋予一个值，不能重新定义，不然会报错

 ?>

 <!DOCTYPE html>
 <html>
 <head>
  <title>variables & constants</title>
 </head>
 <body>
   <h1>User Profile Page</h1>
   <div><?php echo $name; ?></div>
   <div><?php echo $age; ?></div>
   <div><?php echo CITY ?></div>
  
 </body>
 </html>

<!--
      ⚠️⚠️⚠️
      常量在定义后，默认是全局变量，可以在整个运行的脚本的任何地方使用。
      在函数内使用常量，即便常量定义在函数外也可以正常使用常量!!!!!!

       
 -->
 <?php
        define("GREETING", "欢迎访问 Runoob.com");
 
        function myTest() {
             echo GREETING;
        }
 
      myTest();    // 输出 "欢迎访问 Runoob.com"
      ?>
 

