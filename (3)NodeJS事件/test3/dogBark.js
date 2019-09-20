const events = require("events");
const EventEmitter = events.EventEmitter;
function Dog(name,energy){
    // 1.执行一遍父构造函数，并且this指向是子构造函数的
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
    var that = this;
    var i = setInterval(function(){
        that.emit("bark");
        that.energy--;
        if(that.energy<0){
            // clearInterval(i);
            process.exit();
        }
    },1000);

}

Dog.prototype.__proto__ = EventEmitter.prototype;
var taidi = new Dog("taidi",4);
taidi.on("bark",function(){
    console.log(this.name + "barked!" + "energy:" + this.energy);
})
var zangao = new Dog("zangao",8);
zangao.on("bark",function(){
    console.log(this.name + "barked!" + "energy:" + this.energy);
})