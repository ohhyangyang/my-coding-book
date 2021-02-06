<!--
MySQL查询
  - SELECT语句
    MySQL数据库使用SELECT语句来查询数据
    语法 
      SELECT 要查询的column 
      FROM table名 
      [WHERE 限制条件]
         ⚠️⚠️ 如果要查询表的所有内容，则把“要查询的列名”用一个星号 * 号表示

  - ORDER BY关键字
     ORDER BY关键字用于对结果按照一个列或者多个列进行排序。
        默认按照升序对记录进行排序。
        如果需要按照降序排序，您可以使用DESC关键字。
     语法
        SELECT column_name,column_name
        FROM table_name
        ORDER BY column_name,column_name ASC|DESC;


  - PHP mysqli函数
     PHP mysqli 函数格式如下： mysqli_function(value,value,...);
     如 
       mysqli_connect($connect);            连接数据库
       mysqli_query($connect,"SQL 语句");    执行一个数据库的查询或其他命令
       mysqli_fetch_all($result[,产生数组类型]) 从结果集中取得所有rows作为关联数组，或数字数组，或二者兼有。
                    数组类型：
                         MYSQLI_ASSOC  关联数组
                         MYSQLI_NUM    数字数组
                         MYSQLI_BOTH   二者兼有
       mysqli_fetch_array($result[,产生数组类型]) 只从结果集中取得一个row作为关联数组，或数字数组，或二者兼有。
       mysqli_fetch_assoc()	                从结果集中取得一行作为关联数组。
       mysqli_free_result($result);         释放结果内存。
       mysqli_close()                       关闭先前打开的数据库连接。
       mysqli_errno()	                 返回最近调用函数的最后一个错误代码。
    更多sqli函数 https://www.runoob.com/php/php-ref-mysqli.html
     
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
        $sql = 'SELECT title, ingredients, id FROM pizzas ORDER BY created_at';
    
    //2 查询数据库 & 获得结果
         //通过$sql语句来查询数据库
         $result = mysqli_query($connect,$sql);
    
    //3 从结果中获取所有rows，并产生关联数组
        $pizzas = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
    // 释放结果内存。（不一定要做，只是为了练习)
        mysqli_free_result($result);

    // 关闭数据库连接（不一定要做，只是为了练习)
        mysqli_close($connect);

    //4 打印数组
        print_r($pizzas);
        /*
        打印结果
          Array ( [0] => Array ( [title] => yang supreme [ingredients] => tomato, cheese, chicken [id] => 1 ) 
                  [1] => Array ( [title] => mario supreme [ingredients] => tomato, cheese, mushroom [id] => 2 ) )
        */
    
    

?>
 <!DOCTYPE html>
 <html>
    <?php include('templates/header.php'); ?>
    
	<?php include('templates/footer.php'); ?>
   

 </html>