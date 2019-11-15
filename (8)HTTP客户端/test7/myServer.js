const http = require("http");
http.createServer(function(req,res){
    var strData = "";
    req.on("data",function(chunk){
        strData += chunk;
    }) 
    req.on("end",function(){
        console.log(strData);
    })
}).listen(8081);
console.log("listening 8081");

//拆分终端
//先运行myServer.js
//再运行clientPost.js  (传两个参数)
