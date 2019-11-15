var user = {
    name:"zhangsan",
    age:20,
    qq:"1634512"
}
console.log("username:%s",user.name);//%s表示用字符串形式表示
console.log("age:%d",user.age);//%d表示用整数形式表示
console.log("user:%j",user);//%j表示对象用json形式表示

/**
 运行结果：
username:zhangsan
age:20
user:{"name":"zhangsan","age":20,"qq":"1634512"}
 */