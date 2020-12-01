/*
不要使用new Number()、new Boolean()、new String()创建包装对象；

用parseInt()或parseFloat()来转换任意类型到number；

用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

typeof操作符可以判断出number、boolean、string、function和undefined；

判断Array要使用Array.isArray(arr)；

判断null请使用myVar === null；

判断某个全局变量是否存在用typeof window.myVar === 'undefined'；

函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
*/


//1. 闭包（Closure）: 仅返回函数，调用函数时才返回结果
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]);    
console.log('1: ', f());    // f() 调用后才执行  ； 


//2. 一个立即执行的匿名函数 (要用括号把整个函数定义括起来)
var rst2 = (function (x) { return x * x }) (3);
console.log('2: ', rst2);  

//3. 箭头函数： 数组排序 
var arr3 = [10, 20, 1, 2];
arr3.sort((x, y) => x-y);   // 小到大排序
console.log('3-1: ',arr3);  // [1, 2, 10, 20]
arr3.sort((x, y) => y-x);   // 大到小排序
console.log('3-2: ',arr3);  // [20, 10, 2, 1]

//4. generator(生成器)：斐波那契数列 
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;              //返回多次
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}
for (var x of fib(10)) {
    console.log('4: ', x);    // 依次输出0, 1, 1, 2, 3, ...
}

//5. generator（生成器）  ： 生成一个自增的ID
function* next_id() {
    for (id = 1; ; id++) {
        yield id;
    }
}
var rst5 = next_id(); 
rst5.next(); 
rst5.next(); 
rst5.next();   //next()方法会执行generator的代码 
console.log('5: ', rst5.next().value )   //4 

//6. 标准对象 date
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth()+1;   //月份范围用0~11整数表示，0表示一月，1表示二月...
var date = now.getDate();
var day = now.getDay();//得到周几
var hour = now.getHours();//得到小时
var minu = now.getMinutes();//得到分钟
var sec = now.getSeconds();//得到秒
console.log('6: ', year+"-"+month+"-"+date+" "+hour+":"+minu+":"+sec )  
// new Date()
console.log('6-1: ', new Date() )   //Thu Nov 19 2020 17:29:11 GMT+0800
// Date.now()
console.log('6-2: ', Date.now() )   //1605778151673


 






