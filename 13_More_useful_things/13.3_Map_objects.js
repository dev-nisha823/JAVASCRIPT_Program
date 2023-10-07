// Maps
// map is an iterable.

// store data in ordered fashion means it will follow the sequence in which you have inserted the data to Map Object
// but object doesn't follow the ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// in object we can use for in loop but not for of loop
// in Map() object we can directly use for of loop


// difference between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key like array, number, string

/*
const person = {
    firstName : "Nisha",
    age : 23,
    1 : "one", // this 1 is also a string
}
*/

// by writing like this we will not get undefined when we try to access array as a key in Map() Object
// One way to do this is by assigning the array to a variable and then using that variable to both set and get the value from the Map.
const person1 = new Map();
const keyArray = ["item1", "item2", "item3"];
person1.set(keyArray, 'oneTwoThree');
console.log(person1.get(keyArray)); // Output: oneTwoThree



// syntax of Map() object
const person = new Map();

// adding key-value pair to Map() object
// we can write any type of key in Map() object
person.set('firstName', 'NIsha');
person.set('age', 23);
person.set(1, 2); // here 1 is number

// array as key we can use in Map() object but we can't access its value using this array as key 
person.set(["item1", "item2", "item3"], 'oneTwoThree');
person.set({"lastName" : "Kumari"}, 'Kumari'); //object is passed as key
console.log(person);
// Map(3) { 'firstName' => 'NIsha', 'age' => 23, 1 => 1, [ 'item1', 'item2', 'item3' ] => 'oneTwoThree'}


// how to access key-value pair from Map() objects
// use get method
console.log(person.get('age'));// age has value 23
console.log(person.get(1)); // 1 key has 2 as a value
console.log(person.get(["item1", "item2", "item3"])); // undefined bcz the array which i have set to Map object is having different memory and 
// array by which i am trying to access value is having different memory despite of having same element it will give undefined.
console.log(person.keys()); // it will give all the keys of person Map() object
// [Map Iterator] { 'firstName', 'age', 1, [ 'item1', 'item2', 'item3' ], { lastName: 'Kumari' }}



// using for of loop to find key and typeof key of Map object
for(let key of person.keys()){
    console.log(key, typeof key); 
    /*
    firstName            string
    age                  string
    1                    number
    [ 'item1', 'item2', 'item3' ] object
    { lastName: 'Kumari' }        object
    */
}



// 
for(let key of person){
    console.log(key); // it will return key-value pair
    /*
    [ 'firstName', 'NIsha' ]
    [ 'age', 23 ]
    [ 1, 2 ]
    [ [ 'item1', 'item2', 'item3' ], 'oneTwoThree' ]
    [ { lastName: 'Kumari' }, 'Kumari' ]
    */
    console.log(typeof key); // object
    console.log(Array.isArray(key)); // true means it will return an array
}

// destructuring concept 
// we can't write like this
/*for(let key, value of person){
    console.log(key, value);
}*/
for(let [key, value] of person){
    console.log(key, value);
}
/*
firstName NIsha
age 23
1 2
[ 'item1', 'item2', 'item3' ] oneTwoThree
{ lastName: 'Kumari' } Kumari
*/



// -------------Real World examples---------------
// array inside array

// we don't want to add more info to user object but i want to add more info to any other place
// then we will use Map() object
const user = {
    id : 1,
    Name : "Nisha",
}
const user2 = {
    id : 2,
    Name : "Anisha",
}
const userInfo = new Map();
userInfo.set(user, {age : 23, gender : "female"}); // here we are passing object as key and value both
userInfo.set(user2, {age : 21, gender : "female"});
console.log(userInfo);
/*
output : here mapping of object with object is happening
Map(1) { { id: 1, Name: 'Nisha' } => { age: 23, gender: 'female' } }
*/
// if we want ageand gender of user
console.log(userInfo.get(user).age);  // 23 similarly for gender
console.log(userInfo.get(user2).age); // 21





// When initializing a Map with multiple key-value pairs, you need to separate each pair with a comma (,)
const users = new Map([
    [ 'firstName', 'Nisha' ],
    [ 'age', 23 ],
    [ 1, 2 ],
    [ [ 'item1', 'item2', 'item3' ], 'oneTwoThree' ],
    [ { lastName: 'Kumari' }, 'Kumari' ],
]);
console.log(users); // print them in object form
/* output------>
Map(5) {
  'firstName' => 'Nisha',
  'age' => 23,
  1 => 2,
  [ 'item1', 'item2', 'item3' ] => 'oneTwoThree',
  { lastName: 'Kumari' } => 'Kumari'
}

*/