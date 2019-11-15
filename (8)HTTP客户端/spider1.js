const cheerio = require("cheerio");
const $ = cheerio.load("<ul><li>hello spider</li></ul>");
$("ul").append("<li>li node</li>");
//console.log($("ul").html());
/*
<li>hello spider</li><li>li node</li>
*/

$("li").each(function(index,el){
    console.log($(this).text());
})
/*
hello spider
li node
*/