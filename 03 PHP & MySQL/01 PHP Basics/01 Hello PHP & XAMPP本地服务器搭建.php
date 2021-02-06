
 <!DOCTYPE html>
 <html>
 <head>
 	<title>my first PHP file</title>
 </head>
 <body>
   <h1><?php echo 'hello PHP'; ?></h1>
   <!-- 
    操作过程：
    和简单的前端模式不同
    浏览器接收到PHP代码后，会向后端服务器发送请求，服务器会运行所有带有<php>标签的代码，将运行结果发送回前端html，html会将它作为前端的元素进行渲染，以此获得h1的样式
   -->
   <!--
  - XAMPP 搭建本地服务器，模拟在线运行的环境
    ⚠️⚠️ 本地服务器指向 127开头的回环地址 或 私有地址，
         发送的数据被本地主机接收，传不出去

    下载的官网（https://www.apachefriends.org/zh_cn/index.html）
    XAMPP是最流行的PHP开发环境
    XAMPP是完全免费且易于安装的Apache发行版，其中包含MariaDB、PHP和Perl。

   ⚠️⚠️⚠️⚠️
    服务器搭建后，通过以下三个地址皆可以登录
    http://192.168.64.2/PHPSQL/
    http://127.0.0.1:8000/PHPSQL/
    http://localhost:8000/PHPSQL/

   XAMPP使用：
     GENRAL 
        start 开启
        go to application 打开页面
     NETWORK  
        可以用来修改端口  
     VOLUMES
        点击mount 点击explore 即可打开finder环境
        进入htdocs文件夹，即可开始创建php文件了
   -->
 </body>
 </html>

