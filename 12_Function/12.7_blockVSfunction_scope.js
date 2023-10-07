// block scope vs function scope
// let and const are block scope {} these curly braces is considered as block scope whereas 
//  var is function scope.


// we can't access let and const outside its own block and if we try to access it will give error bcz let and const are block scope

// 1st block
{
    let first$name = "NISHA"
}
//console.log(first$name); // error

// 2nd block
{
    // block scope
    let first$name = "RAHUL"
    console.log(first$name); 
}

// above two block are different there let variable will behave differenty so whenever we give the let variable same name then also it will not give error
// when we try to access it inside its own block but outside we can't access;
{
    console.log(first$name); // can't access first$name but we can do it in variable
    // ReferenceError: Cannot access 'first$name' before initialization
}

// global scope
let first$name = "jenat";
console.log(first$name); // jenat


// above code snippet tries to say that 
// both first$name of let are different they are only accessible in their block only not outside the block 
// if we try to access it outside the block it will give uncaught referencerror : first$name is not defined.
// same case with const as well



// this whole page act as a main function for this variable firstname
{
    // var is function scope here 
    var firstname = "ritika";
    console.log(firstname);
}

{
    var firstname = "sanam";
    console.log(firstname);
}

// both the block is different but

{
    // this b lock can access the above block variable firstname
    console.log(firstname); //sanam just above variable 
}


if(true){
    //if condition is always true
    let firstname = "rohit";
    console.log(firstname);
}
console.log(firstname);// give error bcz we can't access let outside of block


// let firstname = "himmat";
function myfunc(){
    if(true){
        //if condition is always true
        //we can only use this let inside this block only not in the whole function.
        let firstname = "rohit";
        console.log(firstname);
    }
    console.log(firstname); //give error bcz firstname is not inside the myfuc() it is inside the if block with let 
}
myfunc();

function myfunc(){
    if(true){
        //if condition is always true
        // we can use this variable in whole function
        var firstname = "rohit";
        console.log(firstname);
    }
    console.log(firstname); // we can access variable and print firstname
}
myfunc();




// but these rules are not applicable for var
function myapp(){
    let fruit = "apple";
    function fun(){
        let fruit = "grapes";  //similarly we can only access this fruit only inside this fun not outside this fun bcz let is block scope
        console.log("fun fruit",fruit);
        console.log("fruit",fruit);
    }
    if(true)
    {
        // we can't access this fruit1 outside this if block bcz let is block scope
        let fruit1 = "mango";
        console.log("fruit name is ",fruit1);
        console.log("fruit2",fruit);
    }
    console.log("fruit name is ",fruit);
    fun();
}
myapp();
// console.log("fruit name is ",fruit); give error bcz no fruit let variable is defined in global scope