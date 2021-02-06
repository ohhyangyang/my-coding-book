//arrays
let names = ['luigi','mario','yoshi'];

names.push('toad');
//names.push(3); ⚠️会报错

var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;  //⚠️不会报错


//objects，结构被初始化之后就不可以更改
var ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};
ninja.age = 40;  //⚠️不会报错
ninja.name = 'ryu'; //⚠️不会报错
// ninja.age = '30';  ⚠️会报错
// ninja.skills = ['fighting', 'sneaking']  ⚠️会报错
ninja = {   //⚠️不会报错
  name: 'yoshi',
  belt: 'orange',
  age: 40
};

var a;
var b = (a = 3) ? true : false
