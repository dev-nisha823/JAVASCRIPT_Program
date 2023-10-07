

// How js code work ?

// step 1 : code will compile first
/* 
compilation phase has 3 things : 
1. Tokenizing / Lexing -> breaking the codes into small chunks of code
2. Parsing -> make Abstract Syntax Tree by using these small chunks code
3. Code Generation -> by using Abstract Syntax Tree we generate the code which will be executable.

Why compilation happens at first ?
-> In EcmaScript, nowhere is written about compilation of Js code but in Official
1. Early error checking : check for the errors like syntax
2. Determining appropriate Scope for Variables : means what will be the scope of variable, function, function expression, nested function etc,.
*/

console.log(this);
console.log(window);
console.log(firstName);
// var firstName = ."Nisha";

/*
- In above code js will first compile all the code to see whether there is any error or not
- Then if there will be error it will give error here there is syntax error
- Then js will check for the scope of this variable here it is global scope bcz it is outside the function
*/





// step 2 : code will be executed
/*
Code execution phase : 
-> In js code executes inside execution context
-> First of all Global execution context created

    Global execution context : added in stack
        -> Creation phase means how Global Execution context will be created
        -> Code Execution phase
*/

console.log(this);
console.log(window);
console.log(myFunction);
console.log(firstName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Nisha";
var lastName = "Kumari";
var fullName = `${firstName} ${lastName}`;
console.log(fullName);


// Lexical(where the code is written) Scope execution context 
// It means the way of code where it is written either globally or locally 
// in above code myFunction is lexically inside global scope
