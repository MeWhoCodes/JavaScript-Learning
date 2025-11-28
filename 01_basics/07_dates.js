let mydate = new Date()

console.log(mydate); // shites not readable ;-;

//differnt formats

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toTimeString());

let myNewDate = new Date(2023,1,12, 13,20,61) // year, month(0-11), day , hr, min, sec (NOTE: ADDED A MIN AND MADE 61 SEC 1 SEC !!!!!!)
console.log(myNewDate.toLocaleString());

//time stamp for quizes, polls and stuff
console.log();

console.log(Date.now()); //millisecs till 1970 x-x
 // we can compare it by using our current date
 console.log(mydate.getTime());
 
