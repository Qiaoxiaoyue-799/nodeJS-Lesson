const fs=require("fs");
/**
 * try catch只能捕获同步代码中的异常
 */


try {
    //fs.show();
    fs.readFile(__dirname,function(err,data){
        if(err){
            console.log("error");
        }
        else{
            console.log(data);
        }
    })
} catch (error) {
    console.log(error.message);
    
}//检测try中的代码有没有异常，在catch中捕获

process.on("uncaughtException",function(err){
    if(err){
        console.log(err);
    }
})
