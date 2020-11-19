// set 是一组key的集合, key不能重复 
var s1 = new Set([1, 2, 3]);
s1.delete(3);  // 删除
s1.add(4);
s1.add(5);
alert(s1.size);