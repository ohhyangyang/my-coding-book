<!--
 - bootstrap 网格系统 Grid System
      https://www.cnblogs.com/moqiutao/p/5380613.html

      网格系统通过一系列包含内容的行和列来创建页面布局。下面列出了 Bootstrap 网格系统是如何工作的：
          行必须放置在 .container class 内，以便获得适当的对齐（alignment）和内边距（padding）。
          使用行(row)来创建列的水平组。
          内容应该放置在列(col)内，且唯有列可以是行的直接子元素。
          预定义的class，比如 .row 和 .col-xs-4，可用于快速创建网格布局。LESS混合类可用于更多语义布局。
          列通过内边距（padding）来创建列内容之间的间隙。该内边距是通过 .rows 上的外边距（margin）取负，表示第一列和最后一列的行偏移。
          网格系统是通过指定您想要横跨的十二个可用的列来创建的。例如，要创建三个相等的列，则使用三个 .col-xs-4为class的div。

- ⚠️⚠️ 在html插入用户输入的数据时不要忘了使用htmlspecialchars()

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
                <div><?php echo htmlspecialchars($pizza['ingredients']); ?></div>
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