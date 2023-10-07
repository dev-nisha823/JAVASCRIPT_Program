class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 3;
    }
    isCute(){
        return true;
    }
}
// extends keyword is used to inherit the constructor or methods of Base class ie., Animal and sub class is Dog
class Dog extends Animal{
    // now we will make constructor of Dog class
    constructor(name, age, speed){
        // speed will check the running speed of dog
        // we can use Animal class constructor for name and age property by using super keyword
        super(name, age) // parent class
        this.speed = speed;
    }
    run(){
        return`${this.name} is running at speed of ${this.speed} kmph`;
    }
    // we don't want eat method of Animal class we want to modify eat method in Dog then
    eat(){
        return `Modified Eat: ${this.name} is eating`
        // whenever we call any object of Dog class then this 'eat()' method should be called.
    }

}
// if there will be no constructor in sub class then javascript will search in the super/parent/base class bcz subclass can inherit the constructor of Base/parent/super class by using extends keyword
// means sub class inherits the property of Base class

// create object using new keyword and call the constructor
const tommy = new Dog("tommy",2,45);
console.log(tommy); // Output: Dog { name: 'tommy', age: 2, speed: 45 }
console.log(tommy.isSuperCute()); // true bcz age is lessthan 3
console.log(tommy.isCute()); // true
console.log(tommy.run()); // Output: tommy is running at speed of 45 kmph
// if we make same method in base and sub class both, if we are accessing it by the object of sub class then sub class methods will be called.
console.log(tommy.eat()); // Output: Modified Eat: tommy is eating



const animal1 = new Animal("sheru", 3);
console.log(animal1.eat()); //sheru is eating
// here Animal eat() method will be called bcz we are using Animal class instead of Dog class

