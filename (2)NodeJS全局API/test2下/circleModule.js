function circleFun(r){
    function circumference() {
        // var l = 2 * 3.14 *r;
        // console.log(l);
        return 2*Math.PI*r;
    };
    function area() {
        // var area = 3.14 * r * r;
        return Math.PI*r*r;
    }
    return {circumference:circumference,area:area};

}

module.exports = {
    // circumference:CircleFun.circumference,
    // area:CircleFun.area
    circleFun:circleFun
}