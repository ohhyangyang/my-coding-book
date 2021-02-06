<!--
- 处理 more info
   <a href="details.php?id=<php echo $pizza['id'] ?>" class="brand-text">more info</a>
   ⚠️⚠️ 每个pizza的more info都不同，所以需要通过href属性传递id参数至details.php
  
-->
<?php
    //引入连接数据库的php
    include('config/db_connect.php');

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

    <?php if(count($pizzas)>=2): ?>
      <h5 class="center orange-text">there are 2 or more pizzas</h3>
    <?php else: ?>
      <h5 class="center orenge-text">there are less than 2 pizzas</h3>
    <?php endif; ?>
    
    <div class="container">
      <div class="row">

        <?php foreach($pizzas as $pizza): ?>

          <!-- grid system -->
          <div class="col s4 md3">
            <div class="card z-depth-0">
              <div class="card-content center">
                <h6><?php echo htmlspecialchars($pizza['title']); ?></h6>
                <ul>
                  <?php foreach(explode(',',$pizza['ingredients']) as $ingredient): ?>
                    <li><?php echo htmlspecialchars($ingredient); ?></li>
                  <?php endforeach; ?>
                </ul>
              </div>

              
              <div class="card-action right-align">
                <a href="details.php?id=<?php echo $pizza['id'] ?>" class="brand-text">more info</a>
                <!-- ⚠️⚠️⚠️点击more info后，会进入到带有id参数的details页面，这相当于发送了带有id参数的GET请求 -->
              </div>
            </div>
          </div>

        <?php endforeach; ?>
       
      </div>
    </div>
	<?php include('templates/footer.php'); ?>
   

 </html>