const  user = {
    username : "Hitesh",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome my friend to our collab!`);
        
    }
}

user.welcomeMessage() // says welcome to hitesh
user.username = 'Mary'
user.welcomeMessage() // says mary since we used this.username instead of hardcoding

// this refers to the current context, this is the 'user' in above case, this in global scope returns nothing
console.log(this); // gave {}

//confusing shite
function dev(){
    let laugh = "hehe"
    console.log(this.laugh);
}
dev() // returned undefined? shouldn't it give 'hehe'

//                                        maybe this jst works in an object??



// Arrow functions:
const adder = (n1 , n2) => {
    return n1+ n2
}
console.log(adder(3,1));

// one lines can also be written as: immplicit return method, return was not written
const squarer = (n1) => n1*n1 // NOTE: we didn't use {} brackets so no need to return
console.log(squarer(12));

//fun fact:
// const obj = () => {username: "George"} //  {} expects return so how do we return this object?

const obj = () => ({username: "George"})
console.log(obj());

