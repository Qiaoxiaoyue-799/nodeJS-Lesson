const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const querystring = require("querystring");

http.createServer(function(req,res){
    //请求资源路径
    var urlObj = url.parse(req.url,true);
    switch(urlObj.pathname){
        case "/":
            showLogin(res);
            break;
        case "/login":
            loginIn(req,res);
            break;
        case "/home":
            showHome(req,res);
            break;
    }
}).listen(8081);
var logincount = 0;
function showLogin(res){
    var loginPath=path.join(__dirname,"/login.html");
    var loginContent = fs.readFileSync(loginPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(loginContent);
    res.end();
}

function loginIn(req,res){
    var formData = "";
    req.on("data",function(chunk){
        formData+=chunk;
    })
    req.on("end",function(){
        var formObj = querystring.parse(formData);
        if(formObj.username=="zhangsan" && formObj.pwd == "123"){
            logincount=logincount+1;
            // res.setHeader("Set-Cookie","username=zhangsan;max-age=60000");//max-age60秒以后就会自动释放
            res.setHeader("Set-Cookie","username=zhangsan");//max-age60秒以后就会自动释放
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"}); 
            res.write(formObj.username+"这是您第"+logincount.toString()+"次登录");
            res.end();
        }
        else{
            // console.log("enter error");
            res.end("login error");
        }
        // console.log(formData);
    })
}

function showHome(req,res){
    //判断之前登陆是否成功
    //获取之前请求对象的cookie
    // console.log(req.headers["cookie"]);
    var cookie=req.headers["cookie"];
    if(cookie == undefined){
        showLogin(res);
    }
    else if(cookie.indexOf("username=")>=0){
        res.end("home Page");
    }
    else{
        showLogin(res);
    }
}



console.log("listening 8081");
