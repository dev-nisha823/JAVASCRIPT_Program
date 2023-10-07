// setTimeout() 
// -> as an input/argument it take function and time(when u want to call the function)
// webBrowser provides the setTimeout() function 


console.log("script start");
// const hello = () => console.log("hello world");
// setTimeout(hello, 1000);
setTimeout(() => console.log("hello world"),1000);
setTimeout(() => console.log("Inside setTimeout"),0);
for(let i=0; i<100; i++){
    console.log("inside for loop");
}
console.log("script end");

// asynchronous means setTimeout will not block the further code from execution 
// setTimeout return id 
// clearTimeout is used to clear the setTimeout id after clearing it will not return the setTimeout callback function

const id = setTimeout(()=>{console.log("Inside setTimeout 3rd")}, 0);
console.log("setTimeout id is", id);
console.log("clearing timeout");
clearTimeout(id);

// output: 
/*
script start
100 inside for loop
setTimeout id is 11
clearing timeout
script end
undefined
Inside setTimeout
hello world
*/