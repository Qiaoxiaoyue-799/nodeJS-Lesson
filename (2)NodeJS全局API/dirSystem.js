const http = require("http");
const fs = require("fs");
var server = http.createServer(function(req,res){
    var sys = process.platform;
    //process.platform得到当前程序执行的操作系统
    console.log(sys);//win32
    switch(sys){
        case "linux":
            htmlPath = __dirname + "/view/index.html";//linux系统斜线方向是/
            break;
        case "win32":
            htmlPath = __dirname + "\\view\\index.html";
            break;
        default:
            console.log("unknown system");
            break;
    }


    var htmlPath = __dirname + "\\view\\index.html";
    console.log(htmlPath);
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
    console.log(htmlContent);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});

server.listen(8082);
console.log("server is listening 8082");



