//1.引入http原生模块。    http为原生模块，可以直接require使用
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
//2.创建一个服务器,只要有http请求，访问端口，就会执行回调函数内容。
var server = http.createServer(function(req,res){
    //res.end("接收到客户端请求");
    //4.当客户端的http请求发起时，才会执行回调函数里面的内容。
    //console.log(req.url);
    //req.url表示url地址中，端口以后的内容
    //http://.....com/s?id=45621305623
    ///s?id=45621305623
    //使用了url.parse将req.url转化为了对象,对象路径名称提取pathname
    var urlObj = url.parse(req.url); 
    var urlPathName = urlObj.pathname;
    console.log(urlPathName);//     /
    //根据资源路径，可以决定执行那一段代码
    if(urlPathName == "/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/"){
        var htmlPath = __dirname + "\\view\\index.html";
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent = htmlContent.toString("utf8");//转换为utf8格式
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
    // console.log(urlObj);
    // console.log(urlPathName);
    else if(urlPathName == "/js/index.js"){
        //页面自己执行localhost：8081/js/index.js
        //__dirname指正在执行js文件路径
        var jsPath = path.join(__dirname+"/js/index.js");//连接路径
        var jsContent = fs.readFileSync(jsPath);
        jsContent = jsContent.toString("utf8");
        console.log(jsContent);
        res.writeHead(200,{"Context-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
    }
});
//3.服务监听一个端口
server.listen(8084);
console.log("server is listening 8084");
//4.浏览器向端口发出请求，执行2的回调函数。
//5.通过dirname读取出文件

/*
在终端运行后在浏览器执行localhost：8081请求，urlPathName为/，页面执行html中的内容，
html页面自动解析src中的内容，urlPathName变为/js/index.js，页面执行js中的内容。
/favicon.ico为图标的自动执行内容。
回调函数共执行2次第一次8081请求html，浏览器解析html代码，发现src资源路径。第二次页面请求html中src的js内容，浏览器解析代码。
*/
