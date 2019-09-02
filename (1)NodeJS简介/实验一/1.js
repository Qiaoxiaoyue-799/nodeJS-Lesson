const http = require("http");
//创建服务,回调函数(请求对象，响应对象)
var server = http.createServer(function(req,res){
    res.write("hello world");
    res.end();
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