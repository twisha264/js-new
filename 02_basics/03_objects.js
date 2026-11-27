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

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// *************** Objects Part-Two *****************

// const appUser = new Object() // singleton object
const appUser = {} // non-singleton object
appUser.id = "123abc"
appUser.name = "gefdh"
appUser.isLoggedIn = false

// console.log(appUser);

const regUser = {
  email : "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "fname",
      lastname: "lname"
    }
  }
}
// console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} //incorrect
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "t@gmail.com"
  },
  {
    id: 1,
    email: "t@gmail.com"
  },
  {
    id: 1,
    email: "t@gmail.com"
  },
]

// console.log(appUser);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty('isLoggedIn'));

// ************** Objects Part-Three ****************

const course = {
  coursename: "Js in Hindi",
  price: "999",
  courseInstructor: "abcdfge"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
 console.log(instructor); 

 
