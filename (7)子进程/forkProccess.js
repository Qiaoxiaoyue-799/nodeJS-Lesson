/**
 * fork()专门用来启动node进程
 * 
 */
const cp = require("child_process");

var fork1 = cp.fork("childProcess1.js",["javascript"]);

fork1.on("close",function(chunk){
    console.log(chunk.toString());
})

fork1.send("parent");

fork1.on("message",function(msg){
    console.log(msg);
})
