<!-- 
  
一个类中的private数据不可以被直接获取，但是可以通过创建具体函数来实现
-->

<?php


  //创建一个public classA蓝图
  class UserA{
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

//创建一个UserA对象实例
  $userOne = new UserA('mario','mario@yahoo.com');
  echo $userOne -> name;//yoshi
  echo '<br/>';

  $userOne -> name = 'yoshi';//⚠️⚠️ 实例内的数据可以轻易被修改
  echo $userOne -> name;//yoshi
  echo '<br/>';




  //////////////////////////////////////////////////////////////
   //创建一个private classB蓝图
   class UserB{
    private $email;
    private $name;

    public function __construct($name, $email){
        $this -> email = $email;//初始化email
        $this -> name = $name; //初始化name
    }

    public function login(){
        echo $this -> name . ' leilogged in';
    }

    //⚠️⚠️创建函数来获取private数据
    public function getName(){
      return $this -> name;
    }

    //⚠️⚠️ 创建函数来重写$name
    public function setName($name){
      if(is_string($name) && strlen($name) > 1){
        $this -> name = $name;
        return "name has been updated to $name";
      }else{
        return 'not a valid name';
      }
    }
  }
  


  $userTwo = new UserB('mario','mario@yahoo.com'); //允许赋值
  
  //$userTwo -> name = 'yoshi';//⚠️⚠️ 报错,Cannot access private property $name
  
  echo $userTwo -> getName();//mario
  echo '<br/>';

  echo $userTwo -> setName(50);//not a valid name
  echo '<br/>';

  echo $userTwo -> setName('yang');//name has been updated to yang
  echo '<br/>';

  echo $userTwo -> getName();//yang
  echo '<br/>';





?>