const fs = require("fs");
const path = require("path");
fs.mkdirSync("hello");
var list = fs.readdirSync(__dirname);
console.log(list);
//创建了文件夹hello

//把node文件夹中文件读出
var files = fs.readdirSync(path.join(__dirname,"/node"))
fs.unlinkSync(path.join(__dirname,"/node/"+files[0]));

//removedirectory
fs.rmdirSync(path.join(__dirname,"/node"));//直接移除文件夹node  报错，因为node文件夹不为空。即不能直接移除非空文件夹。
//应将该文件夹中文件一起删除