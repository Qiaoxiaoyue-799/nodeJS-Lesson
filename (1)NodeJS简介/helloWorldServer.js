const http = require("http");
//创建服务,回调函数(请求对象，响应对象)
var server = http.createServer(function(req,res){
    res.write("hello world!");
    res.end();
});

server.listen(8080);
console.log("server is listening 8080");
