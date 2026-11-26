"use atrict"; // treats all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser

// code readability should be high

let name = "hello"
let age = "19"
let isLoggedIn = false
let state;

// Primitive:
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not assigned
// symbol => unique

// object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// ******* Summary *******

// *** Primitive - Call by Value ***

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn2 = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 3456897125634523894545n

// *** Reference (Non Primitive) ***

// Array, Object, Functions 

const heroes = ["abc", "defew", "ghijfk"]
let myObj = {
  name: "hello",
  age: 45,
}

const myFunction = function(){
  console.log("Hello World");
}

// console.log(typeof heroes);

// ************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "abcdefg"

let anotherName = myYoutubename
anotherName = "ghijkl"

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl.com"
}

let userTwo = userOne

userTwo.email = "ghfjidn@email.com"

console.log(userOne.email);
console.log(userTwo.email);
