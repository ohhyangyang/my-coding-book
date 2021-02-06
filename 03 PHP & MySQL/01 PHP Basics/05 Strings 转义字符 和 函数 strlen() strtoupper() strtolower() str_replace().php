
<!--
	- 字符串

	  ''与""的区别
	  一般来说，对于纯字符串的处理'单引号'比"双引号"处理速度快；
        单引号：php不会读取里面的变量或转义字符；作为纯字符串处理，读取速度快；
        双引号：php会尝试读取里面的变量或转义字符（即使里面没有），这样读取速度慢；
               ⚠️⚠️ 书写格式为 $name 和 {$name['value']} !!!!!

        "双引号" 就相当于JS中的`左上角小点点`

	- 字符串并置运算符 . （相当于JS中的+）

	- 转义字符  （和JS非常类似）
	   " \n " ==>换行               
       " \r "==>回车           
       " \t "==>水平制表符   相当于tab，8个空格    
       " \\ "==> 反斜杠
       " \$ " ==>美元符号    
       " \' "==>单引号     
       " \" " ==>双引号 
       "\[0-7]{1,3}"   正则表达式匹配一个八进制符号表示的字符
       "\x[0-9A-Fa-f]{1,2}"正则表达式匹配一个十六进制符号表示的字符

    - index查询string （和JS语法非常相似）

      语法 $string[index];

    - strlen()函数   （相当于JS的length属性)
      strlen()函数返回字符串的长度（字节数）

    - strtoupper()函数
      strtoupper()函数把字符串转换为大写。

    - strtolower()函数
     strtolower()函数把字符串转换为小写。

    - str_replace()函数
      语法 str_replace('要查找的值','替换的值','搜索的目标'[,计数替换了多少次])

      返回值 带有替换值的字符串或数组。

      ⚠️⚠️ 如果搜索的是数组，那么它将返回数组。
            如果搜索的是数组，那么它将对数组中的每个元素进行查找和替换。
            如果同时需要对数组进行查找和替换，并且需要执行替换的元素少于查找到的元素的数量，那么多余元素将用空字符串进行替换
            如果查找的是数组，而替换的是字符串，那么替代字符串将对所有查找到的值起作用。

      ⚠️⚠️ 该函数区分大小写。请使用 str_ireplace() 函数执行不区分大小写的搜索。

-->
<?php 

  $stringOne = 'my email is';
  $stringTwo = 'holayangge@gmail.com';

  // . 并置运算符
  echo $stringOne . " " . $stringTwo;

  echo '<br>';

  $name = 'Yang';
  echo 'Hey, my name is ' . $name;

  echo '<br>';

  //''和""
  echo 'Hey, my name is $name';//单引号不读取变量
  echo '<br>';

  echo "Hey, my name is $name";//双引号读取变量
  echo '<br>';

  //转义字符
  echo "the Yoshi screamed \"whaaa\"";
  echo '<br>';
  echo 'the Yoshi screamed "whaaa"';//或者直接使用单引号
  echo '<br>';
 
  //index查询string
  echo $name[0];//Y
  echo '<br>';

  //strlen()函数
  echo strlen($stringOne);//11
  echo '<br>';

  //strtoupper()函数
  echo strtoupper($name);//YANG
  echo '<br>';

  //strtolower()函数
  echo strtolower($name);//yang
  echo '<br>';

  //str_replace()函数
  echo str_replace('Y', 'W', $name);
  echo '<br>';

 ?>

 <!DOCTYPE html>
<html>
<body>

<?php
$find = array("Hello","world");
$replace = array("B");
$arr = array("Hello","world","!");
print_r(str_replace($find,$replace,$arr));
?>
  
</body>
</html>

