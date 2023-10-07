// optional chaining 
// introduced in ECMA script 2020 (ES11) to simplify the working with null or undefined values in nested object property



const user = {
    Name : "Nisha Kumari",
    // address : {houseNumber : '23'},
};
console.log(user.Name); // "Nisha Kumari"
console.log(user.address);  //undefined
console.log(user.address.housenumber); // error : cannot read property 'housenumber' of undefined 
// above line number 9 will give error bcz we are trying to access the property of undefined  
// then why we are accessing it if it is undefined

// most of the time we don't want some property but after sometime we need this property to include in the object 
// we do these things when we are using state management in react js
// that's why we want that this line number 12 don't give error but if giving undefined is ok.
// then we can write above code to avoid error when we are trying to access the property and value of nested object the like this
console.log(user?.Name);
console.log(user?.address?.housenumber); //output : undefined means now it will not give error




/* ------------------------------------------------------ */
// main difference between Regular dot operator(.) and Optional chaining operator(?.) is how they handle null values ------>
/*
Regular dot operator (.)
The regular dot operator is used to access properties and methods of an object.
If the property being accessed is not available (i.e., null or undefined), it will throw a TypeError, causing the code execution to stop.
*/
const person = {
    name: 'John',
    address: {
      city: 'New York',
    },
};
console.log(person.address.city); // Output: 'New York'
console.log(person.address.country); // Output: undefined
console.log(person.age); // Output: undefined
console.log(person.nonExistentProperty); // Output: undefined
// Regular dot operator doesn't allows us to safely navigate through nested properties of an object
console.log(person.address.country.code); // Error: Cannot read property 'code' of undefined



/*
Optional chaining operator (?.)
The optional chaining operator (?.) checks if the property being accessed is null or undefined. 
If it is, the expression returns undefined instead of throwing an error, 
and the code execution continues without interruption. 
If the property exists, it will be accessed as usual.
*/
console.log(person.address?.city); // Output: 'New York'
console.log(person.address?.country); // Output: undefined
console.log(person.age?.years); // Output: undefined
console.log(person.nonExistentProperty?.someValue); // Output: undefined
// optional chaining operator allows you to safely navigate through 
// nested properties without causing errors, even if one or more 
// intermediate properties are missing.
console.log(person.address.country?.code); // Output: undefined

// The optional chaining operator can also be used with function calls, preventing function calls on nullish values:
const person1 = {
    name: 'John',
    sayHello: function () {
      return 'Hello!'; 
    },
  };
  console.log(person1.sayHello?.()); // Output: 'Hello!'   
  console.log(person1.sayGoodbye?.()); // Output: undefined
  

let users;
console.log(users?.firstName);//undefined 
// in above code optionalchaining operator first check for the users if it there or not
// if it is there but not defined then it will print undefined for the whole code after it
