/*
数据类型： Number、字符串、布尔
&& ： 与运算， 所有都为true ，返回true
||：  或运算， 有一个为true， 返回true
!：   非云散， 把true变成false，false变成true ； 
strict模式： 'use strict';   强制通过var申明变量，未声明直接使用则报错 ； 
*/

var a = null ;
console.log( a && a.trim()); 

var b = undefined ; 
console.log( b && b.trim()); 




// 参考： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E9%80%BB%E8%BE%91%E5%92%8C
// expr1 && expr2 ： If expr1 can be converted to true, returns expr2; else, returns expr1.

true && true ;    // true 
true && false;    // false
false && false ;  // false 
false && true ;   // false 