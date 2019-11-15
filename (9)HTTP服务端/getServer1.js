/**
 * 请求localhost:8081/
 * 响应的是一个HTML页面，页面里面是一个超链接
 * <a href='localhost:8081/new?newId=12&newType=1'>新闻</a>
 * 点击超链接时在控制台输出发起请求的资源路径和传递了参数
 */
const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/"){
        res.writeHead(200,{"Content-TYPE":"text/html;charset=utf-8"});
        res.end("<a href='http://localhost:8081/new?newId=12&newType=1'>新闻</a>");
    }
    else if(urlObj.pathname == "/new"){
        console.log(urlObj.pathname);
        console.log(urlObj.query.newId);
        console.log(urlObj.query.newType);
        res.end();
    }
    
}).listen(8081);
console.log("server is listening 8081");