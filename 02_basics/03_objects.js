// singleton
// Object.create

// ****** object literals *****

const mySym = Symbol("key1")

const JsUser = {
  name: "abcfgd",
  "full name" : "Abcfgd Hdgdsh",
  [mySym]: "key1",
  age: 20,
  location: "Jaipur",
  email: "abcfgd@email.com",
  isLoggedIn: false,
  lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "45ryfgh@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "123etdf@email.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






