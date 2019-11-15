var i = 0;
console.log("Name:");
var i1,i2,i3,i4;
process.stdin.on("data",function(data){
    i++;
    if(i == 1){
        // console.log("Name:");
        i1 = data.toString();
        console.log("Email:");
    }
    else if(i == 2){
        i2 = data.toString();
        console.log("QQ:");
    }
    else if(i == 3){
        i3 = data.toString();
        console.log("Mobile");
    }
    else if(i == 4){
        i4 = data.toString();
        console.log(i1, i2);
        var j = {
            Name:i1,
            Email:i2,
            QQ:i3,
            Mobile:i4
        }
        console.log(j);
        process.exit();
    }
   
})