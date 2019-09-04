var arg1 = process.argv[2];
if(arg1 == "e"){
    process.exit();//表示退出当前进程。
}
/**
 PS F:\study\node.js\nodeJS-Lesson\LS3> node processExit.js e
 */
else if(arg1 == "k"){
    process.kill(process.pid);
}
//PS F:\study\node.js\nodeJS-Lesson\LS3> node processExit.js k
else{
    setTimeout(function(){
        console.log("延迟结束");
    },5000)
}
/**
 PS F:\study\node.js\nodeJS-Lesson\LS3> node processExit.js e1
延迟结束
 */