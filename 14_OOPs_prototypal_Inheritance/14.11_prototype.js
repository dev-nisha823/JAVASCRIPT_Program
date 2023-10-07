
// Javascript function --------> function + object
// means they are function as well as function object


// in javascript every functionhas gives a 'name' property 
// name property ----> gives functions name.

function hello(){
    console.log("hello world");
}
// we will not call the name property but only use dot notation to access the function name
// hello.name;
console.log(hello.name); // Output: hello

// we can also add our own properties in function as we do in objects
hello.myOwnProperty = "very Unique value";
console.log(hello.myOwnProperty); // very Unique value


// function provides more useful properties.
// function gives -----> free space means an empty object {} and this {} is called prototype
hello.prototype; 
console.log(hello.prototype); // {} in this object there is only one property i.e,. constructor and function hello() is the value of this constructor
/* Output------>
by default prototype we obtained from constructor function is an object but the prototype of an array is array only 
{constructor: ƒ}
constructor: ƒ hello()
[[Prototype]]: Object
*/

// only functions provide prototype property
// proving : now we will check that whether any property is present or not in any object
if (hello.prototype){
    console.log("prototype is present"); // Output: prototype is present
}else{
    console.log("prototype is not present");
}




// if we will try to find out that either object or array has prototype or not then how we will do ??
const object = {key1 : "value1"}
if (object.prototype){
    console.log("prototype is present"); 
}else{
    console.log("prototype is not present"); // Output: prototype is not present
}

const array = ["item1"];
if (array.prototype){
    console.log("prototype is present"); 
}else{
    console.log("prototype is not present"); // Output: prototype is not present
}

const string = "abcde";
if (string.prototype){
    console.log("prototype is present"); 
}else{
    console.log("prototype is not present"); // Output: prototype is not present
}

// it means only function has prototype 
// object, array, string no one has prototype. (see the above code)

// how to add property to this prototype
hello.prototype.fruitName = "apple";
hello.prototype.fruitsize =  "small";
hello.prototype.myfunc = function(){
    return "lalalalala";
};
console.log(hello.prototype);
/*
Output:
{
  fruitName: 'apple',
  fruitsize: 'small',
  myfunc: [Function (anonymous)]
}
*/
// we can also call the function which is inside this prototype like this
console.log(hello.prototype.myfunc()); // Output: lalalalala





// Is there any connection between __proto__ and prototype ??
// ----> NO, but we will create the connection between these two HOW ??? Let's see --------->



// whatever the object method we see in javascript that comes from prototype
let numbers = [1,2,3,4,5];
console.log(numbers);
// how to check the prototype of an array
console.log(Object.getPrototypeOf(numbers)); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …] it is an array format but prototype is an object but array is also an object 

// internally javascript create array by using Array constructor
let number = new Array(1,2,3); // all the array_methods is inside this 'prototype' of Array() function
// how to print the Array prototype 
console.log(Array.prototype); // print array kaa prototype in array format 


// but we can change the prototype from object to array but how
hello.prototype = []; //set function prototype an empty array
console.log(hello.prototype); // []
// we can add any things to it
hello.prototype.push('2'); 
// but there is no use of this so we only focus on function prototype

