const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
//将文件内容复制草filePath1中
var filePath1 = path.join(__dirname,"/file1.txt");
var fileContent = fs.readFileSync(filePath);
var statObj = fs.statSync(filePath);
//写入文件内容
fs.writeFileSync(filePath1,fileContent.toString());
//写入文件权限
fs.chmodSync(filePath1,statObj.mode);
//结果是创建了file1文件，且复制了file.txt的内容。