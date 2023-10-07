console.log("script start"); // script start

// now import code from fname.js and age.js into app.js file
import { firstName as fname} from "./utils/fname.js";
import { age } from "./utils/age.js";
// when we use default at the time of export no need to use curly braces
// we can write anything in place of Person name
import Person, {Person2} from "./utils/person.js";

console.log(fname, age); // Nisha 23

const person = new Person("Nisha", "kumari", 23);
person.info(); // Nisha kumari 23
console.log(person); // Person {firstName: 'Nisha', lastName: 'kumari', age: 23}


const person2 = new Person2("Rahul", "Manipal", 23);
person2.info2(); // Rahul Manipal 23
console.log(person2); // Person2 {firstName: 'Rahul', lastName: 'Manipal', age: 23}
