// apply method
// apply() is similar as call() and internally apply uses call
// It allows us to call a function and explicitly set 'this' value and pass arguments as an array-like object (usually an actual array).
// Syntax: 
// functionName.apply(thisArg, [arg1, arg2, ...]);

/*
 in call we are passing different different arguments 
 but in apply() we will pass arguments inside array
*/

function userInfo(favLanguage, hobby){
    console.log(`My userId is ${this.userId} and favColor is ${this.favColor},${favLanguage} and my hobby is ${hobby}`);
}
const user1 = {
    userId : 1,
    firstName : "Rahul",
    age : 22,
    favColor : "Black"
};
const user2 = {
    userId : 2,
    firstName : "Nisha",
    age : 23,
    favColor : "Blue"
};
// using apply()
userInfo.apply(user1, ["Hindi", "Exploring world"]); // Output : My userId is 1 and favColor is Black,Hindi and my hobby is Exploring world
userInfo.apply(user1, ["English", "Exploring world", "Hello World"]); // Output: My userId is 1 and favColor is Black,English and my hobby is Exploring world,Hello World

userInfo.apply(user1, user2, ["English", "Exploring world"]);
// Output: My userId is 1 and favColor is Black,undefined and my hobby is undefined
userInfo.apply(user1, user2, ["English", "Exploring world"],["Hello World"]);
// Output: My userId is 1 and favColor is Black,undefined and my hobby is undefined

/*
Explanation:
There's an issue in line number 31. 
The apply() method takes only two arguments: the 'this' context and the array of arguments. 
Here, user2 is passed as a separate argument instead of being part of the array. 
Because of this, the userInfo function doesn't receive the favLanguage and hobby parameters correctly, 
resulting in undefined for favLanguage.
*/

/*
Explanation:
Same reason for the code of line number 33 but
here, we are providing three arrays of arguments.
*/

