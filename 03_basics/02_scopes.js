var c =200

if (true) {
    let a=10
    const b = 20
    var c = 30
    
}

// console.log(a);
// console.log(b);
// console.log(c);

let a =1000

if (true) {
    let a=10
    const b = 20
    var c = 30
    console.log("Inner::",a);
}
//console.log(a);


console.log(addOne(5));
function addOne(num){
    return num + 1;
}
// console.log(addOne(5));

const addTwo = function (num) {
    
    return num +5;
}

console.log(addTwo(4));