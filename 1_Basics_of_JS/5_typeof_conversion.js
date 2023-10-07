//typeof operator -> gives the data types

// data types(primitive data types)
/* 
   string 
   number 
   booleans
   undefined :
      1> without assigning a value to let and var after declaring it will give undefined 
         in const must assign the value otherwise error will be thrown.
      2> console.log(,,,) can print more than one thing at a time.
   null :
      1> console.log(typeof null); // object
       It is a bug in js
   BigInt :
       - > in js we can store any number in limit
       1> primitive data type
       2> BigInt is created by appending n to the end of an integer literal
       3> can't add a normal number to BigInt it will give error 
   Symbol
*/

let first$name = 'abcdef';
let age = 22;

let fruitName; 

console.log(typeof first$name);
console.log(typeof age);
console.log(typeof true);


/*
Undeclared: It occurs when we try to access any variable that is not initialized or declared earlier using the var or const keyword. 
If we use 'typeof' operator to get the value of an undeclared variable, we will face the runtime error with the return value as “undefined”.
*/

console.log(typeof undeclaredVariable);
console.log(typeof middleName); //undefined

console.log(typeof declaredButUndefinedVariable);
console.log(typeof fruitName); // undefined

console.log(typeof 1.1);
console.log(typeof undefined);
console.log(typeof null); // object(reference datatype) it is a bug 
console.log(typeof Number("1")); // Number tries to parse things into numbers
console.log(typeof String(1)); // String converts anything into a string, safer than toString
console.log(typeof typeof 1);
console.log(typeof "1");
console.log(typeof Infinity);
console.log(typeof NaN); // Despite being "Not-A-Number"
console.log(typeof '');
console.log(typeof `template literal`); // string written inside back-ticks are string only.
console.log(typeof A); // typeof any alphabet whether small or capital is undefined
console.log(typeof Boolean(1)); // Boolean() will convert values based on if they're truthy or falsy
console.log(typeof(!!1)); 




let number = 12;
let myNumber = BigInt(12);
let sameMyNumber = 12n;
console.log(myNumber);
console.log(myNumber + sameMyNumber);
console.log(Number.MAX_SAFE_INTEGER);
// console.log(number + myNumber); // error bcz we can't perform operation on bigint with different datatype but we can perform with bigint only.

// MAX_SAFE_INTEGER : It tells about the limit to store number in javascript
// 9007199254740991 limit of a number 

// for further reading on typeof go for it : 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof







// convert number to string
// 1st METHOD:-
// add empty string to the number and then do typeof.

age = age + '';
console.log(typeof age);
console.log(age);

// 2nd METHOD:-
// by writing String() function
console.log(typeof String(age));






// convert string to number
// write + in front of any string.
const mystr = +first$name;
console.log(typeof mystr);

console.log(typeof Number(first$name));





// string Concatenation

let str1 = '22';
let str2 = '23';
console.log(str1+str2);
console.log(typeof (str1+str2));


let newstr = +str1 + +str2;
console.log(newstr);

str1 = Number('22');
str2 = Number('23');
let newstr2 = str1 + str2
console.log(newstr2);


