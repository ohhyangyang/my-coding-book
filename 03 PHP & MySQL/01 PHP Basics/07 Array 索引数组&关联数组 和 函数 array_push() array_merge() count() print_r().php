<!--
    在 PHP 中，有三种数组类型：
        索引数组 - 带有数字索引的数组
        关联数组 - 带有指定键的数组
        多维数组 - 包含一个或多个数组的数组

    创建新数组
      使用中括号 $array = [xxx,xxx,xxx];
      使用array函数 $array = array(xxx,xxx,xxx);


    INDEXED ARRAY 索引数组

      - $array[index] = xxx 修改数组内的某个值

      - $array[] = xxx 在数组末尾添加新元素

      - array_push($array,element) 在数组末尾添加新元素

      - $array3 = array_merge($array1,$array2) 将数组合并
    
      - count($array) 计数数组中有多少个元素

      - print-r()   r代表readable
        print_r() 函数用于打印变量，以更容易理解的形式展示。

    ASSOCIATIVE ARRAYS 关联数组  (key & value)
      - $array[key(旧的)] = xxx 修改数组内的某个值

      - $array[key(新的)] = xxx 在数组末尾添加新元素

      - $array3 = array_merge($array1,$array2) 将数组合并
    
      - count($array) 计数数组中有多少个元素

      - print-r()   r代表readable
        print_r() 函数用于打印变量，以更容易理解的形式展示。


    
    
-->
<?php

//Indexed arrays
$peopleOne = ['shaun','crystal','ryu'];
$peopleTwo = array('ken','chun-li');
echo $peopleTwo[1];
echo '<br>';

$ages = [20,30,40,50];
print_r($ages);
echo '<br>';

$ages[1] = 25;//修改数组内的某个值
print_r($ages);
echo '<br>';

$ages[] = 60;
print_r($ages);
echo '<br>';

array_push($ages,70);
print_r($ages);
echo '<br>';

echo count($ages);//6
echo '<br>';

$peopleThree = array_merge($peopleOne,$peopleTwo);
print_r($peopleThree); //Array ( [0] => shaun [1] => crystal [2] => ryu [3] => ken [4] => chun-li )
echo '<br>';

//associative arrays
$ninjasOne = ['shaun'=>'black','mario'=>'orange','luigi'=>'brown'];
echo $ninjasOne['mario'];
echo '<br>';

print_r($ninjasOne);//Array ( [shaun] => black [mario] => orange [luigi] => brown )
echo '<br>'; 

$ninjasTwo = array('bowser'=>'green','peach'=>'yellow');

$ninjasTwo['toad'] = 'pink';//在$ninjasTwo结尾添加一个新元素
print_r($ninjasTwo);//Array ( [bowser] => green [peach] => yellow [toad] => pink )
echo '<br>'; 

$ninjasTwo['peach'] = 'red';//修改$ninjasTwo中peach的value
print_r($ninjasTwo);//Array ( [bowser] => green [peach] => yellow [toad] => pink )
echo '<br>'; 

echo count($ninjasOne);//3
echo '<br>';

$ninjasThree = array_merge($ninjasOne,$ninjasTwo);
print_r($ninjasThree);
echo '<br>';


?>