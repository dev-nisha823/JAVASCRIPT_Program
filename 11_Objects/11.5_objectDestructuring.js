// object Destructuring

const person = {
    Name : "nisha kumari",
    age : 23,
    fav_color : "blue",
    fav_fruit : "mango",
};

// old method
/*const var1 = person.Name;
const age = person.age;
// age= 21; //give error bcz of const
console.log(var1,age);
*/


// shortcut method i.e., object destructuring
// let{Name,age} = person;
// console.log(Name);
// we can also provide different name to the key i.e., var1 and var2
let{Name:var1,age:var2} = person; //bydefault the name of these variable is the key name
console.log(var1);

// restProps is the remaining properties in the object
let{Name, age, ...restProps} = person;
console.log(restProps);
console.log(person);
