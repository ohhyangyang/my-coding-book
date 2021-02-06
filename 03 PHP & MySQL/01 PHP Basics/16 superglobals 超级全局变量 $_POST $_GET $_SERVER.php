<!-- 
- superglobals 超级全局变量

    $_POST 
        PHP $_POST 被广泛应用于收集表单数据，在HTML form标签的指定该属性："method="post"。

        在一个输入字段（input）及提交按钮(submit)的表单(form)中。 
        当用户点击 "Submit" 按钮提交表单数据时, 表单数据将发送至<form>标签中action属性中指定的文件。 
        然后可以使用超级全局变量 $_POST 来收集表单中的 input 字段数据

    $_GET
       和$_POST类似，PHP $_GET 同样被广泛应用于收集表单数据，在HTML form标签的指定该属性："method="get"。
       
       另外，$_GET 也可以收集URL中发送的数据。
         假定有一个包含参数的超链接HTML页面：
          <html>
           <body>
               <a href="test_get.php?subject=PHP&web=runoob.com">Test $GET</a> 
           </body>
          </html>
          当用户点击超链接 Test $GET, url中的参数 subject 和 web 将发送至 test_get.php,
          你可以在 test_get.php 文件中使用 $_GET 变量来获取这些数据。
         
    $_SERVER
       $_SERVER是一个包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组。
         
         $_SERVER 变量中的重要元素:
         $_SERVER['PHP_SELF']	返回当前执行文件的相对于localhost的路径。
            可以用于在文件中指向自身，，这样即是修改了文件名也不会报错，例如
            <form action="<php echo $_SERVER['PHP_SELF'] ?>" method="POST>
         $_SERVER['SERVER_NAME']  返回当前运行脚本所在的服务器的主机名（比如 www.w3school.com.cn 和 localhost）
         $_SERVER['REQUEST_METHOD']  返回访问页面使用的请求方法（例如 POST）。
         $_SERVER['SCRIPT_FILENAME']  返回当前执行脚本的绝对路径。       
         $_SERVER['QUERY_STRING']   查询字符串，即获取的是地址中 ？后面的值

              更多元素：https://www.runoob.com/php/php-superglobals.html

   
    
-->
<?php
echo $_SERVER['SERVER_NAME'] . '<br/>';
//返回 localhost

echo $_SERVER['REQUEST_METHOD'] . '<br/>';
//返回 GET

echo $_SERVER['SCRIPT_FILENAME'] . '<br/>';
//返回 /opt/lampp/htdocs/PHPSQL/5 superglobals 超级全局变量.php

echo $_SERVER['PHP_SELF'] . '<br/>';
//返回 /PHPSQL/5 superglobals 超级全局变量.php

?>

<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    
</body>
</html>