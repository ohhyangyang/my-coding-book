/*
  - compilor:
    1 打开terminal
    2 watch模式，实时编译
      输入tsc sandbox.ts xxx.js -w
      ⚠️ 如果想生成和ts文件同名的js文件，可以直接简写成 tsc sandbox.ts，并且不用手动创建js文件，输入后会自动生成sandbox.js

    2 非watch模式，每次都需要重新编译一次
      输入tsc sandbox.ts xxx.js
*/
var character = 'luigi';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
