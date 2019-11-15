const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    if(urlObj.pathname == "/"){
        var fileContent = fs.readFileSync("postFile.html");
        res.writeHead(200,{"Content-TYPE":"text/html;charset=utf-8"});
        res.end(fileContent);
    }
    else if(urlObj.pathname == "/upload"){
        var dataStr = "";
        req.setEncoding("binary");
        //存储数据
        req.on("data",function(chunk){
            dataStr+=chunk;
        })
        //输出数据
        req.on("end",function(){
            //为了提取图片二进制数据
            //console.log(dataStr);
            var dataArr = dataStr.split("\r\n");//以换行和回车符分隔
            //console.log(dataArr);
            var fileData=dataArr.slice(4,dataArr.length-2);//slice不包含最后一个位置
            // console.log(fileData);
            // var dataObj = querystring.parse(dataStr);
            // res.end("username:"+dataObj.username+"pwd:"+dataObj.pwd);
            fileData = fileData.join("\r\n");
            //console.log(fileData);
            var buf = Buffer.from(fileData,"binary");
            fs.writeFileSync("file.jpg",buf,{"encoding":"binary"});
            res.writeHead(200,{"Content-TYPE":"text/html;charset=utf-8"});
            res.write(fileData);
            res.end("提交成功");
        })
    }
}).listen(8081);
console.log("listening 8081");
