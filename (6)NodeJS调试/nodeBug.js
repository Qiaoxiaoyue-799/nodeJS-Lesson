//va a = 1; //SyntaxError  语法错误



//console.log(a);
/*
ReferenceError  引用错误:在某一个位置使用未定义的变量
*/



/*
http.createServer(function(){

}).listen(8081);
// referenceError http is not defined
*/



/*
const http = require("http");
http.createServer(function(){

}).listen(dscx);
// Error 
*/



//特定方法的参数必须是特定类型的变量
/*
const http = require("http");
http.createServer(function(req,res){
    req.write();
}).listen(8081);
//类型错误TypeError:req.write is not function
*/



/*
var username = "zhangsan";
username();
//TypeError:username is not function
*/



/*
const fs = require("fs");
fs.readFileSync(true);
//TypeError:path must be a string or buffer
*/



//RangeError 范围错误 new Array(10)



/**
    1.debugger设置断点
    2.启动  node inspect 文件
    3.c  继续执行  s  o
    4.watch('变量名');
    5.watchers查看监听的变量
    6.unwatch('变量名')
    7.restart 重启脚本
 */