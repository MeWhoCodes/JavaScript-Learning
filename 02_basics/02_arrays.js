const mcu = ["spiderman", "Ironman", "Thor"]
const dc = ["Batman", "Superman"]

mcu.push(dc.join()) // used .join as it will be [.,.,.,[,.,.,.]] other wise, array of array
console.log(mcu);


t = [0,1]
x = [4,5]
t.push(x.join())
console.log(t);
console.log(typeof t[2]); // as we can see, 4, 5 are string, not number so thats and issue
let m = [10,11]
m.push(...x) // mmmmh, :french-hand, ...shatters the array and opens it up
console.log(m);


// that was a lot to type and kinda awefull so we can do:
let a1 = [0,1]
let a2 = [2,3]
let a3 = a1.concat(a2)
 
console.log(a3,a1); // a1 is not changed, a3 is created with a1 and a2

console.log();


const f_array = [1,2,3,[4,5,6], 7, [6,7,[4,5]]] // this is messed up
const real_array = f_array.flat(2) //flats required as its lvl is 2 lvl deep, we can also write Infinite instead of 2 but 2 is prefered if we know the lvl of deepth
console.log(f_array,'|',real_array);


//------------
console.log();

console.log(Array.isArray([1,2[2,3]]));
console.log(Array.isArray("Murfy")); //  false
console.log(Array.from("Murfy"));
console.log(Array.from({name: 'Luige'})); // interesting case as its not easliy converted from object to array


let score1 = 100
let score2 = 200
let score3 = 300
score_array = Array.of(score1,score2,score3) //  makes array from series of elements provided
console.log(score_array); 

//we can also use:
score_alt = new Array(score1,score2,score3)
console.log(score_alt);
console.log(score_alt == score_array);













