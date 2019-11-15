const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file1.txt");
//指向一个文件unlinkSync(文件路径)，删除文件
fs.unlinkSync(filePath);//file1.txt被删除了
