// 1. map()  把 ['1', '2', '3', '4'] 变成 [1,2,3,4]
var test1 = function(x){
    return parseInt(x); 
}
var arr1 = ['1', '2', '3', '4'];
var rst1 = arr1.map(test1);
console.log('1: ', rst1);


// 2. reduce(): 把[1, 3, 5, 7, 9]变换成整数13579
var test2 = function (x, y) {
    return x * 10 + y;
};
var arr2 = [1, 3, 5, 7, 9];
var rst2 = arr2.reduce(test2);  // reduce() 
console.log('2: ', rst2);       // 13579


// 3. map(): 元素首字母大写
var arr3 = ['zhangsan','liSI','WANGWU','ZHAOLiu'];
var test3 = function (x) {
    return x.substring(0,1).toUpperCase() + x.substring(1).toLowerCase();
};
var rst3 = arr3.map(test3);
console.log('3: ', rst3);      // 13579

// 4. filter(): 删掉空元素
var arr4 = ['A', '', 'B', null, undefined, 'C', '  '];
var rst4 = arr4.filter(function (s) {
    return s && s.trim();   
});
console.log('4: ', rst4);  

// 5. sort(): 字符串排序 
var arr5 = ['Google', 'apple', 'Microsoft'];
var test5 = function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0; 
}
var rst5 = arr5.sort(test5);
console.log('5: ', rst5);  

// 6. filter(): 删掉非数值元素
var arr6 = ['1', '3', 5, null, undefined, 7, 9, 'a' ];
var rst6 = arr6.filter(function (s) {
    return s &&  parseInt(s);     // ['1', '3',5,7,9]
});
console.log('6: ', rst6);  

// 7.闭包: 不用数字和符号， 实现运算
// 定义数字0:
var zero = function (f) {
    return function (x) {
        return x;
    }
};
// 定义数字1:
var one = function (f) {
    return function (x) {
        return f(x);
    }
};
// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}
// 计算数字2 = 1 + 1:
var two = add(one, one);
// 计算数字3 = 1 + 2:
var three = add(one, two);
// 检验结果 ： 调用three ，会执行3次
(three(function () {
    console.log('7: 闭包');
}))();

//8. 斐波那契数列 ： 后一个数等于前两个数之和 
function fib(max) {
    var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}
console.log('8: ', fib(10));     // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


