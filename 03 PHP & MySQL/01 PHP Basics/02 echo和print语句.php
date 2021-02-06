 <!-- 
   echo和print语句

  - echo语句
    echo可以输出一个或多个字符串
    echo使用的时候可以不用加括号，也可以加上括号： echo 或 echo()。

    语法 echo 字符串;

    ⚠️⚠️ ;在PHP的语法中非常重要，不添加会出错
    
    举例
         echo "<h2>PHP 很有趣!</h2>";
         echo "Hello world!<br>";
         echo "我要学 PHP!<br>";
         echo "这是一个", "字符串，", "使用了", "多个", "参数。";

  - print语句
    print只允许输出一个字符串，返回值总为1
    print 同样是一个语言结构，可以使用括号，也可以不使用括号： print 或 print()。

  - echo 和 print 区别:
     echo - 可以输出一个或多个字符串
     print - 只允许输出一个字符串，返回值总为1

    语法 print 字符串;

   提示：echo输出的速度比print快， 
         echo没有返回值，print有返回值1。
 -->
<?php 
  echo 'hello PHP';

  //echo字符串
  echo "<h2>PHP 很有趣!</h2>";
  echo "Hello world!<br>";
  echo "我要学 PHP!<br>";
  echo "这是一个", "字符串，", "使用了", "多个", "参数。";
  
  echo "<br>";
  echo "<br>";

  //echo变量
  $txt1="学习 PHP";
  $txt2="RUNOOB.COM";
  $cars=array("Volvo","BMW","Toyota");
 
  echo $txt1;
  echo "<br>";
  echo "在 $txt2 学习 PHP ";
  echo "<br>";
  echo "我车的品牌是 {$cars[0]}";

  echo "<br>";
  echo "<br>";

  //print字符串
  print "<h2>PHP 很有趣!</h2>";
  print "Hello world!<br>";
  print "我要学习 PHP!";

  echo '<br>';
  echo '<br>';

  //print变量
  $txt1="学习 PHP";
  $txt2="RUNOOB.COM";
  $cars=array("Volvo","BMW","Toyota");
 
  print $txt1;
  print "<br>";
  print "在 $txt2 学习 PHP ";
  print "<br>";
  print "我车的品牌是 {$cars[0]}";

 ?>


