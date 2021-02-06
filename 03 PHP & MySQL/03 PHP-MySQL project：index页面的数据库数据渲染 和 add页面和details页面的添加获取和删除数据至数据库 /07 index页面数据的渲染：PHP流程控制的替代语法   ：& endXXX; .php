<!--
PHP流程控制的替代语法 Control Flow Alt Syntax
   PHP 提供了一些流程控制的替代语法，
   包括 if，while，for，foreach 和 switch。
   替代语法的基本形式是把左花括号（{）换成冒号（:），
   把右花括号（}）分别换成 endif;，endwhile;，endfor;，endforeach; 以及 endswitch;。


为什么有这样的语法呢？
   我可以理解为在PHP和HTML代码混合的时候更加代码整齐，容易阅读，逻辑清晰？

- foreach():
  endforeach;

- if():
  else:
  endif;

- endwhile
- end for
- end switch


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
                <a href="#" class="brand-text">more info</a>
              </div>
            </div>
          </div>

        <?php endforeach; ?>
       
      </div>
    </div>
	<?php include('templates/footer.php'); ?>
   

 </html>