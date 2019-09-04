function Bomb(message){
    this.message = message;
    this.explode = setTimeout(function(){
        console.log(message);
    },2000)
}
var b = new Bomb("bomb!!!");
console.log(b.explode);