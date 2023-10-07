
// in case of var
console.log(number);
var number; // Declaration hoisted to the top 
var number = 10;
console.log(number); //but initialization is not hoisted to the top


// console.log(a); //ReferenceError: Cannot access 'a' before initialization
let a;
console.log(a); //undefined

a = 10;
a = a + 10;
console.log(a);