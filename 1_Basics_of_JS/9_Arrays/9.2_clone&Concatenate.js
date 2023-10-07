// clone array : copy of same array 

// clone means copy of an array. 
// Spread operator (...) is used to clone an array 
// whereas slice method is an older way by providing 0 as 1st argument. 
// these methods create a new, independent array and copy all the elements of oldArray to the new one i.e. both these methods do a shallow copy of the original array.
// performance basis slice is better



// primitive vs reference type 
/*
let arr1 = ["item1","item2"];
let arr2 = arr1;
arr1.push("item3");
console.log(arr1 === arr2); // true
console.log(arr1,arr2);


// here we can see that whenever we are equating two arrays without any operation then these two array are equal
// but when we are appling any operation on array then these two array behave differently means both of them are different.
/*

// in this case if we remove slice then both the arrays are same but if we add slice then both the arrays are different
let oldArray = ["item3","item4"];
// oldArray.push(5);
let newArray = oldArray.slice(0);
oldArray.push(5);
console.log(oldArray === newArray); // false
console.log(oldArray,newArray);
*/


/*
// cloning of an array

// 1st method using slice method :
let oldArray = ["item3","item4"];
let newArray = ["item5","item6"];
oldArray.push("hello");
newArray = oldArray.slice(0);
// oldArray.push("hello");
console.log(oldArray === newArray); // false
console.log(oldArray,newArray);
console.log(newArray);

// 2nd method concatenating oldarray to newarray
newArray = [].concat(oldArray);
console.log(oldArray === newArray); // false
console.log(oldArray,newArray);

// 3rd method using spread operator
newArray = [...oldArray];
console.log(oldArray === newArray); // false
console.log(oldArray,newArray);


// Task : clone oldarray to newarray and also show some new elements to new array
newArray = [...oldArray, "item7","item8"];
// console.log(oldArray,newArray);
newArray = [].concat(oldArray, "item2","item1");
newArray = oldArray.slice(0).concat(["item0","item10"]);
let anotherArray = [...newArray, ...oldArray, "newElement"];
console.log(oldArray,newArray);
console.log(anotherArray);
*/

























//1st method using spread operator
console.log(`1st method using spread operator :`);
let oldArray = ["item1","item2","item3"];
let clonedArray = [...oldArray];
console.log(oldArray);
console.log("Using spread operator:",clonedArray);
console.log(oldArray === clonedArray);

// 2nd method using slice
console.log(`2nd method using slice :`);
clonedArray = oldArray.slice(0);
console.log("Using slice method:",clonedArray);
console.log(oldArray === clonedArray);

//3rd method using push
console.log("Using push method :");
oldArray.push("item4");
console.log(oldArray);
console.log("Using push method:",clonedArray);
console.log(oldArray === clonedArray);






// how to concatenate two arrays after cloning
// using .concat(item name);
// TASK 1: clone all the elements of array1 to array2 and then add some extra element to array2.

const arr1 = [1,2,3,4];
// const arr2 = [...arr1].concat(["item5",6]);
// const arr2 = [].concat(arr1,["item5",6]);
// const arr2 = [...arr1,"item5",6];
const extrArray = ["item5",6];
const arr2 = [...arr1 , ...extrArray, extrArray, 90, 100];
console.log(arr2);
// Line no. 41,42,43 all will give the same output.




// spreading string using spread operator - strings are iterable
const array_string = [..."abcde"];
console.log(array_string); // [ 'a', 'b', 'c', 'd', 'e' ]
// const array_string = [...abcde]; //error


const array_number = [..."12345"];
// const array_number = [...123456]; //numbers are not iterable
console.log(array_number);