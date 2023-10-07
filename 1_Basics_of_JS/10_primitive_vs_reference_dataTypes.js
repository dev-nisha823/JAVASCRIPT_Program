// Primitive vs Reference data types

let num1 = 10;
let num2= num1;
console.log(`value of num1 is ${num1}`,`value of num2 is ${num2}`);
num1++;
console.log("after incrementing num1 value");
console.log(`value of num1 is ${num1}`,`value of num2 is ${num2}`);


let arr1 = ["item1","item2"];
let arr2 = arr1;
console.log("array1",arr1);
console.log("array2",arr2);
arr1.push("item3");
console.log("after pushing one element to an array 1");
console.log("array1",arr1);
console.log("array2",arr2);

console.log(arr1 === arr2);