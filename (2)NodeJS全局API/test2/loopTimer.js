var i = setInterval(function loop(){
    console.log('I will loop  forever');
},500);
var j = setTimeout(function(){
    console.log("Game Over");
    process.exit();
},5000);
