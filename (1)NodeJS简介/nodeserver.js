//引入required模块
const http = require("http");
//实例化server
var server = new http.Server();
//server监听客户端的请求
server.on("request",function(req,res){
    res.end("hello world");
})
//server监听端口
server.listen(8082);
console.log("server is listenging 8082");

/* 
终端：

PS F:\学科资料\node.js> cd 实验一

PS F:\学科资料\node.js\实验一> node nodeserver.js
server is listenging 8082

*/