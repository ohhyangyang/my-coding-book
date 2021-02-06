
 <!-- 
- LOOPS
   - for loop
     方法一：for循环
     
     方法二：foreach()
       foreach 是一种特殊的循环语句，只适用于数组和对象

      语法 foreach ($array as $value) {statement}  循环每个元素值
          foreach ($array as $key =>  $value) { statement } 循环每个键值对
        ⚠️⚠️ $value和$key =>  $value都为可以自行命名的参数

   - while loop
     $i = 0;
    while($i < count($products)){
      echo $products[$i]['name'] . '<br/>';
      $i ++;
    }

- PHP in HTML!!!!!
PHP和HTML的巧妙融合
见下方例子，非常有趣
  



-->

 <?php 
//for
 $ninjas = ['shaun','ryu','yoshi'];
 for($i = 0; $i < count($ninjas); $i++){
   echo $i . $ninjas[$i] . '<br />';
}
/*
类比JS
for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
*/

foreach($ninjas as $ninja){
  echo $ninja . '<br/>';
}
 
$products = [
  ['name' => 'shiny star', 'price' => 20],
  ['name' => 'green shell', 'price' => 10],
  ['name' => 'red shell', 'price' => 15],
  ['name' => 'gold coin', 'price' => 5],
  ['name' => 'lightning bolt', 'price' => 40],
  ['name' => 'banana skin', 'price' => 2]
];
foreach($products as $product){
  echo $product['name'] . ' - ' . $product['price'] . '<br/>';

}

//while
$i = 0;
while($i < count($products)){
  echo $products[$i]['name'] . '<br/>';
  $i ++;
}
 
 ?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loops</title>
</head>
<body>
  <h1>Products</h1>
  <ul>
    <?php foreach($products as $product){ ?>
      <h3> <?php echo $product['name']; ?> </h3>
      <p>¥ <?php echo $product['price']; ?> </p>
    <?php }?>
  </ul>
</body>
</html>


