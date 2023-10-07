// callback function
/*
In JavaScript, a callback function is a function that is passed into another function as an argument. 
This function can then be invoked during the execution of that higher order function (that it is an argument of).
Since, in JavaScript, functions are objects, functions can be passed as arguments.
*/

// we can pass object, array, string, number in the argument of function.


// callback function are those functions which passes as argument into another function and we can accept it as input into the other function.


function myfunc2(name){
    console.log("inside myfunc2");
    console.log(`your name is ${name}`);
}

// function myfunc(callback){
//     callback();
// }

function myfunc(a){
    console.log(a);
    a("Nisha Kumari"); //calling back the function   
}
myfunc(myfunc2); // print inside myfunc2
// a can be anything it can be string, array and object
myfunc([1,2,3,4,5]);
myfunc("abcd");
myfunc({key:"value",key2:"value2"});

// kya a kii value function ho sakti hain 
// myfunc(myfunc2);
// here we are passing myfunc2 as an input inside the myfunc this is called as callback function.
//calling a function as an input to another function is called as callback function.






// how callback function work
function function1(name){
    console.log("inside function1");
    console.log(`your name is ${name}`);
}
const function2 = (callback) => {
    console.log("inside function2");
    callback();
    callback("nisha");
}
function2(function1);

/*
step 1: function2 is called and "inside function2" will be printed.
step2 : callback(is the function1 which is passed as a parameter in function2) is invoked  
step3 : "inside function1" will be printed.
step4 : your name is undefined will be printed bcz we haven't pass anything inside callback.
step5: "inside function1" will be printed.
step6 : your name is nisha will be printed bcz we have pass nisha as an argument inside callback at the 2nd time calling.
*/




// WAP to print whether a number is even or not using callback function
function isEven(num){
    if(num%2 === 0){
        return true;
    }else{
        return false;
    }
}
const enteredNum = (isEvenFunction, n) => {
    const isnEven = isEvenFunction(n);
    console.log(`The number ${n} is even : ${isnEven}`);

}
enteredNum(isEven,6);

// above code snippet say that 
// isEvenFunction is isEven function and n is the number entered

