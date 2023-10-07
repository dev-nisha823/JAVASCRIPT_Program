

const user = {
    firstName : "Nisha",
    lastName : "Kumari",
    age : 23,
    email  : "nishakumaridav12@gmail.com",
    address : "Aurangabad",
    state : "BIHAR",
    about : function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old having emailId ${this.email} living in ${this.address} ${this.state}`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
// here we are storing the object method in variable
const aboutUser = user.about();
console.log(aboutUser); // Output: Nisha Kumari is 23 years old having emailId nishakumaridav12@gmail.com living in Aurangabad BIHAR

// but in case if we want 100 millions of such objects then should it be feasible to write all 100 millions objects.
// Then NO, we can't do such tedious task.

 


// we will create a function(which will create object and return the object)
// 1.) function will take object property as a input in the form of parameter
// 2.) add key-value pair
// 3.) object ko return karega

function createUser(firstName, lastName, email, age, address, state){
    
    // create an empty object
    const users = {}  
    // or aise bhi likh sakte hain isko 
    // const users = Object.create(userMethod); // it is not only creating objects but also setting the __proto__ and the reference of userMethods stored in this __proto__
    // __proto__ is creating bond with the objects. jo chz hame apne object mein nahi milega vo hmm __proto__ wale object mein dekhenge.


    // now we will add key-value pair but value is already written in user object then we will write the parameter
    users.firstName = firstName;
    users.lastName = lastName;
    users.email = email;
    users.age = age;
    users.address = address;
    users.state = state;
    // we will also add the about() and is18() object method
    users.about = function(){
        return `${this.firstName} ${this.lastName} having emailId ${this.email} and age is ${this.age} years old living in ${this.address} ${this.state}`;
    };
    users.is18 = function(){
        return this.age >= 18;
    };
    // users.about = userMethod.about;
    // users.is18 = userMethod.is18;

    // now we will return the object
    return users;

    // now we don't require the user object 
}
const user1 = createUser('Nisha', 'Kumari', "nishakumaridav12@gmail.com", 23, "Aurangabad", "BIHAR");
console.log("users object",user1);
const is18 = user1.is18();
console.log(is18); // true
const about = user1.about();
console.log(about);// Output: Nisha Kumari having emailId nishakumaridav12@gmail.com and age is 23 years old living in Aurangabad BIHAR
const user2 = createUser('Neha', 'Kumari', "nishakumaridav12@gmail.com", 23, "Aurangabad", "BIHAR");
const user3 = createUser('Nisha', 'Kumari', "nishakumaridav12@gmail.com", 23, "Aurangabad", "BIHAR");



// but iss function mein bahut kamiyan hain 
// jitni baar hmm new user object banayenge utni baar ye about() and is18() object method create honge memory mein
// if suppose there are 1 million users we made then 1 million about() and is18() object method will be created.

// then WHAT  TO  DO ??
// here object method definition will not change for anyone of the object.
// we will create an object where all these objects method will be stored.
const userMethod = {
    about : function(){
        return `${this.firstName} ${this.lastName} having emailId ${this.email} and age is ${this.age} years old living in ${this.address} ${this.state}`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    // new object method created to see the problem in this code
    sing : function(){
        return "too ru ru ru too ru ru !!!";
    }
}
// now we will store these object method references inside function createUser such as
/*
users.about = userMethod.about;
users.is18 = userMethod.is18;
*/
// internally javascript is storing the reference of object methods bcz object methods are already created once 





// now iss code mein bhi problem hain but kya hain
// suppose we want one more method for the user then we will create it inside userMethod object
// then again we have to store these object method references inside function createUser such as
//users.sing = userMethod.sing; 
// again if we have to create 1000 of object method then we have to store these object method references inside function as well then again its tedious work and if suppose we forgot to write the object method references inside the function.

/*
Solution: see the file 14.10__proto__.js for the solution of above code problem.
we will replace the line which is written inside function createUser()

----> const users = {}
by 
-----> const users = Object.create(userMethod);

the above line is setting the __proto__ of users and 
__proto__ is denoting the reference of userMethods object
and all the object methods written in 

*/ 






/* -----------After creating function createUser---------Now we will add all the object methods of userMethods object by using prototype into function createUser ------------------*/
createUser.prototype.about = function(){
    return `${this.firstName} ${this.lastName} having emailId ${this.email} and age is ${this.age} years old living in ${this.address} ${this.state}`;
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}
createUser.prototype.sing = function(){
    return "too ru ru ru too ru ru !!!";
}
console.log(createUser.prototype);
/*
now, replace 
-----> const users = Object.create(userMethods); 
by ---->  const users = Object.create(createUser.prototype);
bcz now there is no userMethods name object siince we have creted the prototype 
*/
