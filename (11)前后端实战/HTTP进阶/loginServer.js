const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const querystring = require("querystring");

http.createServer(function(req,res){
    //请求资源路径
    var urlObj = url.parse(req.url,true);
    switch(urlObj.pathname){
        case "/login":
            loginIn(req,res);
            break;
    }
}).listen(8081);
var logincount = 0;
function loginIn(req,res){
    if(req.method=="POST"){
        var formData = "";
        req.on("data",function(chunk){
            formData+=chunk;
        })
        req.on("end",function(){
            var formObj = querystring.parse(formData);
            if(formObj.username=="zhangsan" && formObj.pwd == "123"){
                logincount=logincount+1;
                res.setHeader("Set-Cookie","username=zhangsan,max-age=60000");
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"}); 
                res.write(formObj.username+"这是您第"+logincount.toString()+"次登录");
                res.end();
            }
            else{
                // console.log("enter error");
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"}); 
                res.write("用户名、密码错误");
                res.end();
            }
            // console.log(formData);
        })
    }
    else{
        var loginPath=path.join(__dirname,"/login.html");
        var loginContent = fs.readFileSync(loginPath);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(loginContent);
        res.end();
    }
}

console.log("listening 8081");
