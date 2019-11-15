const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    /**
     * 哪些请求发起的是get请求
     * 1、点击超链接，默认是get请求
     * 2、地址栏通过网址请求
     * 3、通过ajax发起请求
     * 接收get请求的参数：
     * req.url(http.IncomingMessage.url)
     * 提取url上的有效数据，例如资源路径、参数
     * 可以借助url模块（原声模块），url/parse(req.url,true);
     */
    console.log(req.url);//端口以后的内容
    var urlObj = url.parse(req.url,true);



}).listen(8081);
console.log("server is listening 8081");