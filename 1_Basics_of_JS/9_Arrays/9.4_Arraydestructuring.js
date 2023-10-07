
// Array destructuring 


const array = ["firstElement","secondElement"];

//Task : Make 2 variable and store 1st element in 1st variable and 2nd element in 2nd variable.
// const variable1 = array[0];
// const variable2 = array[1];
// console.log(variable1,variable2);

// but to do the above task we have the concept of array destructuring
// let [variable1, variable2, variable3] = array; // here we are assigning variable3 to a value of an array which is not present
let [variable1, , variable2, variable3] = array; // we are skipping the second element of an array by writing comma
console.log(variable1,variable2,variable3);

const array1 = ["firstElement","secondElement","thirdelement","fourthelement"];
// let newArray = array1.slice(2);
// console.log(newArray);
let [var11,var21, ...newArray] = array1;
console.log(newArray);






//Task : Make 2 variable and store 1st element in 1st variable and 2nd element in 2nd variable.
const myArray = ["value1","value2","value3","value4"," ","value5"];
const myArray2 = ["value"];
// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log(`value of var1 : ${var1}`);
// console.log(`value of var2 : ${var2}`);

//but to do this there is a shortcut method i.e,. array destructuring
// var1 is storing "value1" and var2 is storing "value2".
let [var1,var2] = myArray;
var1 = "value changed";
console.log(`value of var1 : ${var1}`);
console.log(`value of var2 : ${var2}`);

let[myvar1,myvar2] = myArray2;
console.log(`value of myvar1 : ${myvar1}`); // value
console.log(`value of myvar2 : ${myvar2}`);// undefined bcz myArray2 has only one element.

// how to store value3 into var2 
// here , , it will skip value 2 and store value3 into var2
[var1 , , var2] = myArray;
console.log(`value of var1 : ${var1}`);
console.log(`value of var2 : ${var2}`);// value3


//how to get the remaining value in the form of an array.
let myNewArray = myArray.slice(2);
//or
// let myNewArray = [];
// [var1,var2, ...myNewArray] = myArray;
console.log(`New Array :`,myNewArray);









