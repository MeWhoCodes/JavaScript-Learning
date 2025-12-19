//                               for-of loop: itterable on array and maps, not obj
const arr = [1,2,3,5, 'a']

for (const num of arr) {
    console.log(num, typeof num);
    
}

//                               maps



const cntry = new Map()
cntry.set('IN', 'India')
cntry.set('BR', 'Brazil')
cntry.set('FR', 'France')

console.log(cntry);

for(val of cntry){
    console.log(val);
}
for([key,value] of cntry){
    console.log(`Key: ${key}, Value: ${value}`);
    
}
//-----------------------------------------------------------------
