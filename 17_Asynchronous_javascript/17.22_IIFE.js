// Immediately Invoked Function Expressions

// a js function that runs as soon as it is defined.
// IIFE Syntax: 
/*
// self executing anonymous function
contains two major parts:

The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


(function(){
    // write your code here
})();

An async IIFE allows us to use await
(async () => {
  // …
})();

(() => {
  // …
})();


to end the context of IIFE we have to put semicolon(;) after defining the function
usually code editor put (;) in js code but in case of IIFE we have to do it manually
and if we don't put (;) then we are not able to define another IIFE
*/ 

// It is used to avoid polluting the global namespace, execute an async-await, etc,.
/*
->  Avoid polluting the global namespace
    Because our application could include many functions and global variables from different source files, 
    it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, 
    we could use the IIFE pattern. As we will not reuse the code again, 
    using IIFE in this case is better than using a function declaration or a function expression.

(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.
*/ 


// this is how we can write two IIFE in same js file
// Arrow function can also be used in place of normal function
((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('Nisha');


// named IIFE means function having name
(function code(){
    console.log("Named IIFE");
})()