// Solution: of file 14.9_memoryProblem_in_methods.js
// __proto__ creates chain between object and proto and gives the reference of the object 


const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key3 : "value1"
}
console.log(obj2.key1); // output: undefined
// how to solve this problem ???
/*
In case, javascript not able to find the 'key1' in 'obj2' then
'obj2' should go and check in 'obj1' either obj1 has key1 or not.
If 'obj1' has key1 then -> obj2 should print the key1 value
But how we can do these things let's understand -------->
*/

// there is another way to create an empty object in javascript,
const obj3 = Object.create(obj1);
// we can set the value of __proto__ by using Object.create() method

console.log(obj3); // Output: {}  <------ an empty object
// now we can add key-value pair in obj3
obj3.key4 = "value4";
console.log(obj3.key2); // value2
/* 
javascript, will first check for key2 in obj3 if not present then
javascript will go to 'Object.create(obj1)' and khud se check karegi obj1 mein key2 ko
if key2 is present in obj1 it will print the value of key2

BUT  HOW IT IS HAPPENING ?? HOW JS IS DOING THESE THINGS ??
---> when we print obj3, there will be
   '__proto__'   <---- Javascript ko jo bhi key-value pair nahi milta uske object mein then
   javascript will search into __proto__
   __proto__  jo hain vo Object hain means obj1 
  __proto__ and [[prototype]] both are same according to official ecmascript documentation
  eg-> [[Prototype]]: Object
  prototype is different than __proto__ or [[prototype]]
*/

// how we can print __proto__ ??
// here __proto__ is indicating obj1 bcz we are creating obj3 by using Object.create() and passing obj1 to it 
console.log(obj3.__proto__); //output: { key1: 'value1', key2: 'value2' }
console.log(obj3); // Output: { key4: 'value4' }
// obj3 kaa __proto__ jo set hain vo obj1 ke reference hain isiliye vo obj1 ko indicate kar rha  



