/**
1. 编写监听端口8080
2.通过文件路径API完成路径拼接访问view文件夹下html文件，将文件内容响应到客户端显示
3.在控制台输出拼接后的路径信息
 */


//1.引入http原生模块。    http为原生模块，可以直接require使用
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");//兼容性写法
//2.创建一个服务器,只要有http请求，访问端口，就会执行回调函数内容。
var server = http.createServer(function(req,res){
    //4.当客户端的http请求发起时，才会执行回调函数里面的内容。
    var urlObj = url.parse(req.url); 
    var urlPathName = urlObj.pathname;
    //根据资源路径，可以决定执行那一段代码
    if(urlPathName == "/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/"){
        //完成路径的拼接
        var htmlPath = __dirname + "\\view\\view.html";
        //var htmlPath = path.join(__dirname,"/view/view.html")
        var htmlContent = fs.readFileSync(htmlPath);//读取文件内容
        htmlContent = htmlContent.toString("utf8");//转换为utf8格式
        res.writeHead(200,{"Content-Type":"text/html"});//响应头，设置文本类型是html形式还是纯文本。
        res.write(htmlContent);
        //响应到客户端显示
        console.log(htmlContent);
        res.end();
    }

});
//3.服务监听一个端口8080
server.listen(8080);
console.log("server is listening 8080");
//4.浏览器向端口发出请求，执行2的回调函数。
//5.通过dirname读取出文件
