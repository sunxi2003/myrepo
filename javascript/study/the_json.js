// 参考： https://www.runoob.com/js/javascript-json-stringify.html

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

// 1. 序列化:  对象转json
var s1 = JSON.stringify(xiaoming);
console.log('1: ' ,s1);

// 2. 反序列化 : JSON转对象  
var obj = JSON.parse(s1); 
console.log('2: ' ,obj.name);      //  可访问.属性 ；

// 3. 序列化：第2个参数: 数组（筛选对象）
var s3 = JSON.stringify(xiaoming, ['name', 'skills']);
console.log('3: ' ,s3);

// 4. 序列化： 第2个参数：函数（对象的每个元素都会被函数处理）
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();  //转成大写
    }
    return value;
}
var s4 = JSON.stringify(xiaoming, convert);
console.log('4: ' ,s4);

// 5. 序列化: 第3个参数：文本添加缩进、空格和换行符
var s5 = JSON.stringify(xiaoming, null, 4);   //4: 使用4个空格缩进
console.log('5: ' ,s5);


// 6. 对象添加toJSON()方法， 精确控制如何序列化对象
var zhangsan = {
    name: '张三',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};
var s6 = JSON.stringify(xiaoming); 
console.log('6: ' ,s6);


