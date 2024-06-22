const user = {
    username : "Tejas",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function add(){
//     let usernamne = "tejas"
//     console.log(this.usernamne);
// }
// add()

// const add1 = function (){
//     let usernamne = "tejas"
//     console.log(this.usernamne);
// }
// add1()


// Arrow function

 const add1 = () => {
        let usernamne = "tejas"
        console.log(this.usernamne);
    }
    add1()
