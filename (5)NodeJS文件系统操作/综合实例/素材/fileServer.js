const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    switch(pathName){
        //http://localhost:8081/
        case '/':
            showIndex(res);
            break;
            /*
                网页文件在浏览器解析的过程中，如果需要一些资源,会再次向服务器发出请求
                图片，音频，视频，js脚本，css文件
            */
        case '/1.png':
            showImage(res);
            break;
        case '/getfilelist':
            showList(res);
            break;
    }

}).listen(8081);
console.log("listening");
function showIndex(res){
    var indexPath = path.join(__dirname,"index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}

function showImage(res){
    var imgPath = path.join(__dirname,"1.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/html"});
    res.write(imgContent);
    res.end();
}

function showList(res){
    var filePath = path.join(__dirname,"fileDir");
    var files = fs.readFileSync(filePath);
    var list = [];
    for(var i=0;i<files.length;i++){
        var childPath = path.join(filePath,files[i]);
        var statObj = fs.statSync(childPath);
        //console.log(statObj);
        if(statObj.isFile()){
            fileObj.fileType="file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType = "folder";
        }
        fileObj.fileName=files[i];
        fileObj.fileSize=statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime=birthTimer.getFullYear()+"-"+(birthTimer.getFullMonth()+"-"+birthTimer.getDate()+birthTimer.getHours()+":"+birthTimer.getMinutes()+":"+birthTimer.getSeconds());
        list.push(fileObj);
    }
    var listStr = JSON.stringify();
    res.writeHead(200,{"Content-Type":"text/explain"});

    
    res.write(listStr);
    res.end();
    // console.log(files);
}