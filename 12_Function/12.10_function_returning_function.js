// function returning function

//Higher Order Function means returning function as well as 
//calling function by making it as an input to another function and doing both the things at the same time is called as HOF(Higher Order Functions).

// In Javascript, functions can be assigned to variables(function expression) in the same way that strings or arrays can. They can be passed into other functions as 
// parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

/*
JavaScript Functions are the First-Class Objects.Therefore,
1. They have built-in properties and methods, such as the name property and the .toString() method.
2. Properties and methods can be added to them.
3. They can be passed as arguments and returned from other functions.
4. They can be assigned to variables, array elements, and other objects.
*/
function string(name){
    console.log("callback function string");
    console.log("your name is",name);
}


function main(callback){
    callback("nisha");
    function returnfun(){
        return "helloworld";
    }
    return returnfun;
}
// callback function
main(string);


const assign_returnfun = main();
assign_returnfun(); //undefined
console.log(assign_returnfun()); //helloworld


// function main(){
//     function returnfun(){
//         return "helloworld";
//     }
//     return returnfun;
// }
// main();
// output : ƒ returnfun(){
//         return "helloworld";
//     }