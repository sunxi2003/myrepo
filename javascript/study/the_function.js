// 1. 定义函数1： 直接定义
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
console.log('abs(-9)= ', abs(-9)); 

// 2. 定义函数2： 匿名函数赋值给了变量
var abs2 = function(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};     // ; 不能省略
console.log('abs2(-9)= ', abs2(-9)); 

// 3. 增加数据校验 typeof
function abs3(x) {
    if (typeof x !== 'number') {
        return 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
console.log('abs3(a)= ', abs3()); 

// 4. 使用 arguments （只在函数内部起作用）： 循环输出参数
function foo(x) {
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); 
    }
}
foo(10, 20, 30, 40, 50);

//5. arguments 判断传入参数的个数
function t_argu() {
    if (arguments.length === 2) {
       return '传入了2个参数.'; 
    }
    else 
    {
        if (arguments.length === 3)
        {
            return '传入了3个参数.'; 
        }
    }
}
console.log('t_argu("a","b","c")', t_argu('a','b','c')); 

//6. rest参数 : 剩余的参数以数组形式交给变量rest
function t_rest(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
t_rest(1, 2, 3, 4, 5, 6);

//7. 练习： 接收任意个参数并返回它们的和
function t_sum(){
    var x = 0 ; 
    for (var i=0; i<arguments.length; i++) {
        x = x+arguments[i];
    }
    return x; 

}
console.log("t_sum()= ",t_sum(1,2,3,4,5))

