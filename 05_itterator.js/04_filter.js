const num = [0,1,2,3,4,5,6,7,8,9]
let myval = num.forEach((n)=>{
    return n
})
console.log(myval); //  we can't get returned value from .forEach method however we try

//                filter 

let val = num.filter((n)=> n>5)
console.log(val);

//                                  array-map

const  numbers = [1,2,3,4,5,6,74,3,2,3]
let numnum = numbers.map( (num)=>num+10)
console.log(numnum);













