const http = require("http");
http.createServer(function(req,res){
    //res.writeHead(200,{"Content-Type":"text/html"});
    //处理数据长度，响应内容的字节长度
    // res.setHeader("Content-Length",Buffer.byteLength);
    res.setHeader("Content-Length",10);
    //服务端压缩方式设置
    // res.setHeader("Content-Encoding","gzip");
    //服务端的响应时间
    res.setHeader("Date",(new Date()).toLocaleString());

    res.setHeader("Set-Cookie","name=zhangsan");
    res.statusCode = 404;
    res.end("hello node");
}).listen(8081);
console.log("listening 8081");