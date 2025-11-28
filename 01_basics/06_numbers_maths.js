const score = 100
console.log(typeof score)

let score2 = new Number(100); // object which is like a number

console.log(score2,typeof score2);
console.log(score2.toString());

let balance = new Number(202)
console.log(balance.toFixed(2)) // fixes 2 decimal space after point

let bignumber = new Number(1000000000000)
console.log(bignumber); // looks shitty right?
console.log(bignumber.toLocaleString()); // adds commas :)))

console.log(bignumber.toLocaleString("en-IN")); // adds commas according to INDIAN method

// +++++++++++++++++ MATHS ++++++++++++++++++++++++++//
console.log();
console.log();

console.log(Math.PI);

console.log(Math.abs(-4));
console.log(Math.round(1.2),Math.round(1.8),Math.round(1.5));

console.log(Math.ceil(4.2));
console.log(Math.floor(5.99));

console.log();

console.log(Math.min(2,6, 3)); //and same for max

console.log(Math.random()); // RETURNS RANDOM VALUESSSS BETWEEN 0 AND 1

console.log(Math.round(6*Math.random())); //includes 0,1,2,3,4,5,6

