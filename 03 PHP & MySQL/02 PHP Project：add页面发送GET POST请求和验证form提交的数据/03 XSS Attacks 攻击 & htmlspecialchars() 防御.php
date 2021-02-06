<!--

- XSS Attacks (Cross-site scripting) 跨站脚本攻击
   是一种安全漏洞，攻击者可以利用这种漏洞在网站上注入恶意的客户端代码
   当被攻击者登陆网站时就会自动运行这些恶意代码，从而，攻击者可以突破网站的访问权限，冒充受害者。
   如果Web浏览器或应用程序没有部署足够的安全验证，那么，这些攻击很容易成功。

   恶意内容一般包括JavaScript，但是，有时候也会包括 HTML，FLASH 或是其他浏览器可执行的代码。
   一旦攻击成功后，攻击者可能获得更高的权限（可能的一些操作）、私密的网页内容、会话和cookie等等
   
   XSS 攻击的形式千差万别，但他们通常都会：
      1 将 cookies 或其他隐私信息发送给攻击者，
      2 将受害者重定向到由攻击者控制的网页，
      3 或是经由恶意网站在受害者的机器上进行其他恶意操作。

   XSS 攻击可以分为3类：存储型（持久型）、反射型（非持久型）、DOM 型。


   漏洞的防御
      1 过滤特殊字符
         PHP的htmlentities()或是htmlspecialchars()。
         Python的cgi.escape()。
         ASP的Server.HTMLEncode()。
         ASP.NET的Server.HtmlEncode()或功能更强的Microsoft Anti-Cross Site Scripting Library
         Java的xssprotect (Open Source Library)。
         Node.js的node-validator。
      2 使用HTTP头来指定类型
        如在PHP语言中使用以下代码：
            <php
             header('Content-Type: text/javascript; charset=utf-8');
            ?>
        强行指定输出内容为文本/JavaScript脚本（顺便指定了内容编码），而非可以引发攻击的HTML。

此处关于JSONP的漏洞利用也很有趣 https://www.k0rz3n.com/2019/03/07/JSONP%20劫持原理与挖掘方法/

- htmlspecialchars()函数  ⚠️⚠️ 保护浏览器！！！
    用于把一些预定义的字符转换为HTML实体
      预定义字符包括 & " ' < >
      例如 <php 
           $str = "This is some <b>bold</b> text."; 
           echo htmlspecialchars($str); 
           ?>
      在HTML中如下
           <!DOCTYPE html> 
           <html> 
           <body> 
           This is some <b>bold</b> text.
           </body> 
           </html>
      在浏览器中如下
          This is some <b>bold</b> text.
    ⚠️⚠️ 要把特殊的 HTML 实体转换回字符，请使用 htmlspecialchars_decode() 函数。
   
   为什么会需要这样的转换呢？
   多半是为了安全，例如用户在网址或搜寻框中，输入一些特殊符号，很可能触发Server端的 
   PHP script 进行 MySQL 資料库存取等恶意操作，透过 PHP htmlspecialchars 函数，将存取前的
   資料先转换成为较安全的符号，避免掉一些不必要的資料存取动作所产生的非預期結果。

-->

<!--
以以下案例为例：（反射型）
   在不使用htmlspecialchars()的情况下，
   如果用户在Ninja Pizza网站的表单中输入一段js代码 <script>window.location = "http://www.thenetninja.co.uk"</script>
   submit这段数据给server后，若server将这段数据echo给html，那么就有可能将当前页面redirect到一个恶意的页面
-->



<?php


//通过设置form的action属性，将数据发送到这里，以下开始验证数据
if(isset($_GET['submit'])){
    echo htmlspecialchars($_GET['email']);
    echo htmlspecialchars($_GET['title']);
    echo htmlspecialchars($_GET['ingredients']);
}

// if(isset($_GET['submit'])){
//    echo $_GET['email'];
//    echo $_GET['title'];
//    echo $_GET['ingredients'];
// }


// if(isset($_POST['submit'])){
//     echo $_POST['email'];
//     echo $_POST['title'];
//     echo $_POST['ingredients'];
// }


?>



<!DOCTYPE html>
<html>

    <?php include('templates/header.php'); ?>

    <section class="container grey-text"></section>
       <h4 class="center">Add a Pizza</h4>
       <form  class="white" action="03 XSS Attacks 攻击 & htmlspecialchars() 防御.php" method="GET">
       <!--<form  class="white" action="add.php" method="POST">-->
           <label>Your Email:</label>
           <input type="text" name="email">
           <label>Pizza Title:</label>
           <input type="text" name="title">
           <label>Ingredients (comma separated):</label>
           <input type="text" name="ingredients">
           <div class="center">
              <input type="submit" name="submit" value="submit" class="btn brand z-depth-0">
           </div>
       </form>

	<?php include('templates/footer.php'); ?>
   

</html>