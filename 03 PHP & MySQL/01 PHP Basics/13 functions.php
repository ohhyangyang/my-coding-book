<!--
- functions
  其他特性和JS几乎一样

  ⚠️⚠️⚠️⚠️
  PHP的函数可以给参数添加默认值
     function sayHi($param = 'aaa'){...}
     sayHi(); ==> ...aaa...
     sayHi('bbb'); ==> ...bbb...

  
-->

<?php 

function sayHelloOne($name){
  echo "googd morning $name";
}

sayHelloOne('yoshi');
echo '<br/>';

//⚠️⚠️给函数的参数添加默认值
function sayHelloTwo($name = 'shaun',$time = 'morning'){
  echo "googd $time $name";
}
sayHelloTwo();
echo '<br/>';
sayHelloTwo('yoshi','night');
echo '<br/>';

//传递复杂参数
function formatProduct($product){
  return "{$product['name']} costs \${$product['price']} to buy :)<br/>";
}
$formatted = formatProduct(['name' => 'gold star','price' => 20]);
echo $formatted;



?>

