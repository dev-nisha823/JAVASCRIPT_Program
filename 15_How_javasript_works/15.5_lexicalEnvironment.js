// lexical environment -> where the code is present locally or globally, scope chain

/*
const lastName = "vashistha";
const printName = function(){
    const firstName = "harshit";
    console.log(firstName);
    console.log(lastName);
}
printName();
*/

const lastName = "vashistha";
const printName = function(){
    const firstName = "harshit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();

