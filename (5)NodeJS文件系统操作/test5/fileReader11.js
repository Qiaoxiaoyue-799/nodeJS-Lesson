const http = require("http");
const fs = require("fs");
const path = require("path");
var server = http.createServer(function(req,res){
    var arg1 = process.argv[2];
    var str = __dirname + "//" + arg1;
    var filePath = path.join(str);
    console.log(filePath);
    //判断文件或文件夹是否存在
    // console.log(fs.existsSync(filePath));//true
    var f = fs.existsSync(filePath);
    console.log(f);
    if(f == true){
        fs.readFile(filePath,function(err,data){
            if(err){
                console.log("错误！");
                res.end();
            }
            else{
                console.log(data.toString("utf8"));
                res.end();
            }
        });
    }
    else{
        console.log("该文件不存在");
    }
    res.end();
}).listen(8081);
