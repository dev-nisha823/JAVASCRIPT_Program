// how to iterate objects
const fruits = {
    name : ["Guava","Apple","Grapes","Banana","Ginger"],
    color : ["Green","Red","Green & Black","Yellow","Brown"],
    size : "small",
}

//---------------------------------1st method using "for in loop"----------------------------
for(let key in fruits){
    // to access key name
    console.log(key);
    // to access key-value pair using square bracket and dot notation
    console.log(fruits.key); // give undefined bcz it will first search for key name string whether it is present in fruits object or not.
    //  if present it will give the value of that key otherwise it will give undefined.
    console.log(fruits[key]); //give value of the key
    // using template literals to access key value pair
    console.log(`${key} : ${fruits[key]}`);
    console.log(key,":",fruits[key]);
}


//----------------------------------2nd method "Object.keys"-----------------------------------
// syntax: Object.keys(objectname)
// Object.keys will give array
console.log(Object.keys(fruits)); // it will return all the keys of fruits objects in the form of array
console.log(typeof (Object.keys(fruits))); //object bcz Object.keys is an array
const value = Array.isArray(Object.keys(fruits));
console.log(value); //true bcz Object.keys is an array

//using for of loop to get the values of all the keys of fruits objects 
for(let key of Object.keys(fruits)){
    console.log(fruits[key]);
}


