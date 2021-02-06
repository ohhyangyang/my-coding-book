<!--
- PHP连接MySQL

  实例：PHP连接yang_pizza数据库
    
    STEP1 在phpMyAdmin给服务器创建用户
        （点击User accounts可查看所有用户）

        方法一：使用服务器defalut用户（不推荐）
          1 在phpMyAdmin设置username和password
              username:root (使用default root username)
              password:自定义
          2 需要在XAMPP的phpmyadmin文件夹中更新数据

        方法二：给服务器创建新用户（推荐）
          1 在phpMyAdmin中点击上方User account选项
          2 点击Add user account
            Login information
                User name: yang
                Host name: localhost
                password: 056104687
                Re-type: 056104687
            Golbal privileges: check all
          3 点击下方GO

    STEP2 在PHP连接yang_pizza database  
       
       1 选择模块：
           可以使用 MySQLi vs PDO 模块
              mysqli (MySQL improved)    ⚠️⚠️下一节具体讲解mysqli函数
                  更程序化的方式，更方便入门
              PDO (PHP data objects) 
                  需要学习objects，但如果要深入学习PHP，一定要学习PDO！
       2 在php中连接yang_pizza
          见下面PHP代码       
-->
<?php

    //⚠️⚠️⚠️ 以下为STEP2 

    //连接yang_pizza database
    $connect = mysqli_connect('localhost','yang','056104687','yang_pizza');
    
    //验证连接是否成功，如果成功，$conn为true，失败返回false
    if(!$connect){
        echo 'Connection error' . mysqli_connect_error();
        //失败后会出现waring
    }

?>