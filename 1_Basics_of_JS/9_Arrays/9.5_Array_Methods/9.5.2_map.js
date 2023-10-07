// Map Array method 
// as a input it will take callback method 
// map function always makes/gives a new array where foreach don't return a new array
// when we don't return anything in function then it will return undefined.
// when we are using map function we should always try to return sth otherwise it will print undefined if we don't return.

// 1st method to use map function
const array_numbers = [1,2,4,6,1,8];
const squareRoot = function(number,index){
    //console.log("print an array where each number is in its square root format");
     return number*number;  // [ 1, 4, 16, 36, 1, 64 ]
    //return `index : ${index} , numbers : ${number*number}`;

    // we can also return index of each numbers
    //return index;

    //console.log(number*number); // this line will print squreroot of array_numbers but will not make a new array bcz in map function
    // 1 4 16 36 1 64
    // when we don't return anything in function then it will return undefined.
    // [ undefined, undefined, undefined, undefined, undefined, undefined ]
}
const squareNumber = array_numbers.map(squareRoot);
console.log("squareroot of numbers : ",squareNumber);


// 2nd method to use map 
const sumNumbers = array_numbers.map(function(number){
    return number + 1;
});
console.log("sum of numbers : ",sumNumbers);

// 3rd method to use map
const subtractNumbers = array_numbers.map((number) => {
    return number - 1;
})
console.log("subtraction of numbers : ",subtractNumbers);



// Real world examples where we can use map function/method
const users = [
    {firstName: "nisha", age: 23},
    {firstName: "rahul", age: 23},
    {firstName: "sachin", age: 23},
    {firstName: "akash", age: 23},
    {firstName: "ayush", age: 23},
    {firstName: "satyender", age: 23},
];
const userNames = users.map((user,index,array) => {
    //return user.firstName; //[ 'nisha', 'rahul', 'sachin', 'akash', 'ayush', 'satyender' ]
    return `index : ${index}, userage : ${user.age} , userName : ${user.firstName}`;
    //return array; //print the array as it is according to its number of items in the array
    //return `${array}`;
    /*
    print this 6 times bcz in users array we have 6 users
    ['[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]']
    */
});
console.log(userNames);


/*
const userNames = users.map((user,userage) => {
    //return user.firstName; //[ 'nisha', 'rahul', 'sachin', 'akash', 'ayush', 'satyender' ]
    return `userage : ${userage.age} , userName : ${user.firstName}`;
});
output of above code will be : 
[
  'userage : undefined , userName : nisha',
  'userage : undefined , userName : rahul',
  'userage : undefined , userName : sachin',
  'userage : undefined , userName : akash',
  'userage : undefined , userName : ayush',
  'userage : undefined , userName : satyender'
]
Why undefined is coming when we are trying to access the age of user because
'.map()' function in JavaScript takes a callback function with three arguments: the current element being processed, the index of that element, and the array itself.

syntax of map() :
const newArray = array.map((currentValue, index, array) => {
  // return newValue based on currentValue
});

The .map() function is a higher-order function in JavaScript that operates on arrays. 
It is used to transform each element of an array into a new value based on the callback function provided 
and returns a new array with the transformed values.


Parameters:

    currentValue: The current element being processed in the array.
    index (optional): The index of the current element being processed.
    array (optional): The array on which .map() was called.
*/



//The .map() function is a pure function, meaning it does not modify the original array; instead, it returns a new array with the transformed values.
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.map((num) => {
  return num * 2;
});
console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(newArray);      // Output: [2, 4, 6, 8, 10]

