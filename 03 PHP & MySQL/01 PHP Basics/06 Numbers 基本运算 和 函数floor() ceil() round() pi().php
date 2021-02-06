<!--
    NUMBERS

    - Integer 整数
    - Float  小数
    - 基本运算
       + 加
       - 剪
       * 乘
       / 除
       ** 幂
       % 余数

    - 自增自减
      ++
      --
      （规则和JS相同）
    
    - 赋值运算符
      运算符	 等同于
      x = y	    x = y	
      x += y	x = x + y
      x -= y	x = x - y
      x *= y	x = x * y
      x /= y	x = x / y
      x %= y	x = x % y
      a .= b	a = a . b  ⚠️⚠️⚠️

    - floor() 向下舍入为最接近的整数。
    - ceil() 向上舍入为最接近的整数
    - round() 四舍五入
    - pi() 代表完整版的pi值

      总体来说运算法则和JS非常相似
https://www.runoob.com/php/php-operators.html
 -->
 <?php
   $radius = 25;  //integer
   $pi = 3.14;    //float
    
   echo $radius * $pi;
   echo '<br>';

   echo $radius ** 2;
   echo '<br>';

   echo 2 * (4 + 8 ) /3;
   echo '<br>';
   
   echo $radius++;//echo之后才自增
   echo '<br>';

   echo ++$pi;//自增之后才echo
   echo '<br>';

   $age = 10;
   $age += 10;
   echo $age;
   echo '<br>';

   echo floor($pi);//舍掉小数
   echo '<br>';

   echo ceil($pi);//舍掉小数进一
   echo '<br>';

   echo round($pi);//四舍五入
   echo '<br>';

   echo pi();

   
 ?>