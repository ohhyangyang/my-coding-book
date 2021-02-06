<!--
- if语句

- 逻辑运算符
  x and y   与    如果 x 和 y 都为 true，则返回 true
  x && y    与
  x or y    或     如果 x 和 y 至少有一个为 true，则返回 true
  x || y    或
  x xor y  抑或    如果 x 和 y 有且仅有一个为 true，则返回 true
  !x       非      如果 x 不为 true，则返回 true
-->

<?php 
  $price = 20;
   if($price<10){
     echo 'if condition met';
   }else if($price < 30){
     echo 'elseif conditon met';
   }else{
     echo '=condition not met';
   }
   echo '<br/>';


   $products = [
		['name' => 'shiny star', 'price' => 20],
		['name' => 'green shell', 'price' => 10],
		['name' => 'red shell', 'price' => 15],
		['name' => 'gold coin', 'price' => 5],
		['name' => 'lightning bolt', 'price' => 40],
		['name' => 'banana skin', 'price' => 2]
  ];
  
  foreach($products as $product){

    if($product['price'] < 15 && $product['price'] > 2){
      echo $product['name'] . '<br/>';
    }

    if($product['price'] > 20 || $product['price'] > 10){
      echo $product['name'] . '<br/>';
    }
  }




?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <ul>
      <?php foreach($products as $product){ ?>
        <?php if($product['price'] > 15){ ?>
          <li><?php echo $product['name']; ?></li>
        <?php } ?>
      <?php } ?>
    </ul>
  </div>
</body>
</html>

