<!-- 
  - ternary operators 三元运算符
      ⚠️⚠️ 主要适用于php，省去了if和endif，为了简化其在html中的写法
    语法   <condition> ? <true value> : <false value>; 
        解释：如果conditon成立，则执行语句“true value”,否则执行“false value”。
  
-->

<?php
  //ternary operators
  $score = 20;
/*$val = $score > 40 ? 'hight score' : 'low score :(';
echo $val;*/
  echo $score > 40 ? 'hight score' : 'low score :(';

?>
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <p><?php echo $score > 40 ? 'hight score' : 'low score :('; ?></p>
</body>
</html>