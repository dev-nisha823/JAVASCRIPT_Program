// boolean & comparison operator

// boolean gives either true or false
// truthy values like any string, 1, -1 then if block will be executed.
// falsy values like false , "", null,0, undefined  then else block will be executed.


let firstname = "nisha";
let firstName = "";

if(firstname){
    // console.log(firstname); // if block will be executed
    console.log(firstName); // else block will be executed
}
else{
    console.log(`Thing written inside firstName is falsy value.`);
}




// == vs ===
// ==  only check value not datatype and gives true when value is equal but do not care about the data type.it only happens in js not in other programming language.
// === gives true when both value and data type is equal.

let num4 = "7";
let num5 = 7;
let num6 = "8";
console.log(num4 == num5); //gives true bcz value is equal despite of different datatype.
console.log(num5 == num6); // gives false bcz value is different not care about the datatype
console.log(num4 === num5); // gives false bcz datatype is different but not value. since it will check both
console.log(num4 === num6); //gives fale bcz value is different but not datatype.


// != vs !==
// !=  gives true when value is not equal and false when value is equal and doesnot depend on datatype.
// !== gives false when both datatype and value is equal/same but 
// gives true when any one condition will fulfill either datatype is not equal or values are not equal
// it works fine not only with numbers but also with string, floating point number, character 

let num1 = 5;
let num2 = 6;
let num3 = "6";
console.log(num1 != num2); // true 
console.log(num2 != num3); // false bcz value is not equal despite of same or different datatype
console.log(num2 !== num3); // true bcz one in number and other is string despite of having same value.




