const cheerio = require("cheerio");
const $ = cheerio.load("<h1>hello spider</h1>");
$("h1").text("hello node");
console.log($("h1").html());
/*
hello node
*/
// console.log($.html());
/*
    <html><head></head><body><h1>hello node</h1></body></html>
*/
