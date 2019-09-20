const http = require("http");
//创建服务,回调函数(请求对象，响应对象)
var server = http.createServer(function(req,res){
    //浏览器实现之前必须在终端先执行，每当修改一次都要再次在终端执行一遍。node 名.js
    res.writeHead(200,{"Content-Type":"text/html"});//在浏览器中以html形式解析
    //res.writeHead(200,{"Content-Type":"text/plain"});//以纯文本形式解析
    res.write("<h1>hello world</h1>");
    res.end();//响应结束
});

server.listen(8081);
console.log("server is listening 8081");

/* 
1.shift+右击 打开PowerShell窗口

2.编译node.js文件：
PS F:\学科资料\node.js\实验一> node 名.js

3.每次修改了js文件后，需要重新执行（ctrl+c退出） node 名.js
//快捷键:直接按向上箭头即可复制
//在网页地址输入localhost:8081，可获得内容。

4.在node中的js文件，必须得编译才能执行。

5.webstorm（另一种node的支持方法）
*/


/*
    http协议:超文本传输协议(HTTP)是一种通信协议，它允许将超文本标记语言(HTML)文档从Web服务器传送到客户端的浏览器。
    协议结构:请求报文、响应报文。
    协议的请求响应过程
    状态码:
    200 - 请求成功
    301 - 资源（网页等）被永久转移到其它URL
    404 - 请求的资源（网页等）不存在
    500 - 内部服务器错误
*/