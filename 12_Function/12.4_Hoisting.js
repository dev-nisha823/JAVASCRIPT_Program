// hoisting : calling a function before its declration.
// hoisting always happens with function declaration not with function expression otherwise it will give error
hello();
function hello(){
    console.log("hello world");
}

// hoisting in function expression
function1();
const function1 = function(){
    console.log("hello world"); // give error whether we use let,var n const
}

// hoisting in arrow function
function2();
const function2 = () => {
    console.log("hello world"); // give error whether we use let,var n const
}
// we can't access function before initialization if we use const n let with function expression and will gives error


