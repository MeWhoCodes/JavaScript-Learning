const tinder = new Object(); //constructor method
const tinder2 = {} // literal method
const tinderuser = {'id': 1200700, 'name': 'Charlie', 'isLoggedIn': false}

const obj = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
const obj3 = {5:'a', 6:'b'}


// METHOD 1 TO JOIN OBJECTS
const obj4 = {...obj,...obj2,...obj3} 
console.log(obj4)

// METHOD 2 TO JOIN OBJECTS
const obj5 = Object.assign(obj,obj2) // editted obj as it was combined with obj2, obj2 is same
console.log(obj,obj5);

// we can instead to OBject.assgin({}, obj, obj2) to keep the obj same and jst return the combined result :)


//obj methods
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(Object.hasOwnProperty('gender')) //  checks if has this key or not

