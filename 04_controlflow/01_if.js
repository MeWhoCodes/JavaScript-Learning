//if
if (true){
    console.log('Entered if loop');
};


if(false){
    console.log('Didnt enter the if loop');
}else{
    console.log('entered else'); 
};

ava = 0
if(ava>0){
}else if(ava<0){

}


// == vs ===
if(2 == '2'){
    console.log('true');
}

if(2 === '2'){
    console.log('true');
}else{ console.log('nope');
}
// method 2

if(true) console.log('hello'); //  immplicite scope



// && and || are also used for multiple conditions




//                 NULLISH COALESCING  OPERATOR (??):  works for -->null, undefined
// helps assign defalt value so that code doesn't break due to null or undefined
let val1 = null ?? 10;
console.log(val1);

let val2 = undefined ?? 100;
console.log(val2);

let val3 = NaN ?? 20;
console.log(val3);





//                      ternary operator: one line if else
const iceteaprice = 100;
iceteaprice >= 90? console.log('More than 90') : console.log('Less than 90');



