// Promise.resolve
// it will take any value and return promise resolve and give that value

const myPromise = Promise.resolve(5);
Promise.resolve(5).then(value => {
    console.log(value);
});




// Promise chaining
/*
-> we can chain promise and make them pass the resolved values to one another like this
p.then((result) => {

}).then(() => {

}).then 
and so on

The idea is to pass the result through the chain of .then() handlers
1> the initial promise resolves in 1 seconds(assumption)
2> the next .then() handler is then called which returns a new promise (resolved with 2 values)
3> the next .then() gets the result of previous one and this keeps on going

every call to .then() returns a new promise whose value is passed to next one and so on. we can even create custom promises inside .then()

*/ 
// then() -> then method always return promise bcz we can create chain of promise

function myPromise1(){
    return new Promise((resolve, reject) => {
        resolve("resolve promise");
    });
}
myPromise1()
    // we can use then method only on promise not on string
    .then((value) => {
        console.log(value); // resolve promise
        value += "value1";
        return value; // return promise
        // internally the line 22 will work like this
        // return Promise.resolve(value); // means it will return promise

        // if we don't return anything then it will return the promise but the value will be undefined
        // return undefined;
        // Promise.resolve(undefined); //value will be undefined but it will return the promise
    })
    // again we are calling the promise
    .then((value) => {
        console.log(value); // resolve promise value1
        value += "value2";
        return value;
    })
    .then((value) => {
        console.log(value); // resolve promise value2
    })
// above code is called as promise chaining


// we can't use then method on string
/*"Nisha".then((value) => {
    console.log(value);// error : "Nisha".then is not a function
}); 
*/


