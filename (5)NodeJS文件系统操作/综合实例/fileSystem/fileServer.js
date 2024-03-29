const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
debugger;

http.createServer(function(req,res){
    debugger;
    // var urlObj = url.parse(req.url);//转成对象结构
    var urlObj = url.parse(req.url,true);
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
        case '/delfile':
            delFile(urlObj,res);
            break;
        case "/getfile":
            getFile(urlObj,res);
            break;
        case "/getchildfile":
            getChildFile(urlObj,res);
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


var list = [];
function showList(res){
    list = [];
    var filePath = path.join(__dirname,"fileDir");
    var files = fs.readdirSync(filePath);
    for(var i=0;i<files.length;i++){
        var fileObj={};
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
        fileObj.createTime=birthTimer.getFullYear()+"-"+(birthTimer.getMonth()+
        "-"+birthTimer.getDate()+birthTimer.getHours()+
        ":"+birthTimer.getMinutes()+":"+birthTimer.getSeconds());
        list.push(fileObj);
    }
    var listStr = JSON.stringify(list);
    res.writeHead(200,{"Content-Type":"text/explain"});
    res.write(listStr);
    res.end();
    // console.log(files);
}

function delFile(urlObj,res){
    // console.log(urlObj);
    var timer = urlObj.query.createTime;
    for(var i=0;i<list.length;i++){
        if(list[i].createTime == timer){
            deleteRealFile(list[i].fileName);
        }
    }
    res.end("success");
}

function deleteRealFile(fileName){
    var filePath = path.join(__dirname,"fileDir",fileName);
    var statObj = fs.statSync(filePath);
    if(statObj.isFile()){
        fs.unlinkSync(filePath);
    }
    //判断是否为文件夹
    else if(statObj.isDirectory()){
        delDir(filePath);
    }
    console.log(fileName);
}

function delDir(filePath){
    var files = fs.readFileSync();
    for(var i=0;i<files.length;i++){
        var childPath = path.join(filePath,files[i]);
        var childStatObj = fs.statSync(childPath);
        if(childStatObj.isFile()){
            fs.unlinkSync(childPath);
        }
        else if(childStatObj.isDirectory()){
            delDir(childPath);
        }
    }
    fs.rmdirSync();
}

function getFile(urlObj,res){
    var createTime = urlObj.query.createtime;
    // console.log("123");
    for(var i=0;i<list.length;i++){
        if(list[i].createTime == createTime){
            showContent(list[i].fileName,res);
        }
    }
}

function showContent(fileName,res){
    // console.log("1234");
    // console.log(fileName);
    var filePath = path.join(__dirname,"fileDir",fileName);
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.end(data);
        }
    })
}

function getChildFile(urlObj,res){
    // console.log("56120");
    var timer = urlObj.query.createtime;
    for(var i=0;i<list.length;i++){
        if(list[i].createTime == timer){
            getChildList(list[i].fileName,res);
        }
    }
    // console.log("进入getChildFile");
}

function getChildList(fileName,res){
    var filePath = path.join(__dirname,"fileDir",fileName);
    var files = fs.readdirSync(filePath);
    var childList=[];
    for(var i =0;i<files.length;i++){
        var fileObj={};
        var statObj = fs.statSync(path.join(filePath,files[i]));
        if(statObj.isFile()){
            fileObj.fileType="file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType="folder";
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime = birthTimer.getFullYear()+"-"+(birthTimer.getMonth()+
        "-"+birthTimer.getDate()+birthTimer.getHours()+
        ":"+birthTimer.getMinutes()+":"+birthTimer.getSeconds());
        childList.push(fileObj);
    }
    var childStr = JSON.stringify(childList);
    res.end(childStr);
}