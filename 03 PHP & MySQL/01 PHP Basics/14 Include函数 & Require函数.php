<!--
- include()和require()
   include() 和 require() 除了处理错误的方式不同之外，在其他方面都是相同的  
      
      include() 生成一个警告（E_WARNING），在错误发生后脚本会继续执行！！
      require() 生成一个致命错误（E_COMPILE_ERROR），在错误发生后脚本会停止执行！！
-->

<?php 
  include('include&requires.php');  //错误发生后脚本继续执行！！
  echo 'You still will see me when the error occurs';

  require('include&requires.php');  //错误发生后脚本停止执行！！
  echo 'You won\'t see me when the error occurs';

  
?>
