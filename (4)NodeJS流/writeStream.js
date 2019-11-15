/**
 * source.pipe(destination);
 * pipe需要保证对象是可读流
 */

const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/stream.txt");
var writePath = path.join(__dirname,"/write.txt");
var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream(writePath);
readStream.pipe(writeStream);
//将stream.txt内容写入write.txt中