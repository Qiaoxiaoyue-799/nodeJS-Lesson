/*考点：http请求两种方式： */

const http = require("http");
const server = new http.server();
server.listen(8081);
server.on("request",function(req,res){
    res.end("hello node");
})