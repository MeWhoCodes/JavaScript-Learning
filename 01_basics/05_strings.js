let name = "Bob"
console.log(name[1]);

let age = 30
console.log("My name is " + name + "and my age is: "+ age); // worst methond anyone can use 🙄
//instead we do:
console.log(`My name is ${name} and i am ${age} yrs old ☺️`)

//another cool method to define string:
const gameName = new String("Gurobi") // this gives many new properties which as this is a object data type
console.log(gameName,typeof gameName);
gameName.genre = "RPG" // Yes, objects can store new id
console.log(gameName);
 