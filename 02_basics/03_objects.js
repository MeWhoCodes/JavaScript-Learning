// singleton is not created when defined by literal, only as constructors its a singleton

//object literal
mySym = Symbol("key1")
const jsuser = {
  name: "Marvis",
  age: 13,
  [mySym]: "Alpha#321",  //  only way to use key which is of type object
  "DOB of user": "6th Nov 2004",
  location: undefined,
  email: "marv.12@hoomail.com",
  isLoggedin: false,
  lastLoggedIn: ["Sunday","Monday"]
}

//one way to access this object:
console.log(jsuser.email) // this . (dot) notaion is not the only way !! can't be used to access "DOB of user" as it has spaces

//2nd method to access dob of user
console.log(jsuser["DOB of user"]);

console.log(jsuser[mySym]); //type of the key is symbol and key is key1

console.log();

//to see the object we simply do:
console.log(jsuser); // NOTE: we can see key1 is a symbol here :))

jsuser.isLoggedin  = true
jsuser.lastLoggedIn.push("Tuesday")
console.log(jsuser);
//Object.freeze(jsuser) /// no parameter can be changed now in the object x-x (NEEDS TO BE UNCOMMENTED FOR FURTHER CODE TO WORK)
//jsuser.name = "Hari" // name didn't changed even tho got no error cuz object was freezed

/*
RANTING: FROZEN OBJECTS CAN'T BE UNFROZEN.
Fun Fact: .freeze is jst a shallow freeze, meaning if an object has another object as its property, the inner object can still be modified.
*/


jsuser.greetings = function(){
  console.log(`Hello ${this.name}, welcome back!`); // this refers to the same object i.e. jsuser!
}

console.log();

console.log(jsuser.greetings); // returns that greeting is a function
console.log(jsuser.greetings());
 
 

 