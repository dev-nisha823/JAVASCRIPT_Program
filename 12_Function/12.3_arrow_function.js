// Arrow Function in js

// declaring arrow function
const arrow_function = (parameters1,parameters2,parameters3) => {
    console.log("sth");
}
arrow_function(arguments);

// for single parameter we can write arrow function as
const arrow_function1 = parameter => {
    console.log("sth");
}
arrow_function1(argument);

// OR

const arrow_function2 = parameter => console.log("sth");

// for zero parameter we have to use () otherwise it will give error
const arrow_function3 = () => {
    console.log("print sth");
}
arrow_function3();

const sum = (num1,num2,num3)=>{
    return num1+num2+num3;
}
sum(1,2,3);
console.log(sum(1,2,3));