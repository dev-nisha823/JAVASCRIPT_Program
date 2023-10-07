// LOOP : To iterate

// we mostly use for and for of loop.

// for loop in array
// print array using for loop



// using for loop to print array elements
let arr1 = ["item1","item2"];
let arr2 = [];
// let arr2;
for(let i = 0; i < arr1.length;){
    arr2.push(arr1[i].toString().toUpperCase());
    i++;
    // arr2 = arr1.slice(0);
}
console.log(arr1,arr2);


// using const create an array 
const array = [1,2.5,"nisha",'a'];
//array = ["item4","item5"]; // TypeError: Assignment to constant variable. here we are changine the value of const that is not possible in const.
array.push(8); // but here the address of array is same as after pushing the new element to array at the same address bcz address is not changing here
console.log(array);


// using while loop
let j=0;
while(j<array.length-1){
    arr2.push(array[j].toString().toUpperCase());
    j++;
}
console.log(arr2);




/*
let array = ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"];
let newArray = [];
for(let i = 0; i<=array.length-1;)
{
    newArray.push(array[i].toUpperCase());
    i++; 
}
// convert it into array.
console.log(newArray);
*/



// while loop in array
/*const fruits = ["apple","mango","banana","grapes"];
const fruits2 = [];
let i = 0;
while(i<=fruits.length-1){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);
*/





//for of loop : It gives the value of each index
// used to iterate an array.
const fruits = ["apple","mango","banana"];
const fruits2 = [];
for(let fruit of fruits){
   fruits2.push(fruit.toUpperCase());
   console.log(fruit); // apple mango banana
}
console.log(fruits2); // [ 'APPLE', 'MANGO', 'BANANA' ]




//for in loop : It gives the index/position of each element in array 
for(let index in fruits){
    console.log(index , fruits[index],fruits); 
}










