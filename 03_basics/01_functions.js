
function myName(){

    console.log("T");
    console.log("E");
    console.log("J");
    console.log("A");
    console.log("S");
}

// myName()

function addTwoNumber(num1 , num2) {
    // let result = num1+num2
    // return result;
    return num1+num2
}

const result = addTwoNumber(5,4)
console.log("result:",result);

function loginUserMessage(username="sam"){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Tejas")); 

// console.log(loginUserMessage()); 

function calculateCartPrice(...item1) // use spread operator
 {
    return item1
}
// console.log(calculateCartPrice(10,50,100));

const user = {
    username1 : "Tejas",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username1} and price is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    username1:"sam",
    price:2001
})

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,20,300,400]));