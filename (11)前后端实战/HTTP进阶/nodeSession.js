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
function showLogin(res){
    var loginPath=path.join(__dirname,"/login.html");
    var loginContent = fs.readFileSync(loginPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(loginContent);
    res.end();
}
//全局变量
var sessions={}; 
function loginIn(req,res){
    var formData = "";
    req.on("data",function(chunk){
        formData+=chunk;
    })
    req.on("end",function(){
        var formObj = querystring.parse(formData);
        if(formObj.username=="zhangsan" && formObj.pwd == "123"){
            var session = {
                sessionId:(new Date()).getTime() + Math.random(),
                exipire:(new Date()).getTime() + 3600000000,
                userName:"zhangsan"
            }
            sessions[session.sessionId] = session;
            res.setHeader("Set-Cookie","sessionId="+session.sessionId);
            res.end("login success!");
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
    var cookie=req.headers["cookie"];
    // console.log(req.headers["cookie"]);
    if(cookie == undefined){
        showLogin(res);
    }
    var cookieArr = cookie.split(";");
    var cookieObj = {};
    for(var i=0;i<cookieArr.length;i++){
        var cookiePair=cookieArr[i].split("=");
        //.trim()去掉空格
        cookieObj[cookiePair[0].trim()] = cookiePair[1];
    }
    console.log(cookieObj);
    //登陆成功sessions才会有内容
    var sessionId = cookieObj.sessionId;
    for(var key in sessions){
        if(key==sessionId){
            var session = sessions[key];
            console.log(session);
            if((new Date()).getTime() < session.exipire){
                console.log("enter if");
                res.end("home page");
            }
            else{
                console.log("enter else");
                showLogin(res);
            }
        }
    }
}



console.log("listening 8081");
