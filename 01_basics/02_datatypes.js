let stringy = "hello"
let num = 12
let bool = false

let undef = undefined
let weirdType = null


//                  'typeof(bool)' and 'typeof bool' return same result

console.log(typeof undef);      // undefined is a 'undefined' type dataset
console.log(typeof(weirdType)) // null is a 'object' type dataset


const id1 = Symbol("12")
const id2 = Symbol("12")

console.log(typeof(id1));

console.log(id1 === id2);   // false even tho both symbol has same value input, creates a unique value for each variable
