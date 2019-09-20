//初始化一个Buffer
//var buf = Buffer.alloc(大小);  默认填充0
var buf = Buffer.alloc(10);
console.log(buf);
//将一个utf-8编码的字符串转化为buffer数据
var buf1 = Buffer.from("hello","utf-8");
console.log(buf1);
//基本的加密处理
console.log(buf1.toString("base64"));//将结果通过转化也可以还原hello

var base64Str = buf1.toString("base64");
var buf2 = Buffer.from(base64Str,"base64");
console.log(buf2.toString("utf8"));
