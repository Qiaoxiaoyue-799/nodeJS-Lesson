const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");
var writeStream = fs.createWriteStream(filePath);
writeStream.write("hello");//把该内容写入file.txt中
writeStream.end();