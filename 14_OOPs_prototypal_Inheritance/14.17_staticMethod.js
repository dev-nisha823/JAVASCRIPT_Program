// static method and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // but we can make the methods which will be directly related to class and if we want to call these methods we don't reuire/need to create object
    // static methods of class
    static classInfo(){
        return `this is Person class method`;
        // we can't call this classInfo method by using object
    }

    // static properties is accessible by writing class Name
    static propertyName = "static Property";


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

// only object can call the methods of class means these method is related with the object only
console.log(person1.fullName()); // nisha kumari


// if we try to call static methods through class object then it will give error
//person1.classInfo(); // TypeError: person1.classInfo is not a function bcz we can't call classInfo method by using object since it can only be called by class

// but we can make the methods which will be directly related to class and if we want to call these methods we don't reuire/need to create object
// how we can call the static method 
// by directly writing the class name
// don't need to make objects to call the static methods
Person.classInfo();
// we can also store the value of static method into any variable
const staticMethods = Person.classInfo();
console.log(staticMethods); // this is Person class method

// real world example of static method is app initialization



// we can access static properties by 
console.log(Person.propertyName); // static Property

// if we try to call static property by object then it will give undefined 
console.log(person1.propertyName); // undefined bcz object doesn't have any static property
