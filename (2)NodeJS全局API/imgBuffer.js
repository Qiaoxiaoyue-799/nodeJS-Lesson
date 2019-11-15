const http = require("http");
const fs = require("fs");
const path = require("path");
//图片路径用imgSrc拼接合成
//1.将base64字符编码直接存到网页中，浏览器可以识别该编码，将该编码转化为一个图片显示
//2.适用于图片存储空间较小的情况(大图不建议使用该方法)，可以减少http请求数量，提高页面的性能。
http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"/1.jpg");
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