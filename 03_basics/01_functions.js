//                                                method 1
function addone(value){
    return value+1
}
console.log(addone(3));
//---------------------------------------------------------------

//                                                method 2
const addtwo = function (value){
    return value+2
}
console.log(addtwo(3));
//----------------------------------------------------------------
//                                               Difference:


//difference? functions of method 1 can have their call  before the function was created or after for example
a()
function a(){}

//but not functions of method 2, they are like defined through variables, so need to be called only if its initialised

//b() <------wont work
const b = function (){}
b() //<---works














function sayMyName(name){
    console.log(`Hello ${name}, how have you been?`)
}

sayMyName("Mathew")
sayMyName("Apollo")
sayMyName() // nothing was inputed, undefined 

// now name can be undefined, we don't want that. 

function smn(name = "-place_holder-"){ //  uses default value of name if name is not given
    console.log(`Hello ${name}, sup'`);
    
}
smn("Bob")
smn()




// function calculateCartPrice(num){
//     return num
// }
// console.log(calculateCartPrice(100)); //shite can only take a single value, not useful since we want to enter multiple values

function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(100, 200, 300)); //gets packed into an array




const fruit1= {type : "Apple", price : 50}
const fruit2= {type : "Grapes", price : 100}
const furniture= {type : "Chair", price : 1000}

function describeItems(item = {type:"no_type", price: NaN}){
    console.log(`Item: ${item.type}, price: ${item.price} has been added to cart`);
}

describeItems()
describeItems(fruit1)
describeItems(furniture)