<!--
file system
Filesystem 函数允许访问和操作文件系统。

- fopen() 函数
  fopen() 函数打开一个文件或 URL。
   如果 fopen() 失败，它将返回 FALSE 并附带错误信息。
   您可以通过在函数名前面添加一个 '@' 来隐藏错误输出。

   语法  fopen(filename,mode,include_path,context)
       filename	必需。规定要打开的文件或 URL。
       mode	必需。规定您请求到该文件/流的访问类型。
              可能的值：
                     "r" （只读方式打开，将文件指针指向文件头）
                     "r+" （读写方式打开，将文件指针指向文件头）
                     "w" （写入方式打开，清除文件内容，如果文件不存在则尝试创建之）
                     "w+" （读写方式打开，清除文件内容，如果文件不存在则尝试创建之）
                     "a" （写入方式打开，将文件指针指向文件末尾进行写入，如果文件不存在则尝试创建之）
                     "a+" （读写方式打开，通过将文件指针指向文件末尾进行写入来保存文件内容）
                     "x" （创建一个新的文件并以写入方式打开，如果文件已存在则返回 FALSE 和一个错误）
                     "x+" （创建一个新的文件并以读写方式打开，如果文件已存在则返回 FALSE 和一个错误）
       include_path	可选。如果您还想在 include_path（在 php.ini 中）中搜索文件的话，请设置该参数为 '1'。
       context	可选。规定文件句柄的环境。context 是一套可以修改流的行为的选项。

- pointer



- fread()函数
   fread() 函数读取打开的文件。
   语法 fread ( handle , length )
       handle	文件系统指针，是典型地由 fopen() 创建的 resource(资源)。
       length	必需。规定要读取的最大字节数。

- fgets() 函数
   fgets() 函数从打开的文件中返回一行。
   语法  fgets(file,length)
         file	必需。规定要读取的文件。
         length	可选。规定要读取的字节数。默认是 1024 字节。



- fwrite()函数
   fwrite() 函数将内容写入一个打开的文件中。
    语法  fwrite(file,string,length)
          file	必需。规定要写入的打开文件。
          string	必需。规定要写入打开文件的字符串。
          length	可选。规定要写入的最大字节数。

- fclose()函数
   fclose() 函数关闭打开的文件。
    语法 fclose(file)

- unlink()函数
   unlink() 函数删除文件。
   语法  unlink(filename,context)
         filename	必需。规定要删除的文件。
         context	可选。规定文件句柄的环境。context 是一套可以修改流的行为的选项。
-->

<?php
  

  //获得file名
  $file = 'readme.txt';
  
  //打开一个读写文件，   只读为'r',a+ pointer移到结尾
  //更多模式：https://www.w3schools.com/php/func_filesystem_fopen.asp
  /*
  ⚠️⚠️
  我们已经打开了该文件，并将该文件存储在一个句柄中
  */
  $handle = fopen($file,'a+');

  //读指定字节数的文件
  echo fread($handle, filesize($file));

  //读取一行文件
  // echo fgets($handle);
  // echo fgets($handle); //⚠️⚠️因为pointer的原因会接上文继续读下一行

  // 读取一个字母
  // echo fgetc($handle);//⚠️⚠️ 因为pointer会接上文继续读下一个字母

  // 向$file写入
   fwrite($handle, "\rEverything popular is wrong.");//“\r”表示将pointer移到文末
   /*
   当书写一个文本文件时，请确保您使用了正确的行结束符！
   在 Unix 系统中，行结束符为 \n；
   在 Windows 系统中，行结束符为 \r\n；
   在 Macintosh 系统中，行结束符为 \r。
   */
  
  //关闭文件
  // fclose($handle);
  
  //删除文件
  // unlink($file);

  
?>