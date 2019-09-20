/**
1.定义Bomb构造函数，原型上有explode方法，message属性，该属性值为"bomb!!!" 
2.创建Bomb实例，延迟2s执行该方法
3.在explode方法执行会输出Bomb实例上的message属性
 */


function Bomb(message){
    this.message = message;
    // this.explode = setTimeout(function(){
    //     console.log(message);
    // },2000)
}
//函数的方法定义在prototype上，这样可以使var的对象也可以调用该方法
Bomb.prototype.explode = function(message){
    console.log(this);
    console.log(this.message);
}
var b = new Bomb("bomb!!!");
//setTimeout(b.explode,2000);//undefined   原因：其中有函数的嵌套，setTimeout是一个方法，explode也是一个方法，嵌套会改变this的指向。

//解决方法bind绑定，让this指向该对象
setTimeout(b.explode.bind(b),2000);