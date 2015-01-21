function sum(a, b){
    var sum = a + b;
    return sum;
}
var result1 = sum(3, 4);
console.log('result1', result1);

function sum(a, b){
    var sum = a() + b();
    return sum;
}

var result2 = sum(returnA, returnB);
console.log('result2', result2);


function returnA(){
    return 3;
}

function returnB(){
    return 4;
}
