// foreach method
// foreach doesn't change the original array but return a new array.

const numbers = [4,2,5,6];
//wap to print index number as well as multiply the value present at the index by 2
function myFunc(number, index){
    console.log(`index is ${index} and number is ${number}`);
    console.log(`${number}*2 = ${number*2}`);
}
// give index as well as number present at that index but it is hectic task if we have lots of number.
// myFunc(numbers[0],0);
// myFunc(numbers[1],1);
// myFunc(numbers[2],2);
// myFunc(numbers[3],3);

//use for in loop
// for(let i in numbers){
//     // console.log(i);
//     myFunc(numbers[i],i);
// }


// by using traditional for loop
// for(let i=0;i<numbers.length;i++){
//     myFunc(numbers[i],i);
// }



// foreach as a input function(callback) lega
//callback function will be executed once for each element in forEach array method if we use. 
// foreach khud se hii myfunc mein number or index daal dega hame for loop use karne kii jarroorat nahi padegi
numbers.forEach(myFunc);

// hmm anonymous function(jiska koi name nahi hain) bhi pass kar sakte hain foreach mein as an input
numbers.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`);
    console.log(`${number}*2 = ${number*2}`);
});


// wap to print numbers by multiplying 2
numbers.forEach(function(number){
    console.log(`${number}*3 = ${number*3}`);
});





// where to use forEach
const users = [
    {firstName: "nisha", age: 23},
    {firstName: "rahul", age: 23},
    {firstName: "sachin", age: 23},
    {firstName: "akash", age: 23},
    {firstName: "ayush", age: 23},
    {firstName: "satyender", age: 23},
];
// printing firstName of each user using forEach method.
users.forEach(function(user){
    console.log(user.firstName);
})
// we can also use arrow function here
users.forEach((user)=>{
    console.log(user.firstName);
})


// we can also use for of loop to print the same
for(let user of users){
    console.log(user.firstName);
}