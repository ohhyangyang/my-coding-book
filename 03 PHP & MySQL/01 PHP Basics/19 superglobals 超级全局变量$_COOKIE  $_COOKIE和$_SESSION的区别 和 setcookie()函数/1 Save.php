<!-- 
- $_COOKIE
    如今,你访问的每个网站时，几乎都必须接受一些弹出的cookie通知，
    而这些pop-up本质上是在征求您的许可，以COOKIE的形式将数据存储在计算机上，
    这些数据可以用来增强你在网站上的体验时，
    可能会在浏览时在不同页面之间使用这些数据，
    可是是确定你之前是否来过某个特定页面上，
    或可能是否之前在某购物篮中添加了商品

⚠️⚠️⚠️⚠️
- $_COOKIE和$_SESSION的区别
       $_COOKIE 保存在用户电脑中
       $_SESSION 保存在服务器中 （关闭浏览器之后，记录会被删除）

    现在，很多人都喜欢使用 SESSION 而不是COOKIE，在某些情况下，SESSION是更好的选择，
    因为SESSION会将数据储存在服务器上而不是用户计算机上，因此特别是对于敏感数据，SESSION被认为更安全，
    
    但是COOKIE确实在其他情况下也很有用，例如根据网站过去的行为向用户进行内容营销或类似的行为
    例如一个人在网站上浏览衣服，如果我们将浏览记录保存在COOKIE上，并在这个人下一次访问时使用COOKIE，
    网站检测到该cookie，便可以将上次浏览的类似产品展示于他

- setcookie()函数
   setcookie() 函数向客户端发送一个 HTTP cookie。
   cookie 是由服务器发送到浏览器的变量。cookie 通常是服务器嵌入到用户计算机中的小文本文件。
   每当同一台计算机通过浏览器请求页面时，就会发送这个 cookie。

   语法  setcookie(name,value,expire,path,domain,secure)
       name	必需。规定 cookie 的名称。
       value	必需。规定 cookie 的值。
       expire	可选。规定 cookie 的过期时间。
              例如 time() + 3600*24*30 从当前时间算起，将设置 cookie 的过期时间为30天。
              ⚠️⚠️ 如果这个参数没有设置，那么cookie将在 session结束后（即浏览器关闭时）自动失效。
       
       path	可选。规定 cookie 的服务器路径。
            如果路径设置为 "/"，那么 cookie 将在整个域名内有效.如果路径设置为 "/test/"，
            那么 cookie 将在 test 目录下及其所有子目录下有效。默认的路径值是 cookie 所处的当前目录。

       domain	可选。规定 cookie 的域名。
              为了让 cookie 在 example.com 的所有子域名中有效，您需要把 cookie 的域名设置为 ".example.com"。
              当您把 cookie 的域名设置为 www.example.com 时，cookie 仅在 www 子域名中有效。
              
       secure	可选。规定是否需要在安全的 HTTPS 连接来传输 cookie。如果 cookie 需要在安全的 HTTPS 连接下传输，则设置为 TRUE。默认是 FALSE。


-->
<?php
  //echo $_SERVER['REQUEST_METHOD']

  if(isset($_POST['submit'])){

    //当点击submit时
    
    // 打开session
    session_start();

    // 提交信息同时，储存该信息至$_SESSION
    $_SESSION['name'] = $_POST['name'];

    //给gender数据设置cookie
    setcookie('gender',$_POST['gender'],time() + 86400);//86400s代表一天

    // 并跳转至其他页面
    header('Location:2 Get.php');

    

  }

?>

<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <form name="name"  action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <input type="text" name="name">
        <select name="gender">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input type="submit" name="submit" value="submit">
    </form> 
</body>
</html>