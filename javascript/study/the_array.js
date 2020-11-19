
// 1. 定义一个数组
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log("1: ", arr.length);   //6 

// 2. 查看元素的位置
var arr2 = [10, 20, '30', 'xyz'];
var i = arr2.indexOf('30'); // 元素'30'的索引为2
console.log("2: ",i);

// 3. 修改元素
var arr3 = ['A', 'B', 'C'];
arr3[1] = 99;   // 修改了数组的值  
console.log("3: ",arr3) ; 

// 4. 末尾添加和删除元素
var arr4 = [1, 2];
arr4.push('A', 'B'); // 末尾添加若干元素， 返回Array新的长度: 4
arr4.pop();     // 删除最后一个元素
console.log("4: ", arr4) 

// 5. 截取部分元素
var arr5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr5.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr5.slice(3);    // 从索引3开始到结束: ['D', 'E', 'F', 'G']
arr5.slice().slice(0,3);    //不带参数， 从头到尾截取所有元素 ； 
console.log("5: ", arr5) 

// 6. 头部添加和删除元素
var arr6 = [1, 2];
arr6.unshift('A', 'B');  // 增加['A', 'B'], 变成['A', 'B', 1, 2]
arr6.shift();  // 删除头部元素
console.log("6: ",arr6) 

// 7. 元素排序
var arr7 = ['B', 'C', 'A'];
arr7.sort();
console.log("7: ",arr7) 

// 8. 元素顺序反转
var arr8 = ['one', 'two', 'three'];
arr8.reverse(); 
console.log("8: ",arr8) 

// 9. 链接数组
var arr9 = ['A', 'B', 'C'];
var result9 = arr9.concat([1, 2, 3]) ; //链接数组
console.log("9: ", result9);

// 10.元素连成一个串 
var arr10 = ['A', 'B', 'C', 1, 2, 3];
var result10 = arr10.join('-');     // 'A-B-C-1-2-3'
console.log("10: ", result10);

// 11. 练习 通过索引取到500这个值
var arr11 = [[1, 2, 3], [400, 500, 600], '-'];
var result11 = arr11[1][1];   // 下标从0开始
console.log("11: ", result11);