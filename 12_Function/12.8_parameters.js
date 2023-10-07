//--------------------------default parameters--------------------------

function sum(a,b=0){
    return a+b;
}
console.log(sum(4)); // output:4 bcz 0 is the default value of b
console.log(sum(4,6)); // output:10 bcz now the value of b will be 6 not 0 
// it means if we don't pass the 2nd argument then it will take default value n if we pass the 2nd argument then it will take the 2nd argument not the default one.


//how we does default parameter before ES16 javascript
function mul(a,b){
    if(typeof b === "undefined"){
        // if b value is undefined then b = 0 otherwise if not then b = 7
        b = 0;
    //  b = 4;
    }
    return a*b;
}
console.log(mul(5,7));






//--------------------------------rest parameters-----------------------------------
// remaining arguments will be assigned to the rest parameters in the form of an array.
// syntax: ...argument
function restParameter(a,b,...c){
    console.log(`a is ${a}`); // a=1
    console.log(`b is ${b}`); // b=2
    console.log(`c is ${c}`); // c=[3,4,5,6,7,8,9,10] 
}
restParameter(1,2,3,4,5,6,7,8,9,10);


// WAP to print sum of all numbers using rest parameters
function addAll(...numbers){

    console.log(numbers); 
    console.log(typeof numbers); //object
    console.log(Array.isArray(numbers)); //true

    let sum = 0;
    for(let number of numbers){
        sum = sum + number;
    }
    return sum;
}
console.log(addAll(10,20,30,40,50,60,70,80,90,100));





//-----------------------------------Parameter destructing-------------------------------
// uses in object and react js
// in parameter destructuring we destructure the object and using the objects inside the function to acces the data of objects using square bracket and dot notation.
const person = {
    lastName : "manipal",
    gender : "male", 
    age : 23,
}
// function person_details(obj){
//     console.log(obj.lastName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

// but we can do object destructing in case of parameters as well
function person_details({lastName, gender, age, color}){
    console.log(lastName);
    console.log(gender);
    console.log(age);
    console.log(color); // undefined bcz it is not present in the person object 
}
person_details(person);