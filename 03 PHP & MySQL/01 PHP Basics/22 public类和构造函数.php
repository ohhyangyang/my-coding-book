<!-- 
类似于 js的构造函数 和 mongodb的mongoose模块

面向对象

- 类 class   
  类似于蓝图的概念
  定义了一件事物的抽象特点。类的定义包含了数据的形式以及对数据的操作。


- new运算符 创建对象实例
   class创建后，我们可以使用 new 运算符来实例化该类的对象




- function __construct()构造函数
   构造函数是一种特殊的方法。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，

- 访问控制
    public（公有）：公有的类成员可以在任何地方被访问。
    protected（受保护）：受保护的类成员则可以被其自身以及其子类和父类访问。
    private（私有）：私有的类成员则只能被其定义所在的类访问。

- $this
   指向函数当前的class
   同理js中的this对象，this指向其函数的上一级，即环境对象
      
-->

<?php

  //创建一个classA蓝图
  class UserA{
      public $email;
      public $name;

      public function __construct(){
          $this -> email = 'yang@gamil.com'; //初始化email
          $this -> name = 'yang'; //初始化name
      }

      public function login(){
          echo 'the user logged in';
      }
  }
  

  //创建一个UserA对象实例
    $userOne = new UserA();

    $userOne -> login();
    echo '<br/>';
    echo $userOne -> name;
    echo '<br/>';
  
  
  //创建一个classB蓝图
  class UserB{
    public $email;
    public $name;

    public function __construct($name, $email){
        $this -> email = $email;//初始化email
        $this -> name = $name; //初始化name
    }

    public function login(){
        echo $this -> name . ' leilogged in';
    }
}

//创建一个UserB对象实例
  $userTwo = new UserB('mario','mario@yahoo.comn');

  echo $userTwo -> name;
  echo '<br/>';
  echo $userTwo -> email;
  echo '<br/>';
  $userTwo -> login();




?>