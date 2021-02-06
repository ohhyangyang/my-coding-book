<!--
 MULTI-DIMENSIONAL ARRAYS 多维数组 （和mongoDB的逻辑类似）

   - $array[] = [xxx,xxx,xxx]  在数组末尾添加新数组

   - array_pop(array)  删除数组中的最后一个元素。
     返回值 数组pop掉的最后一个值。如果数组是空的，或者不是一个数组，将返回 NULL。


-->
<?php 

//indexed
$blogsOne = [
  ['mario party','mario','lorem',30],
  ['mario kart cheats','toad','lorem',25],
  ['zelda hidden chests','link','lorem',50]
];
print_r($blogsOne);
/*
Array ( [0] => Array ( [0] => mario party [1] => mario [2] => lorem [3] => 30 ) 
        [1] => Array ( [0] => mario kart cheats [1] => toad [2] => lorem [3] => 25 ) 
        [2] => Array ( [0] => zelda hidden chests [1] => link [2] => lorem [3] => 50 ) )
*/
echo '<br>';

print_r($blogsOne[1]);//Array ( [0] => mario kart cheats [1] => toad [2] => lorem [3] => 25 )
echo '<br>';

print_r($blogsOne[1][1]);//toad
echo '<br>';


//associative
$blogsTwo = [
  ['title'=>'mario party','author'=>'mario','content'=>'lorem','likes'=>30],
  ['title'=>'mario kart cheats','author'=>'toad','content'=>'lorem','likes'=>25],
  ['title'=>'zelda hidden chests','author'=>'link','content'=>'lorem','likes'=>50]
];

echo $blogsTwo[2]['author'];//link
echo '<br>';

echo count($blogsOne);//3
echo '<br>';

//添加新blog
$blogsTwo[] = ['title'=>'castle party','author'=>'peach','content'=>'lorem','likes'=>100];
print_r($blogsTwo);
/*
Array ( [0] => Array ( [0] => mario party [1] => mario [2] => lorem [3] => 30 ) 
        [1] => Array ( [0] => mario kart cheats [1] => toad [2] => lorem [3] => 25 ) 
        [2] => Array ( [0] => zelda hidden chests [1] => link [2] => lorem [3] => 50 ) 
        [3] => Array ( [title] => castle party [author] => peach [content] => lorem [likes] => 100 ) )
*/
echo '<br>';

//删除一个blog
$popped = array_pop($blogsTwo);
print_r($popped);//Array ( [title] => castle party [author] => peach [content] => lorem [likes] => 100 )
echo '<br>';
print_r($blogsTwo);
/*
Array ( [0] => Array ( [0] => mario party [1] => mario [2] => lorem [3] => 30 ) 
        [1] => Array ( [0] => mario kart cheats [1] => toad [2] => lorem [3] => 25 ) 
        [2] => Array ( [0] => zelda hidden chests [1] => link [2] => lorem [3] => 50 ) )
*/





?>
