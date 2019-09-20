/**
 *  自定义模块，自定义js文件，通过require来引入
 *  require（相对路径）
 *  被引入模块通过module.exports来对外公布自己的一些方法或属性
 *  主模块可以访问被引入模块公布的方法和属性
 */

var child = require("./childModule.js");//同级目录，引入子模块。
//console.log(child);//{ sayHello: [Function: sayHello] }
child.sayHello();//Hello world
//child.showName();//报错，子模块没有该函数
//解决办法：在子模块的module中添加该函数再调用
child.showName();//zhangsan
