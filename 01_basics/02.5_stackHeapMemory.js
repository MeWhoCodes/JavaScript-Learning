// Stack memory is used for primitive datatypes while heap for non-primitive
let myname = "Lewis"
let anothername = myname // new instance is made by coping MYNAME variable
anothername = "Charles"

console.log(myname,anothername);

let user1 = {id: 123,name: "Roby"}
let user2 = user1 // Heap is edited as both are referenced to same value here
user2.id = 0
user2.name = "Mary"
console.log(user1,user2);
