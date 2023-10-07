// Hoisting means 
// before execution of code the function, variable etc,. is stored in the global memory.

console.log(this);

// In function declaration function is stored as it is in global memory 
console.log(myFunction); // Output: print whole function as it is and save it to global memory
function myFunction(){
    console.log("this is my function");
}

// In function expression function is not stored as it is in global memory if we try to print it before initialising
console.log(function2); // Output: undefined bcz here function expression is treated as variable
var function2 = function(){     // here in var function2 a function will be stored 
    console.log("this is my function");
}
console.log(function2); // Output: f(){console.log("this is my function");}



// what is the difference between let and const
/*
-> In case of variable, var value is set as undefined before code execution

// we can do hoisting of let and const means they will be present and stored in global memory but we can't use them untill and unless we don't initialized
-> In case of let,  
    a) the variable will be saved in memory but it will be uninitialised
    b) give ReferenceError: Cannot access let before initialization

-> In case of const,  
    a) const will be saved in memory but it will be useless
    b) give ReferenceError: Cannot access const before initialization
*/

console.log(firstName); // output: ReferenceError: Cannot access 'firstName' before initialization bcz firstName : uninitialized
let firstName = "Nisha"; // Now the value of firstName : "Nisha"
console.log(firstName); 

// there is no variable whose name is fullName that's why it is giving error of not defined
console.log(fullName); // Output: ReferenceError: fullName is not defined
// but in case of let and const the variable is already created but without initializing if we try to access them they will give error(uninitialized)


// TDZ -> Temporal Dead Zone (until n unless the let and const is not initialized they will be in TDZ)
// and gives referenceError   


// incase of "typeOf"
console.log(typeof fullName); // Output: undefined
console.log(typeof lastName); // Output: ReferenceError: Cannot access 'lastName' before initialization
let lastName = "Kumari";




console.log("hello world");
let fruitName = "Apple";
const myfunction = function(){
    let fruit1 = "grapes";
    let fruit2 = "mango";
}
// in above code,
/*
Global memory has,
1. fruitName
2. myfunction
    but in myfunction there are 2 variable made up of by using let
    -> fruit1
    -> fruit2
    these 2 variables are inside function myfunction 
*/
