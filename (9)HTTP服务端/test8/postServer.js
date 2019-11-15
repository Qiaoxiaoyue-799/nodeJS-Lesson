const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    if(urlObj.pathname == "/"){
        var fileContent = fs.readFileSync("postform.html");
        res.writeHead(200,{"Content-TYPE":"text/html;charset=utf-8"});
        res.end(fileContent);
    }
    else if(urlObj.pathname == "/img"){
        var dataStr = "";
        //存储数据
        req.on("data",function(chunk){
            dataStr+=chunk;
        })
        //输出数据
        req.on("end",function(){
            var dataObj = querystring.parse(dataStr);
            res.end("username:"+dataObj.username+"pwd:"+dataObj.pwd);
        })
    }
}).listen(8082);
console.log("listening 8082");