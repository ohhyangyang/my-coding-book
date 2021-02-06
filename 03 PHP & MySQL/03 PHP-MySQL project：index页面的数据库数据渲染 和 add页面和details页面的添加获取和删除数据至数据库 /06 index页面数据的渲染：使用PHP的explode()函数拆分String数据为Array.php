<!--
- PHP explode()函数
    explode() 函数把字符串打散为数组。
    语法
       explode(separator,string,limit)
   
      参数	      描述
      separator	 规定在哪里分割字符串。
      string	   要分割的字符串。
      limit	     可选。规定所返回的数组元素的数目。
                       可能的值：
                        大于 0 - 返回包含最多 limit 个元素的数组
                        小于 0 - 返回包含除了最后的 -limit 个元素以外的所有元素的数组
                        0 - 返回包含一个元素的数组

-->
<?php

    //连接yang_pizza database
    $connect = mysqli_connect('localhost','yang','056104687','yang_pizza');
    
    //验证连接是否成功，如果成功，$conn为true，失败返回false
    if(!$connect){
        echo 'Connection error' . mysqli_connect_error();
        //失败后会出现waring
    }

    //1 写SQL语句 (pizzas为table表格)
        //选择pizzas表格中的所有列
        //$sql = 'SELECT * FROM pizzas'; 

        //选择pizzas表格中的title, ingredients, id列
        $sql = 'SELECT title, ingredients, id FROM pizzas';
    
    //2 查询数据库 & 获得结果
         //通过$sql语句来查询数据库
         $result = mysqli_query($connect,$sql);
    
    //3 获取结果中的所有行，并产生关联数组
        $pizzas = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
    // 释放结果内存。（不一定要做，只是为了练习)
        mysqli_free_result($result);

    // 关闭数据库连接（不一定要做，只是为了练习)
        mysqli_close($connect);

    //4 打印数组
        //print_r($pizzas);
        /*
        打印结果
          Array ( [0] => Array ( [title] => yang supreme [ingredients] => tomato, cheese, chicken [id] => 1 ) 
                  [1] => Array ( [title] => mario supreme [ingredients] => tomato, cheese, mushroom [id] => 2 ) )
        */

    
    
    
    

?>
 <!DOCTYPE html>
 <html>
    <?php include('templates/header.php'); ?>
    <h4 class="center grey-text">Pizzas!</h4>
    <div class="container">
      <div class="row">

        <?php foreach($pizzas as $pizza){ ?>

          <!-- grid system -->
          <div class="col s4 md3">
            <div class="card z-depth-0">
              <div class="card-content center">
                <h6><?php echo htmlspecialchars($pizza['title']); ?></h6>
                <ul>
                  <?php foreach(explode(',',$pizza['ingredients']) as $ingredient){ ?>
                    <li><?php echo htmlspecialchars($ingredient); ?></li>
                  <?php } ?>
                </ul>
              </div>

              
              <div class="card-action right-align">
                <a href="#" class="brand-text">more info</a>
              </div>
            </div>
          </div>

        <?php } ?>
      
      </div>
    </div>
	<?php include('templates/footer.php'); ?>
   

 </html>