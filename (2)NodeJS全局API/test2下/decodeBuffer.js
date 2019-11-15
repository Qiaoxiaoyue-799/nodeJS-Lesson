/**
    1.现有base64编码字符串var base64 = "emhhbmdzYW46MTIzNDU2";
    2.把该base64编码字符串转化为utf8编码字符串，并将还原后的字符串打印到控制台上。
*/

var base64 = "emhhbmdzYW46MTIzNDU2";
var buf = Buffer.from(base64,"base64");
console.log(buf.toString("utf8"));//zhangsan:123456