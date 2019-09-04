/*console.log作用
    用来调试代码：
        1.检测代码是否执行到console.log的位置
        2.可以输出一些变量的值，判断程序的执行状态
    占位符：%d   %s   %j
*/
console.log("hello");


var user = {
    username:"zhangsan",
    age:20,
    qq:"1634512"
}
console.log("username:%s",user.username);//%s表示用字符串形式表示
console.log("age:%d",user.age);//%d表示用数字形式表示
console.log("user:%j",user);//%j表示对象用json形式表示
/*
username:zhangsan
age:20
user:{"username":"zhangsan","age":20,"qq":"1634512"}
*/



