let name = "Bob"
console.log(name[1]);

let age = 30
console.log("My name is " + name + "and my age is: "+ age); // worst methond anyone can use 🙄
//instead we do:
console.log(`My name is ${name} and i am ${age} yrs old ☺️`)

//another cool method to define string:
const gameName = new String("Gurobi: The Night knight") // this gives many new properties which as this is a object data type
console.log(gameName,typeof gameName);
gameName.genre = "RPG" // Yes, objects can store new id
console.log(gameName);

console.log();

console.log(gameName.length);
console.log(gameName.slice(0,5)); // 5 is not included
console.log(gameName.slice(5)); // instead of first 5 characters, returns 5th character and beyond
console.log(gameName.slice(-5));
 
console.log(gameName.substring(0,20)) // works the same was as slice but don'est take neg. values

console.log("---------------------------");


console.log(gameName.charAt(4)); // returns the 4th character

console.log("---------------------------");


console.log(gameName.indexOf(":")); // returns index no. of the chatacter inputed


console.log("---------------------------");

a = "    Dev     "
console.log(a.trim()) // removes white spaces and /n from both ends
console.log("---------------------------");

const url = "https://mangapanels.com/opm%20chapter"

console.log(`The original url: ${url} vs the edited one: ${url,url.replace("%20","-20-")}`); //find and replace in string
console.log(url.includes("opm")); //returns whether the string inputed is in the strn or not as form of true or false

