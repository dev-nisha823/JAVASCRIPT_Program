// callback
// how callback is used in synchronous programming ??

function myFunc(callback){
    console.log("function is doing task 1");
    callback();
}

function myFunc2(){
    console.log("function is doing task 2");
}

myFunc(myFunc2);  // passing myFunc2 as a callback function in myFunc
// above code is eg of callback function

// we can also make anonymous function inside myFunc
myFunc(function(){
    console.log("function is doing task 2");
});
// by using arrow function
myFunc(() => {
    console.log("function is doing task 2");
});





function getTwoNumbers_Add(number1, number2, callback){
    // check whether the type of input is number or not
    if(typeof number1 === "number" & typeof number2 === "number"){
        console.log(number1, number2);
        callback(number1, number2);
    }else{
        console.log("wrong dataType of inputs");
    }
}
function addTwoNumbers(num1, num2){
    return num1 + num2;
}
getTwoNumbers_Add("4",5, addTwoNumbers); // print else part bcz "4" is not a number it is a string
getTwoNumbers_Add(4,5, addTwoNumbers);
getTwoNumbers_Add(4,5, (num1, num2) => {
    return num1 - num2;
});

// passing 2 callback at the same time in the function
// onSuccess -> when code is successful
// onFailure/onError -> when
function printNumber(num1, num2, onSuccess, onFailure){
    if(typeof number1 === "number" & typeof number2 === "number"){
        console.log(num1, num2);
        onSuccess(num1, num2);
    }else{
        onFailure();
    }
}
function multiplicationTwoNumbers(number1, number2){
    return number1 + number2;
}
printNumber(4, 5, multiplicationTwoNumbers, () =>{
    console.log("wrong dataType");
    console.log("please pass numbers only");
});
// if the input is having correct dataType then onSuccess callback will be executed
// if the input is having incorrect dataType then onFailure callback will be executed
