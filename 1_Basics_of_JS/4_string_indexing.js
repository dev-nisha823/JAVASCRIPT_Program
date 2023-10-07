// String indexing and string methods
/*
 -> .length
 -> indexOf()
 -> lastIndexOf()
 -> trim()
 -> toLowerCase()
 -> toUpperCase()
 -> slice
 -> splice
 -> replace
 -> concat
*/


// N   I  S  H  A   ''   K  U  M  A  R  I  
// 0   1  2  3  4   5    6  7  8  9  10 11



const first$name = "NISHA KUMARI";

// length of string
console.log(first$name.length);

// last Index : length - 1
// length : last Index + 1


// printing a SINGLE CHARACTER using INDEX VALUE
console.log(first$name[6]);

// print the index value of a character
console.log(first$name.indexOf('K'));

// string.length-1 will give the last index value
console.log(first$name[first$name.length-1]);

//lastIndexOf => return index(position) of last occurence of particular string. 
/* 
  if there are 2 same string is available in a sentence then it will give the position of the same string but who are last in a sentence
  -> return -1 if string is not found.
  -> start searching from end to begining.
  -> method returns the index from the beginning (position 0)
*/
console.log(first$name.lastIndexOf('I'));// 11
console.log(first$name.lastIndexOf('K'));// 6
console.log(first$name.lastIndexOf('S'));


//trim() ->
/*
 -> since string is immutable that's why to make changes we have to store it inside another variable or we can update the older variable.
 -> trim() remove spaces and return a new string but not make any changes to original string.
*/
let firstName = '     Hello     ';
console.log(firstName.length); 
// firstName.trim(); // 'Hello'  remove the spaces and gives 'Hello' as an output but the length will be same as length of (original string)
// console.log(firstName.length);
firstName =  firstName.trim();
console.log(firstName);
console.log("after trim the length of string is ",firstName.length);



// toUpperCase -> make all the characters of a string in capital letter.
// toLowerCase -> make all the characters of a string in small letter.

let fruit_name  = 'Apple';
fruit_name = fruit_name.toUpperCase();
// fruit_name.toUpperCase();  // we have to store this string in the variable otherwise it will not give the string in uppercase form
console.log(fruit_name);
fruit_name = fruit_name.toLowerCase();
console.log(fruit_name);


//slice -> to get a particular string use slice method.
/*
slice does not include end index but return end_index-1 (just previous one).
-> start index 
-> end index

slice(-1) return last index value.

.slice(1) return // start from 1th index and goes till last index
*/

console.log(fruit_name.slice(0,4));// appl
console.log(fruit_name.slice(1)); // pple
console.log(fruit_name.slice(-1,-5)); // pple
// console.log(fruit_name.slice(-1)); // e





// template literals

const str = "nisha";
const age = 22;

console.log(`my name is ${str} and my age is ${age}`);

