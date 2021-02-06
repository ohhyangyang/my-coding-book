<!--

  ⚠️
  如果显示failed to open, permission denied，那可能是因为相对应的文件或文件夹没有权限


- readfile()函数

  用法： readfile()函数读取一个文件，并写入到输出缓冲。
      如果成功，该函数返回从文件中读入的字节数。如果失败
      该函数返回 FALSE 并附带错误信息。您可以通过在函数名前面添加一个 '@' 来隐藏错误输出。

  语法   readfile(filename,include_path,context)
       filename	必需。规定要读取的文件。
       include_path	可选。如果您还想在 include_path（在 php.ini 中）中搜索文件的话，请设置该参数为 '1'。
       context	可选。规定文件句柄的环境。context 是一套可以修改流的行为的选项。

- file_exists()函数

- copy()函数
  file_exists() 函数检查文件或目录是否存在
   语法
       file_exists(path)    

       path	必需。规定要检查的连接路径。 

- realpath()函数
  realpath() 函数返回绝对路径。
  语法
       readpath(path)    

      path	必需。规定要检查的连接路径。 

- filesize()函数
  filesize() 函数返回指定文件的大小。
  语法
       filesize(filename)

      filename	必需。规定要检查的文件。

- rename()函数
   rename() 函数重命名文件或目录。
   语法
      rename(oldname,newname,context)

      oldname	必需。规定要重命名的文件或目录。
      newname	必需。规定文件或目录的新名称。
      context	可选。规定文件句柄的环境。context 是一套可以修改流的行为的选项。

- mkdir()函数
  mkdir() 函数创建目录。 

  语法
      mkdir(path,mode,recursive,context)
      path	必需。规定要创建的目录的名称。
      mode	必需。规定权限。默认是 0777。
      recursive	必需。规定是否设置递归模式。
      context	必需。规定文件句柄的环境。Context 是可修改流的行为的一套选项。
-->

<?php
  

  //获得file名
  $file = 'readme.txt';
  

  //验证，存在file返回true，不存在返回false
  if(file_exists($file)){
      
    //读取file
      echo readfile($file) . '<br/>';//输出结果最后的数字为字节数
    
    //复制file
    //copy($file, 'quotes.txt'); //我没有权限。。。。

    //获取file绝对路径
      echo realpath($file) . '<br/>'; //opt/lampp/htdocs/PHPSQL/01 PHP Basics/20 filesystem/readme.txt

    //获取file大小
      echo filesize($file) . '<br/>'; //316

    //重命名file
    // rename($file,'test.txt'); //我也没有权限。。。。
      

  }else{
    
    
      echo 'file does not exist'; //我还是没有权限。。。。

  }

  //创建文件夹
  //mkdir('quotes');
  
?>