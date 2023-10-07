// objects are of reference type.
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index
// we can store array inside objects
// key is called as properties inside object literals.
// can add as many as keys inside objects.


const Person = {
  firstName : "Nisha",
  age : 23,
  1 : "one", // this 1 is also a string
}


// only unique key is allowed in objects if there will be repetition of key in objects then always last key override first key.
/*
  const obj = {
    key1 : "v1",
    key2 : "v2",
    key1 : "v3",
  }
  console.log(obj) // {key1 : "v3", key2 : "v2"}
*/  

// we can't write same key value pair more than one time in an object
// if we write then it will not gve error but the later one will override the earlier one
const obj1 = {
  key1 : "value1",
  key2 : "value2",
  key3 : "value3",
  key1 : "value4",
}
console.log(obj1);
// output : { key1: 'value4', key2: 'value2', key3: 'value3' }




// -------------------------------------------------------
// how to create objects
const person = {
    name:"nisha", 
    "age":22,
    hobbies : ["cycling","sleeping", "listening music"]
}; // called as object literal
console.log(person);
console.log(typeof person);


// -------------------------------------------------------
// how to access data from objects
console.log(person.name,person.age);
// to access hobbies from person object
console.log(person.hobbies);
console.log(person["hobbies"]);
//  in javascript key is in string form by default but when we use square bracket notation we have to put key in " " quotes.


// difference between square bracket and dot notation
// javascript gives error if we include spaces between two words or if it is not inside the double quotes
// person.person hobbies = "gaming,cycling"; 
// console.log(person.person hobbies) give error bcz of spaces between two strings but we can avoid this error by writing it inside [square bracket notation].
// 1st method
console.log(person["person hobbies"]);
// 2nd method
//  creating a variable key 
const key = "email";
// now we have to add this key variable inside person object but the name of key should be whatever is written inside " double quotes".
person.key = "nisha@gmail.com" //it will write key name as key not as email that's y we will use square bracket notation.
person[key] = "nisha@gmail.com"; //don't write key variable inside double quotes otherwise it will be treated as a string or key name.
                            


// ----------------------------------------------------------
// how to add new key value pair to objects.
person.gender = "male";
person["phone_number"] = 90077397091;
console.log(person);

