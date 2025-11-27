//PRIMITIVE DATATYPES-----------------------------------

let stringy = "hello"
let num = 12
let bool = false

let undef = undefined
let nullType = null


//                  'typeof(bool)' and 'typeof bool' return same result

console.log(typeof undef);      // undefined is a 'undefined' type dataset
console.log(typeof(nullType)) // null is a 'object' type dataset


const id1 = Symbol("12")
const id2 = Symbol("12")

console.log(typeof(id1));

console.log(id1 === id2);   // false even tho both symbol has same value input, creates a unique value for each variable


//NON PRIMITIVE DATATYPES-----------------------------------
const arrays = ["capybara","panda","cat"]
console.log(arrays);

let myobj = {name:"Gojo",age:22} // object data type
console.log(myobj);

// will get back to functions later on..heres a glance
const myfunc = function(){
    console.log("yay the function was run")
}
 myfunc()

