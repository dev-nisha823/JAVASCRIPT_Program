// -> The error object : for all the built in errors the error object has two main properties.
// try{
//     hey; //error bcz variable is not defined.
// }catch(error){
//      alert(error.name);
//      alert(error.message);
//      alert(error.stack);
// }

// try...catch is basically used for error handling
/*
try{
    console.log(firstName);
}catch(error){
    console.log(error.name);  // ReferenceError
    console.log(error.message); // firstName is not defined
}
*/

// CUSTOM  ERROR
/*
try{
    // throwing a custom error
    // throw new Error("A custom error"); // Error 
    throw new ReferenceError("A custom error"); //ReferenceError
}catch(error){
    console.log(error.name);
    console.log(error.message); // A custom error
    console.log(error.stack);
    // ReferenceError: A custom error
    // at 17.18.2_errorObject.js:24:11  
}    
*/

/*
Throwing Custom error
-> we can throw our own error by using the "throw" syntax
-> if(age>120){
    throw new Error("Invalid age");
}
-> we can also throw a particular error by using the built in constructor for standard errors.
-> let error = new SyntaxError(message) 
                        or
                new ReferenceError(message)
*/ 

try{
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if(age>120){
        throw new ReferenceError("Invalid age");
    }
}catch(error){
    console.log(error.name);
    console.log(error.message); 
    console.log(error.stack);
}


const func = () => {
    try{
        let a = 0;
        console.log(b);
        console.log("program run successfully");
        return;
    }
    catch(err){
        console.log("this is an error");
        console.log(c);
    }
    finally{
        console.log("finally block will run before the function ends");
    }
}
func();
console.log("func ends");