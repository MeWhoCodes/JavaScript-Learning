let score = "33"

console.log(typeof score);
console.log(score + score) // Adds as per rules of string datatype

score = Number(score) // Converts to number typeoff

console.log(typeof score)
console.log(score + score);



let weirdScore = "33a" // has 'a' char
let value = Number(weirdScore)
console.log("Now watch ts >")
console.log("Value is:",value)
console.log("But its typeof returns:", typeof(value))

/*

Number() will conver the following to following:

1. string => NaN or number if its convertable
2. bool => 0 or 1
3. undefine => NaN
4. Null => 0

*/
console.log("");


let bool = 1
bool = Boolean(bool) // now bool is 'false'


//****************************** Operations ******************************/

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); // ts proves JS can be choatic af so PLEASE USE PROPER BRACKETS

console.log();
console.log();

let gameCounter = 100
gameCounter++                     // incremented by one lol
console.log(gameCounter);
++gameCounter                      // looks same but they are different (prefix vs postfix)

/*
Prefix:
let x = 1
let y = x++            This stores x in y first and then x = x+1 so x = 2 and y = 1

let x = 1
let y = ++x            This first increments x and then stores it in y so x = 2 and y = 2
*/


