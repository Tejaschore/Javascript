
const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter( (nums) => nums >= 5)

// console.log(newNums);

const newNums = myNums.filter( (nums) => {
    return nums >= 5
})


console.log(newNums);