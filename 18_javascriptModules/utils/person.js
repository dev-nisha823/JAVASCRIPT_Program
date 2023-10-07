// there must be only one export default in one file
export default class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info(){
        console.log(this.firstName, this.lastName, this.age);
    }
}

// named export
export class Person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info2(){
        console.log(this.firstName, this.lastName, this.age);
    }
}
