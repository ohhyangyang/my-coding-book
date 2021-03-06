<!--
- BOOLEAN
    echo true 返回 "1"
    echo false 返回 ""

- 比较运算符
    
  运算符	    名称	      描述	实例
  x == y	   等于	       如果 x 等于 y，则返回 true                 	5==8 返回 false
  x === y	   绝对等于	    如果 x 等于 y，且它们类型相同，则返回 true	   5==="5" 返回 false
  x != y	   不等于	     如果 x 不等于 y，则返回 true	                5!=8 返回 true
  x <> y	   不等于	     如果 x 不等于 y，则返回 true               	5<>8 返回 true
  x !== y	   绝对不等于	  如果 x 不等于 y，或它们类型不相同，则返回 true	5!=="5" 返回 true
  x > y	     大于	       如果 x 大于 y，则返回 true	                  5>8 返回 false
  x < y	     小于	      如果 x 小于 y，则返回 true                  	5<8 返回 true
  x >= y   	大于等于   	如果 x 大于或者等于 y，则返回 true            	5>=8 返回 false
  x <= y	  小于等于	  如果 x 小于或者等于 y，则返回 true            	5<=8 返回 true
-->

<?php 

//boolean比较
echo true;//"1" true
echo"<br/>";

echo false;//"" false
echo"<br/>";

//number比较
echo 5 < 10;//"1" true
echo"<br/>";

echo 5 > 10;//"" false
echo"<br/>";

echo 5 == 10;//"" false
echo"<br/>";

//string比较
echo 'shaun' < 'yoshi';//"1" 因为和JS一样会比较他们首字母的Unicode
echo"<br/>";

echo 'shaun' > 'Shaun';//"1" 因为小写字母大于大写字母
echo"<br/>";

echo 'mario' == 'Mario';//"" 




?>


