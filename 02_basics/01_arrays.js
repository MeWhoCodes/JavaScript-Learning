const arr = [1,2,3,4]

console.log(typeof arr);

let araya = new Array(6)//  instead of a array with 6 as sole element, creats a empty arary with 6 spaces
console.log(araya, 'This is araya');


/*
NOTE:
JavaScript's array-copy only produces shallow copies rathar then deep copies

Shallow: Refer to same reference (heap)
Deep: create a true copy (stake)

*/

// Some array methods

arr.push("grr")

console.log(arr);

let lastelem = arr.pop()

console.log(lastelem,arr);

arr.unshift(undefined) // adds the input to the first shifting all the values by one and so indexing starts by 1 now, super time consuming as all values are shifted and can bog down algorithms if the array is long
console.log(arr);

arr.shift() // removes the first element from the array

console.log(arr.includes(3)); //  does it include this value? returns boolean

arr.push("hii")
console.log(arr.indexOf("Hi")); // retuns the index of the following in the array, returns -1 if its not present in the array

let newarr = arr.join() // mades the array into a string
console.log(newarr, typeof newarr);

console.log();

//slice, splice
let sla = [12,43,64,42,56,87,94,11]
console.log(sla.slice(2,6), "Sliced part of array"); //will return array's 2,3,4 and 5th elements (last, ie. is not included)
console.log(sla, "The original array didn't change");

console.log();

let spa = ["hi", 'o',12,42,5]
console.log(spa.splice(2,4), "The spliced array"); // will return array's 2,3,4 elements, both 2, and 4 are included in splice
console.log(spa, "Now its original-splice, spilce removes the elements from the original array");




