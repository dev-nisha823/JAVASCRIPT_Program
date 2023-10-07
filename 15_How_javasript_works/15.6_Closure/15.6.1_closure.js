// closure
// innerfunction can access the outer function 
// whenever innerfunction will return it will return with the lexical environment of outerfunction as well means it will return with the local variable of outerfunction


// function can return functions
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}
const ans = printFullName("harshit", "sharma");
console.log(ans); // Output: ƒ printName(){ console.log(firstName, lastName); }
ans(); // Output: Nisha Kumari

// jb bhi function return hota hain kisi dusre function se to vo waha ke local memory or variable ko saath mei lekar return hota hain 
// whenever a function return from a different function then earlier one will return itself as well as it will return with the local variable of the later function
// In above code printName will return with local variable (firstName, lastName) also and it will be stored in 'ans'. This is what the closure in js
// firstName and lastName will not be in the local memory of ans FEC but it is in the closure of GEC
