/**
  1.从命令行获取用户名、密码参数、先输出到控制台
  2.使用buffer的base64编码，将用户名、密码加密并输出到控制台
 */


var userName = process.argv[2];
var password = process.argv[3];
console.log("用户名："+userName,"密码："+password);
if(userName != undefined && password != undefined){
    var loginStr = userName + ":" +password;
    var buf1 = Buffer.from(loginStr,"utf-8");
    var base64Str = buf1.toString("base64");
    console.log("base64加密："+base64Str);
}
else{
    console.log("用户名密码不能为空");
}

/**
 
用户名：zhangsan 密码：123
base64加密：emhhbmdzYW46MTIz

 */