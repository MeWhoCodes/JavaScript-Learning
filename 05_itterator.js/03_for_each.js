//                           for-each: iterates on arrays :)
const ar = ['js', 'python','ruby','cpp']

ar.forEach( function(elem){
    console.log(elem);
})

// or

ar.forEach( (el)=> console.log(el+' is cool') ) //  arrow function
// NOTE: functions in forEach method does not have a name


// if the fucntion is already defined somewhere, we can jst reference it in forEach

function _d_(item){
    console.log(item+ "--------");
}

ar.forEach(_d_)





