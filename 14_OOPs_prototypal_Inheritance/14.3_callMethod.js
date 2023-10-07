// call method
// Syntax:
// functionName.call(thisArg, arg1, arg2, ...);
/*
---> The value passed as thisArg becomes the this value for the called function.

---> The function is immediately executed when you use call(), 
     call method doesn't return a new function. It directly calls the function with the specified context and arguments.

---> We can pass as many arguments we want

---> Borrowing methods: call() is commonly used for borrowing methods
     from one object and using them in another object. 
     call() allows us to reuse functions with different objects as their context.

---> Function properties: If the function you are calling with call() modifies properties on its 'this' context object, 
     those changes will reflect in the original object as well.

----> Overall, call() is a powerful method that provides fine-grained control over the context in which a function is executed 
*/


function myfunc(){
    console.log("hello Nisha");
}
myfunc() // hello nisha
// calling the function by using call method
myfunc.call(); // hello nisha


const user1 = {
    userId : 1,
    firstName : "rahul",
    age : 22,
    // only user1 can call this 'about' object method not user2.
    about : function(){
        console.log(`Hello! I am ${this.firstName} and my age is ${this.age}`);
       // we can also use 'this' without template string to only print the values of properties which is inside object
      //  console.log(this.firstName, this.age);
    },
    favColor : "Black"
} 
const user2 = {
    userId : 2,
    firstName : "Nisha",
    age : 23,
    favColor : "Blue"
    // user2 want to borrow 'about' object method from user1
    // user2 want to borrow 'about_user3' object method from user3
}
user1.about(); //Hello! I am rahul and my age is 22

// here 'this' keyword is denoting to user2 that's why we have to provide 'this' into call method
// 'this' kii binding kiske saath hogi user1 or user2
user1.about.call(user2); //Hello! I am Nisha and my age is 23

// if we don't provide 'this' then it will give undefined.
// bcz here 'this' is denoting to either 'user1' or 'user2' object.
user1.about.call(); // Hello! I am undefined and my age is undefined ---> for firstname and age


const user3 = {
    userId : 3,
    firstName : "raman",
    age : 21,
    // only user1 can call this 'about' object method not user2.
    about_user3 : function(hobby, favMusic){
        console.log(this.firstName, this.age, hobby, favMusic);
    },
    favColor : "Black"
}
// we can also pass extra argument to call method with 'thisArgument'
user3.about_user3.call(user2, "exploring things", "romantic song");
// output: Nisha 23 exploring things romantic song

// Now we will write the function outside then use it inside object and use call method to call the function.
function userInfo(favLanguage){
    console.log(`My userId is ${this.userId} and favColor is ${this.favColor} and ${favLanguage}`);
}
// now we will call this function using call method and pass thisArgument as any object and will also pass and argument to it
userInfo.call(user1,"Hindi"); // My userId is 1 and favColor is Black and Hindi
userInfo.call(user2); // My userId is 2 and favColor is Blue and undefined ---> undefined for favLanguage argument we didn't pass
userInfo.call(user3,user2,"Hindi");  //My userId is 3 and favColor is Black and [object Object] and Hindi
/*
Explanation: 
The userInfo function is called with call(), and the context (this) is set to user3. 
The user2 object is passed as the favLanguage argument, and "Hindi" is passed as the second argument. 
When user2 is passed as favLanguage, it is treated as an object (since favLanguage is the first parameter of userInfo), 
so [object Object] is printed for favLanguage. 
Additionally, user2 doesn't have a favColor property, so it takes the value of favColor from the user3 object, which is "Black".
*/



function introduce_user(user1, user2, user3) {
    console.log(`Let me introduce ${user1}, ${user2} and ${user3}`);
}
//we used call() to set the 'this' context to 'null', as we don't have any specific object to be used as 'this', and we passed two additional arguments that are passed to the 'introduce_user' function.
introduce_user.call(null, 'rahul', 'Nisha', 'raman'); // Output: Let me introduce rahul, Nisha and raman
introduce_user.call(null); // Output : Let me introduce undefined, undefined and undefined. 
// undefined bcz no argument is passed in above code according to the parameter of 'introduce_user' function.




