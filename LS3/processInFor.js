/**
 * process.pid进程的id值，唯一标识。
 */
console.log(process.pid);//35504
//process.platform程序运行所在的操作系统平台
console.log(process.platform);//win32
/*
    process.argv
    1.获取命令行参数
    2.是一个数组，默认会有两个参数表
    3.process.argv[0]表示的node的可执行文件所在路径
    4.process.argv[1]表示当前执行脚本文件所在的路径
    5.process.argv[2]表示传入的命令行参数
    6.process.cwd()表示当前脚本执行所在路径
*/
console.log(process.argv);
/*
[
  'C:\\node.js\\node.exe',
  'F:\\study\\node.js\\nodeJS-Lesson\\LS3\\processInFor.js'
]
 */