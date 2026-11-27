const user = {
  username: "defgh",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function fone(){
//   let username = "restuv"
//   console.log(this.username);
// }
// fone()

// const ftwo = function(){
//   let username = "restuv"
//   console.log(this.username);
// }
// ftwo()

// const ftwo = () => {
//   let username = "restuv"
//   console.log(this);
// }
// ftwo()

// ************* Arrow Function **************
// Basic Arrow Function
// const addTwo = (num1, num2) => {
//   return num1, num2
// }

// Implicit Return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4));