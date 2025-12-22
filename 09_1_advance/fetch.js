const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url).then(function(res){
    console.log(res);
    console.log("------------------------------------------------------------------------------");
    
    return res.json()
    
}).then(function(dat){
    console.log(typeof dat);
    
})