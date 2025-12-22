// promise => it WILL be execute, but not rn, but it will be..
//has 3 states.


//NOTE: WE CAN'T GET ANY VALUE OUT OF PROMISE AND STORE IT IN A VARIABLE


const promiseOne = new Promise(function(resolve,reject){
    // DB async tasks
    //DB calls, crypto,network
    setTimeout(function(){
        console.log("Async task is completed")
        resolve(); // means the task was resolved
    }, 2000) 


})

promiseOne.then(function(){
    console.log("Promise is consumed");
    
})

// Promise in single block, no storing in 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task2");
        resolve()
    },3000)
}).then(function(){
    console.log("task was resolved");
    console.log("-----");
    
})




const promiseTHREE = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Woody", email: "Woody@googe.com "}); //we got this data from somewhere, now we will return it
    },3000)
})

promiseTHREE.then(function(user){
    console.log(user);
    
})



// we can chain .then for piping async tasks

const promiseFOUR = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = true                                                                  // toggle true or false to see differnt outcomes
        if(!err){ // no error was found, so we found stuff from our query/database
            resolve({username: "Bob", email : "bob@googe.com"})
        }else{
            reject("ERROR 324: Something Went wrong, couldn't get the query")
        }
    },4000)
})


promiseFOUR.then(function(info){
    console.log("Query data was received")
    console.log(info);
    return [info.username, info.email]
    
}).then(function(dat){
    console.log(dat);
    console.log(`${dat[0]} and ${dat[1]}`);
    
    //now dat can be processed async
     
    
}).catch(function(err){
    console.log(err);
    
}). finally(function(){
    console.log("runs when everything is done, either rejected or resolved, runs always after everything is set and done :))");
    
})




    
