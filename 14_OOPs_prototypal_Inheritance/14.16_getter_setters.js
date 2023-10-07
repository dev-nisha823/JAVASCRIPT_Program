// getter and setters
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    // getter
    get about(){
        return `My name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`;
    }
    
    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // setter will always take one parameter
    set about(information){
        // destructring the array
        const [firstName, lastName] = information.split(" "); // split will see where is the space between the name if it find the space it will split the words in the form of list
        // [mohit sharma]
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("nisha", "kumari", 22);
console.log(person1); //Output: Person { firstName: 'nisha', lastName: 'kumari', age: 22 }

// we can call methods of class 
console.log(person1.fullName());// Output: nisha kumari 
// but we can't call properties 
console.log(person1.fullName); // calling the properties
/*
// printing function bcz fullName is 
ƒ fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
*/

// getter will make methods of class behave as properties 
// if we want to call the properties then we have to usee getter i.e,. get
/*
----> write get before methods of class to treat that method as properties. so that, we can call it
get fullName(){
    return `${this.firstName} ${this.lastName}`;
}
*/

// calling getter method
console.log(person1.about); //Output: My name is nisha kumari and i am 22 years old

// setting fullname
// if we want to set the firstName and lastName then
// step1 : first set them 
// all these three lines of code will do the same thing and they are same
person1.setName("Harsh","kumar");
person1.firstName = "Harsh";
person1.lastName = "kumar";
// step2 : then print each one of them 
console.log(person1.firstName); // Harsh
console.log(person1.lastName); // Kumar
// Step3: Output--------> here the person1 firstName and lastName will change from 'nisha kumari' to 'harsh kumar'
console.log(person1); // Output: Person { firstName: 'Harsh', lastName: 'kumar', age: 22 }




// setter method 
// suppose we want to set Name of the person like this
person1.about = "mohit sharma";
console.log(person1); // Person { firstName: 'mohit', lastName: 'sharma', age: 22 }