const tinderUser = {}

tinderUser.id = 1001
tinderUser.name = "tejas"
tinderUser.age = 24

// console.log(tinderUser);

const regularUser = {
    email : "tejas@gmail.com",
    fullName: {
        userFullName:{
            firstName:"Tejas",
            lastName:"chore"
        }
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 =  Object.assign({},obj1,obj2) //{} target and source
// const obj3 = {obj1,obj2}
// console.log(obj3);

const obj4 = {...obj1,...obj2}
// console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));