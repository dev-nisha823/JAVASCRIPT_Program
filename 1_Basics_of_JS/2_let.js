

// let can be updated but can't be redeclared with same variable name.
let b = 9;
b = 10;
// let b = 20;// throw error see line 15.
// console.log(b);// 10 
b = 30;
console.log(b); // let also prefer the value of the variable which is declared just before the console.log()



/*let x = 42;
if (true) {
  console.log(x); //output: error bcz cannot access 'x' before initialization.Variables defined with let are available only in the nearest enclosing block.
  let x = 1337;
}*/

// let is block scope. 
let c = "rahul";
// let c = "radha"; throw error("bcz we can't declared let again but we can change its value")
c = "nisha";
{
  let c = "this";
  console.log(c); // this 
}
console.log(c); // nisha


// Accessing let from block scope to global scope will throw an error like variable is not defined.

for(let i = 0; i <= 10; i++)
{
  console.log(i);
}
console.log(`value of i is ${i}`);