/**
    1.创建服务监听8081窗口，浏览器发起请求时，服务器响应html代码到浏览器。
    2.服务器响应的html代码中包含一张照片，该图片数据为dataURi数据，即buffer的base64编码的图片数据。
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"./1.jpg");
    var imgBuffer = fs.readFileSync(imgPath);
    var base64Data = imgBuffer.toString("base64");
    // console.log(base64Data);
    var imgSrc = "data:image/jpg; base64," + base64Data;//获取图片路径
    var htmlStr = "<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'/></body>"+"<html>";
    res.writeHead(200,{"Content-TYPE":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);
console.log("server is listening 8081");