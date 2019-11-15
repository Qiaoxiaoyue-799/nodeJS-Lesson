var timerId = setTimeout(function(){
    console.log("over");
},2000);
// 取消延迟执行，不可取消
// clearTimeout(timerId);
// 阻止延时执行或者定时执行，回调函数的执行
 timerId.unref();
 timerId.ref();//恢复
 