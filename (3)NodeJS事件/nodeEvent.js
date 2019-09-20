//1.创建一个原生模块
const events = require("events");
//console.log(events);//是一个事件对象
/**
 
[Function: EventEmitter] {
  once: [Function: once],
  EventEmitter: [Circular],
  usingDomains: false,
  defaultMaxListeners: [Getter/Setter],
  init: [Function],
  listenerCount: [Function]
}

 */
//创建 eventEmitter 对象 
var eventEmitter = new events.EventEmitter();
//绑定事件及事件监听  on改成once那么回调函数只执行一次，第二次时emit函数不再执行
eventEmitter.once("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})
//触发事件
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello","node","good");