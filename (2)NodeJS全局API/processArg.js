/*
    1.传入命令行参数，是一个算术运算式 1*2+3
    process.argv[2]
    2.程序将算术运算式计算得到结果，并且在控制台输出1*2+3=5。  eval()
    3.程序判断一下是否传入了命令行参数，如果没有传入控制输出，“命令行参数错误”。
 */

//自己写错的
//  var a = "1*2+3=";
//  if(a = ""){
//      console.log("命令行参数错误！")
//  }
//  else{
//     console.log(a + eval("1*2+3"));
//  }

var arg1 = process.argv[2];
if(arg1 == undefined){
    console.log("命令行参数错误！");
}
/**
 PS F:\study\node.js\nodeJS-Lesson\LS3> node processArg.js
命令行参数错误！
 */
else if(arg1 == "-help"){
    console.log("帮助：命令参数需为算术运算式");
}
/**
 PS F:\study\node.js\nodeJS-Lesson\LS3> node processArg.js -help
帮助：命令参数需为算术运算式
 */
else{
    var result = eval(arg1);
    console.log(arg1 + "=%s",result);
}
/**
 PS F:\study\node.js\nodeJS-Lesson\LS3> node processArg.js 1+3+5+97+255
1+3+5+97+255=361
 */





