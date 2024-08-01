//for

for(let i =0; i<10;i++){
    const element = i;
    

    if (element == 5) {
        // console.log("5 is an integer");
        
    }
    // console.log(element);
}

for(let i =0; i<= 10;i++){
    // console.log(`Outer loop value: ${i}`);

    for (let j = 0; j <=  10; j++) {
        // console.log(`Inner loop value: ${j} and Inner loop ${i}`);
        
        // console.log(i+'*' +j + ' = ' +i*j);
    }

}

let myArr = ["Tejas" , "sam","Ram", "Sia"]
// console.log(myArr.length);

for(let i = 0;i< myArr.length;i++){
    const element = myArr[i];
    // console.log(element);
}

//break and continue

for(let i =1; i<=10;i++){

    if(i == 5){
        console.log(`Detected ${i}`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for(let i =1; i<=10;i++){

    if(i == 5){
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}