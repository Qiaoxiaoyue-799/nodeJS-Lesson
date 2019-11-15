const http = require("http");
const querystring = require("querystring");

var options = {
    host:"localhost",//地址
    port:8081,//端口
    method:"post"//发送请求
};

//命令行参数
var userName = process.argv[2];
var pwd = process.argv[3];
var postData = {userName:userName,pwd:pwd};

postData = querystring.stringify(postData);//以字符串形式传输
//回调函数
var req = http.request(options,function(res){

})
req.write(postData);
req.end();