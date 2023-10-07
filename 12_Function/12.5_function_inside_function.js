// function inside function in js
const app = () => {
    // function declaration
    function myfunc(){
        console.log("hello world");
    }
    // function expression
    const sum = function(num1,num2){
        return num1 + num2;
    }
    // arrow function
    const mul = (num1,num2) => {
        return num1*num2;
    }
    
    console.log("inside app");
    myfunc();
    console.log(sum(9,5));
    console.log(mul(4,5));
}
app();