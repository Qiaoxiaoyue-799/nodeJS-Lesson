const path = require("path");
const http = require("http");
const fs = require("fs");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }
            else{
                var str = data.toString();
            }
            res.end(str);
        })
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"content:Type":"text/html"})
            res.end("文件不存在");
        }
    }
    // res.end(str);
}).listen(8081);

/***
 * fs.readFile()是一个异步方法，执行到该句不会等待
 * 文件读取完成，就直接执行后面的语句
 * 回调函数是等到文件读取完成之后才执行
 */