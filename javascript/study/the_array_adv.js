/* array 高阶函数 */ 

// 1. array.map() :  对每一个元素执行对应方法
function test1(x) {
    return x * x;
}
var arr1 = [1, 2, 3, 4, 5, 6];
var rst1 = arr1.map(test1);      // map()
console.log('1: ', rst1);

// 2. array.reduce(): 循环前后两个元素做计算
var test2 = function (x, y) {
    return x + y;
};
var arr2 = [1, 3, 5, 7, 9, 11];
var rst2 = arr2.reduce(test2);  // reduce() 
console.log('2: ', rst2);       // 36 

// 3. array.filter() : 按条件过滤
var arr3 = [1, 2, 4, 5, 6, 9, 10, 15];
var rst3 = arr3.filter(function (x) {
    return x % 2 !== 0;
});
console.log('3: ', rst3); 

// 4. array.sort(): 排序， 正序： -1, 0，1 ； 倒序： 1，0 -1 ； 
var arr4 = [10, 20, 1, 2];

// 4-1 : 正序： -1, 0，1 ；
arr4.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});   
console.log('4-1: ', arr4);

// 4-2:  倒序： 1，0 -1 ； 
arr4.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
});   
console.log('4-2: ', arr4);

// 5. array.every() 判断数组的所有元素是否满足测试条件。
var arr5 = ['Apple', 'pear', 'orange'];
var rst5 = arr5.every(function (s) {
    return s.length > 0;
});
console.log('5: ', rst5); // true, 因为每个元素都满足s.length>0

// 6. array.find(): 查找符合条件的第一个元素  (条件： 全是小写)
var arr6 = ['Apple', 'Yao', 'orange', 'pear'];
var rst6 = arr6.find(function (s) {
    return s.toLowerCase() === s;
});
console.log('6: ', rst6);  // 'orange'

// 7. arr.findIndex(): 返回符合条件的第一个元素的索引 
var arr7 = ['Apple', 'Pear', 'orange'];
var rst7 = arr7.findIndex(function (s) {
    return s.toLowerCase() === s;
}); 
console.log('7: ', rst7);   // 2


// 8. arr.forEach() : 把每个元素依次作用于传入的函数(无返回值)
var arr8 = ['Apple', 'pear', 'orange'];
arr8.forEach(alert);    // 弹出框显示元素

// 9.  forEach() 与 map() 比较
var arr9 = ['Apple', 'Pear', 'Orange'];
// 1. 使用forEach(): 对元素进行处理
var test9 = function(x){
    console.log('9.forEach:', x); 
}; 
arr9.forEach(test9);   

// 2. 使用map(): 返回新数组
var rst9 = arr9.map(function(x) {return x.toUpperCase();});
console.log('9.map: ', rst9);    

// 10 . forEach(): 3的元素跳过
var arr10 = [1, 2, 3, 4, 5];
arr10.forEach(function (item) {
    if (item === 3) {
        return;
    }
    console.log(item);
});