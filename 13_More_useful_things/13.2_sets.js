// Sets(it is iterable)
// store Data in linear oreder
// sets also have its own methods
// No index-based access
// order is not guaranteed
// unique item only(no duplicates are allowed) -> we can't store one element more than one time in the set as we do in array.
// How to make sets ? when to make sets ? difference between array and sets ?

// syntax of set ->
// we can write any iterables(string and array) inside this parenthesis
const numbers = new Set([1,2,3,3]);
console.log(numbers);
// Set(3) { 1, 2, 3 } ----> set ignore the duplicate elements but array doesn't

console.log(numbers[2]); // undefined bcz we can't access the item through its index but we can do it in array
// order changes in Set but not in array. HOW ???
// Set([1,2,3]) can be treated as Set([2,1,3]) or in any other possible way but 
// but in array order is maintained means [1,2,3] will be treated as [1,2,3] only

const string = new Set("abc");
console.log(string); //Set(3) { 'a', 'b', 'c' }


// empty set
// we can store any datatype into set
const array_items = ["item1","item2","item3"];
const value = new Set();
value.add(1);
value.add("abc");
value.add(1.2);
// if we make array using square bracket at the time of adding then
// these two array will add in the set bcz these two array are different and their memory is also different 
value.add([1,2,3,4]);
value.add([1,2,3,4]);
// but when we try to add same array in set then it will not add these array 
value.add(array_items);
value.add(array_items)
value.add(1); // if we try to add 1 more than one time then it will not add more than one time
console.log(value);
// output : 
/*
Set(6) {
  1,
  'abc',
  1.2,
  [ 1, 2, 3, 4 ],
  [ 1, 2, 3, 4 ],
  [ 'item1', 'item2', 'item3' ]
}
*/

// if we want to check whether an element is in set or not then we will use this method
// it will return either true or false means boolean
console.log(value.has(1)); // true
if(value.has(1)){
    console.log("1 is present"); // <---- output
}else{
    console.log("1 is not present");
}


// for of loop in Set
// sets are iterable
for(let item of value){
    console.log(item); // it will give all the value present in set
}
//output
/*
1
abc
1.2
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
[ 'item1', 'item2', 'item3' ]
*/

// in unique id and user id we can use set
// i want unique elements
const myArray = [1,2,3,4,5,6,2,35];
const uniqueElements = new Set(myArray);
console.log(uniqueElements); //Set(7) { 1, 2, 3, 4, 5, 6, 35 }
console.log(uniqueElements.length); // undefined bcz we can't extract length of set


// TASK : how to find the length of set 
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length); //7 { 1, 2, 3, 4, 5, 6, 35 } 
