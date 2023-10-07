// bind method
// Syntax:
// const boundFunction = functionName.bind(thisArg, arg1, arg2, ...);


function userInfo(favLanguage, hobby){
    console.log(`My userId is ${this.userId} and favColor is ${this.favColor} and favLanguage is ${favLanguage} and my hobby is ${hobby}`);
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
//userInfo.bind(user1, ["English", "Sleeping"]); // return nothing 

// bind() method
// bind returns a new function
const myfunc = userInfo.bind(user1, ["English"],["Sleeping"]);
// in future if we want to call the function then 
myfunc(); // Output: My userId is 1 and favColor is Black and favLanguage is English and my hobby is Sleeping


// bind() method is a function prototype method available on all function objects. 
// It allows us to create a new function that has a specific 'this' context permanently bound to it
// and unlike call() and apply() bind() doesn't execute the function immediately but 
// bind() returns a new function with the bound 'this' value allowing us to call it later as needed.

// Cannot rebind: Once a function is bound using bind(), its this context cannot be rebound. The bound context is fixed and cannot be changed.
//  If the original function has properties, they will be copied to the new bound function.


function multiply(a, b) {
    return a * b;
  }
const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(5)); // Output: 10
/*
Explanation:
we use bind() to create a new function multiplyByTwo with the first argument (a) permanently set to 2.
Now, whenever we call multiplyByTwo(x), it multiplies x by 2 since a is bound to 2, and x becomes the second argument (b).
*/
