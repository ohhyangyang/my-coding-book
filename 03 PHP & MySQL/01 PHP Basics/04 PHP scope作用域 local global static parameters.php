 <!--
 
    变量作用域 variable scope
      local
      global
      static
      parameter

  - 局部和全局作用域 local VS global 

    在所有函数外部定义的变量，拥有全局作用域。
    除了函数外，全局变量可以被脚本中的任何部分访问，
    ⚠️⚠️⚠️
    要在一个函数中访问一个全局变量，需要使用 global 关键字 或者 & 符号传递入参数。

  - static作用域

    当一个函数完成时，它的所有变量通常都会被删除。然而，有时候您希望某个局部变量不要被删除。
    ⚠️⚠️⚠️
    要做到这一点，请在您第一次声明变量时使用 static 关键字

  - 参数作用域
    参数是通过调用代码将值传递给函数的局部变量。

   和JS中的let概念很像
      https://www.runoob.com/php/php-variables.html
 -->

<?php  

//1 全局变量和局部变量 global&local
//例一
$x=5; // ---全局变量, $x变量在函数外定义，无法在函数内使用

function myTest1() 
{ 
    global $x;//⚠️⚠️ 如果要在一个函数中访问一个全局变量，需要使用global关键字。
    $y=10; // ---局部变量 
    echo "<p>测试函数内变量:<p>"; 
    echo "变量x为: $x"; 
    echo "<br>"; 
    echo "变量y为: $y"; 
}  

myTest1(); 
/*
当我们调用myTest()函数并输出两个变量的值, 函数将会输出局部变量$y的值，
但是不能输出$x的值，因为$x变量在函数外定义，无法在函数内使用，
如果要在一个函数中访问一个全局变量，需要使用global关键字。
*/

echo "<p>测试函数外变量:<p>"; 
echo "变量 x 为: $x"; 
echo "<br>"; 
echo "变量 y 为: $y"; //$y为局部变量，这里会报错
echo '<br>';

/*
当我们在myTest()函数外输出两个变量的值，函数将会输出全局变量$x 的值，
但是不能输出$y的值，因为$y变量在函数中定义，属于局部变量。
*/

//例二
/*
⚠️⚠️⚠️
global将nameA变量引入函数
从始至终只存在一个全局变量nameA
*/
$nameA = 'mario';//声明全局变量nameA
function sayBye(){
  global $nameA;//将全局变量nameA引入函数
  $nameA = 'wario';//修改全局变量nameA为wario
  echo "bye $nameA";

} 
sayBye();//bye wario
echo '<br />';

echo $nameA;//wario

echo '<br />';

//例三
/*
分别在全局和局部中声明了nameB变量
*/
$nameB = 'mario';//声明全局变量nameB
function sayHi($nameB){
  $nameB = 'wario';//声明局部变量nameB
  echo "Hi $nameB";

} 
sayHi($nameB);//Hi wario
echo '<br />';

echo $nameB;//mario

echo '<br />';

//例四
/*
⚠️⚠️⚠️
&符号代表着把全局变量nameC引入了函数中
所以此时从始至终依旧只存在一个全局变量nameC
*/
$nameC = 'mario';//声明全局变量nameC
function sayHoho(&$nameC){//将全局变量nameC传递进函数中
  $nameC = 'wario';//修改全局变量nameC
  echo "Hoho $nameC";

} 
sayHoho($nameC);//Hi wario
echo '<br />';

echo $nameC;//Wario

echo '<br />';



 //2 static作用域

function myTest2()
{
    static $x=0;
    echo $x;
    $x++;
    echo PHP_EOL;    // 换行符
}
 
myTest2();
echo '<br>';
myTest2();
echo '<br>';
myTest2();
echo '<br>';

//3 参数作用域
function myTest3($x)
{
    echo $x;
}
myTest3(5);
?>


 

