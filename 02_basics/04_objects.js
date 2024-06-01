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

console.log(regularUser.email);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);