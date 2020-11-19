// 定义对象
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null,
    age: function () {
        var that = this;      // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth;   // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

// 1. 访问属性
console.log('1: ', xiaoming.school);  // 访问属性 

// 2. 增加属性
xiaoming.address = '上海'; 
console.log('2: ', xiaoming['address']);  // 也可以通过[]来访问属性

// 3. 检查是否拥有某一属性 in 
xiaoming.telephone = '15900574412'; 
var s = 'telephone' in xiaoming ; 
console.log('3: ', s);

// 4. 对象的方法： 对象中绑定函数
console.log('4: ', xiaoming.age());  //调用对象的方法
