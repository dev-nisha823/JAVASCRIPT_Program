// fill method : 
// .fill(value which you want to fill in array , start_index, end_index)
// end_index will doesn't take the value which at this index.
// so, we should try to write one index extra.
//Example -------> suppose we want to fill 1 to an array by replacing some of the element but 
// you have to provide from where you want to start to fill suppose from 3rd index
//  and upto which index u want to fill means suppose i want to fill till 9th index 
// then write like this--> arrayname.fill(value,start_index,end_index+1)
// arrayname.fill(1, 3, 10)

// make an array which is filled with 10 numbers and the number is only (-1)
// use new keyword and constructor and pass the length of array to it and use fill() and pass the number to it
const negativeArray = new Array(10).fill(-1);
console.log(negativeArray); // [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

// an array is given to you and replace some of the elements by 0 from index 2nd to 6th
const array = [2,4,5,1,6,0,9,8,3,5,4,1]; //original array
const myArray = array.fill(0, 2, 7);
console.log(array); // [2, 4, 0, 0, 0, 0, 0, 8, 3, 5, 4, 1]
console.log(myArray); // [2, 4, 0, 0, 0, 0, 0, 8, 3, 5, 4, 1]
// fill() method will change the original array 
// and returns a new array
