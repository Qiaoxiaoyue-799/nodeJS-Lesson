const http = require("http");
//文件读取：
const fs = require("fs");
//资源路径：
const path = require("path");
const url = require("url");
http.createServer(function(req,res){
    var urlObj = url.parse(req.url);//注意url.parse（）
    var pathName = urlObj.pathname;
    if(pathName == "/"){
        showIndex(res);
    }
    else if(pathName == "/list"){
        showList(res);
    }

    // 查找第一次出现的索引位置
    else if(pathName=="/1.png"){
        showImg(res);
    }

    else if(pathName == "/upload" && req.method == "POST"){
        console.log("upload");
        uploadFile(req,res);
    }
    //请求图片
    else if(pathName.indexOf("/upload") >= 0 && req.method == "GET"){
        var imgSrc = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgSrc);
        res.writeHead(200,{"content-type":"image/png"});
        res.end(imgContent);
    }
    //ajax发起的getlist请求
    else if(pathName == "/getlist"){
        var files = fs.readdirSync(__dirname + "/upload");
        var fileStr = JSON.stringify(files);
        res.end(fileStr);
    }

}).listen(8081);
function showIndex(res){
    var indexPath = path.join(__dirname,"/index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}


function showImg(res){
    var imgPath = path.join(__dirname,"/1.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imgContent);
}


function showList(res){
    var listPath = path.join(__dirname,"/list.html");
    var listContent = fs.readFileSync(listPath);//同步读取
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(listContent);
}

function uploadFile(req,res){
    console.log("enter");
    var dataStr = "";
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr += chunk;
    })
    req.on("end",function(){
        console.log(dataStr);
        var totalArr = dataStr.split('\r\n');
        var bufArr = totalArr.slice(4,totalArr.length-2);
        var imgData = "";
        for(var i=0;i<bufArr.length;i++){
            imgData += bufArr[i];
        }
        var buf=Buffer.from(imgData,"binary");
        var timer=(new Date().getTime());
        fs.writeFileSync(__dirname + "\\upload\\"+timer+".png",imgData,{"encoding":"binary"});
        //fs.writeFileSync(__dirname + "\\upload\\2.png",imgData,{"encoding":"binary"});
        res.end("submit success");
    })
}


console.log("listenging 8081")

/**
 * 发起请求：
    地址栏中发起http请求     get请求
    超链接发起http      get请求
    提交表单发起请求  get请求 post请求
    ajax发起请求  get请求 post请求
    <link href>    get请求
    <script src>  get请求
    <img src>   get请求

    get请求，向服务传递的参数都在url里面呈现
    http://localhost:8081/detail?newId=1&newType=1
    var urlObj = url.parse(req.url,true);
    urlObj.query.newId

    post请求，数据存储在请求体里面,提交表单
    req.on("data",function(chunk){})
    req.on("end",function(){})
 */