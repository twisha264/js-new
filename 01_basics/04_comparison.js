// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/* It's true because an equality check == and comaprisons > < >= <= work 
differently. Comparisons convert null to a number, treating it as 0. */

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === strict check, it also checks datatype and value both

console.log("2" == 2);
console.log("2" === 2);