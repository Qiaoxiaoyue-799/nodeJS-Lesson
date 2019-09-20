//阻塞 或者  同步执行
const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
var fileContent = fs.readFileSync(filePath);//sync表示同步
console.log(fileContent.toString());
console.log("end!");

