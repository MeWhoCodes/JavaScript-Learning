//                            immediately invoked function expression (IIFE)
// Usefull for immediate execution of a code which also doen't let pollution of variables into global scope

(function chain() { // <--- named iife
  let x = 10;
  console.log(x);
})(); // <---------------------------This semi colon is really important, it tells js where context ends, without it code won't work
//function is wrapped and then executed (function)()

(()=>{
  console.log("DB connected!");
  
})();


user = 'harry';

( (name) => {
  console.log(`Hello ${name}`);
  
})('harry');