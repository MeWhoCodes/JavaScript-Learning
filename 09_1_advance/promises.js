// promise => it WILL be execute, but not rn, but it will be..
//has 3 states.
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
        resolve({username: "Woody", email: "Woody@gmail.com "}); //we got this data from somewhere, now we will return it
    },3000)
})

promiseTHREE.then(function(user){
    console.log(user);
    
})