//1. 多行字符串   注意：反引号在键盘的ESC下方，数字键1的左边：
console.log("1: ", `多行
字符串
测试`);  

//2. 换行
console.log("2: ", "多行字符串\n测试"); 

//3. 模版字符串
var name = '小明';
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`;
console.log("3: ",message); 

//4. 取长度
var str4 = 'Hello,world!';
var result4 = str4.length; // 12
console.log("4: ",result4); 

//5. 某个指定位置的字符
var str5 = 'Hello,world!';
var result5 = str5[5]       // ,
console.log("5: ",result5); 

//6. 转为大写
var str6 = 'Hello';
var result6 = str6.toUpperCase();  //HELLO
console.log("6: ",result6); 

//7. 转为大写
var str7 = 'Hello';
var result7 = str7.toLowerCase();  //hello
console.log("7: ",result7); 

//8. 查找出现的位置，找不到返回-1 
var str8 = 'Hello,world!';
var result8 = str8.indexOf('world');    // 6 
console.log("8: ",result8); 

//9. 截取子串
var str9 = 'Hello,world!';
var result91 = str8.substring(0,5)   // 第1～5位    hello
var result92 = str8.substring(6)     // 第6位到最后1位    word!
console.log("9: ",result91, ' ', result92); 