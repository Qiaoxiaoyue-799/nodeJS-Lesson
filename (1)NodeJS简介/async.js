//异步操作，不会阻塞程序的执行
/*
    1.营业厅排队办理业务，应用程序执行的阻塞
    2.取号办理业务，应用程序执行的异步操作
    3.
*/
setTimeout(function(){
    console.log("异步执行");
},0)
console.log("main");
/*
PS F:\学科资料\node.js> cd 实验一
PS F:\学科资料\node.js\实验一> node async.js
main    
异步执行
*/