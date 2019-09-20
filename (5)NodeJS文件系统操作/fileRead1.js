const fs = require("fs");
const path = require("path");
console.time("test");

console.time("test1");
var filePath = path.join(__dirname,"/file.txt");
var fileContent = fs.readFileSync(filePath);//带readFileSync都是同步读取。
console.log(fileContent.toString());
console.timeEnd("test1");

console.time("test2");
var filePath1 = path.join(__dirname,"/file1.txt");
var fileContent1 = fs.readFileSync(filePath1);
console.log(fileContent1.toString());
console.timeEnd("test2");

console.log("read end");
console.timeEnd("test");

/**
这是文件的内容
test1: 11.720ms
这是第二个文件内容
test2: 1.903ms
read end
test: 20.370ms
 */