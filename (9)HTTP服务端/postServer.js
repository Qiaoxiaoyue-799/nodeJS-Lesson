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
    else if(urlObj.pathname == "/pf"){
        var dataStr = "";
        //存储数据
        req.on("data",function(chunk){
            dataStr+=chunk;
        })
        //输出数据
        req.on("end",function(){
            //console.log(dataStr);//为了转换成对象引入querystring模块
            //输出name属性值的内容
            //eg:username=12&pwd=12  键名=键值&键名=键值...
            var dataObj = querystring.parse(dataStr);
            //console.log(dataObj);
            /**
             [Object: null prototype] {
                username: '1194110992@qq.com',
                pwd: '123456'
            }
             */
            //美化：
            res.end("username:"+dataObj.username+"pwd:"+dataObj.pwd);
            //username:1194110992@qq.compwd:980504
        })
    }
}).listen(8082);
console.log("listening 8082");