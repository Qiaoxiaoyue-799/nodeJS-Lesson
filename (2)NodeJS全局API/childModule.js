function sayHello(){
    console.log("Hello world");
}
function showName(){
    console.log(userName);
}
var userName = "zhangsan";

//给exports赋一个对象  export翻译：出口，输出
module.exports = {
    sayHello:sayHello,
    showName:showName
}