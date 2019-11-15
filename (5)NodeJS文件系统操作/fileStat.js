const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
var statObj = fs.statSync(filePath);
console.log(statObj.isFile());//true
console.log(statObj.isDirectory());//false
console.log(statObj);
/**
 Stats {
  dev: 246155471,
  mode: 33206,
  nlink: 1,
  uid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 844424930183983,
  size: 21,
  blocks: 0,
  atimeMs: 1568679890106.6296,
  mtimeMs: 1568679159705.6746,
  ctimeMs: 1568679159705.6746,
  birthtimeMs: 1568679151942.0347,
  atime: 2019-09-17T00:24:50.107Z,
  mtime: 2019-09-17T00:12:39.706Z,
  ctime: 2019-09-17T00:12:39.706Z,
  birthtime: 2019-09-17T00:12:31.942Z
}
 */