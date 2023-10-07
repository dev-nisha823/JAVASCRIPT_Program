// promiseAPI

// There are 6 static methods of promise class:
/*
1-> Promise.all(promises) -: waits for all promises to resolve and returns the array of their results.
    If any one fails, it becomes the error & all other results are ignored

2-> Promise.allSettled(promises) -: waits for all the promises to settle and returns their results as an array of objects with status and value.

3-> Promise.race(promises) -: waits for the first promise to settle and its result/error becomes the outcome.

4-> Promise.any(promises) -: waits for the first promise to fulfill(& not rejected) and its result becomes the outcome.
    Throws AggregateError if all the promises are rejected.

5-> Promise.resolve(value) -: makes a resolved promise with the given value.

6-> Promise.reject(value) -: makes a rejected promise with the given error.

*/ 


// all these promises will run at the same time in console
// first promise
let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    }, 10000);
});

// second promise
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    }, 4000);
});

// third promise
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    }, 3000);
});

// when promise will resolved their value will be printed on console
// promise1.then((value)=>{
//     console.log(value);
// })

// promise2.then((value)=>{
//     console.log(value);
// })

// promise3.then((value)=>{
//     console.log(value);
// })


// Task 1 -> i want to see all the values of promises at the same time. How ??
// use Promise.all(promises)
// when all the promises will be resolved then it will give an array which is having the value of all these promises
// if any one of the promise is rejected then Promise.all(promises) will not execute or resolve the promises who are not rejected and give error on the console.
let promise_all = Promise.all([promise1, promise2, promise3]);
promise_all.then((value)=>{
    console.log(value); // (3) ['value 1', 'value 2', 'value 3'] after 3 sec we will see this output but promise1 is taking 1sec, promise2 is 2 sec and promise3 is having higher value i.e., 3sec that's why overall timing is 3 sec
})



// Promise.allSettled(promises)
// reject any one of the promise from above promises
// if any one of the promise is rejected then Promise.allSettled(promises) will execute and resolve the other promises which are not rejected.
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("Error"));
    }, 4000);
});

let promise_allSettled = Promise.allSettled([promise1, promise2, promise3, promise4]);
promise_allSettled.then((value)=>{
    console.log(value); 
})
/*

(4) [{…}, {…}, {…}, {…}]
0: {status: 'fulfilled', value: 'value 1'}
1: {status: 'fulfilled', value: 'value 2'}
2: {status: 'fulfilled', value: 'value 3'}
3: {status: 'rejected', reason: Error: Error at http://127.0.0.1:5500/17_Asynchronous_javascript/17.8_promise/17.8.7_promiseAPI…}
length: 4
*/ 



// whosoever promise will be resolved earlier that promise value you will be see on console
let promiseRace= Promise.race([promise1, promise2, promise3, promise4]);
promiseRace.then((value)=>{
    console.log(value); // value 3 bcz promise3 is having 3sec and all the promise reolved or reject time is more than the 3sec
})



let promiseAny= Promise.any([promise1, promise2, promise3, promise4]);
promiseAny.then((value)=>{
    console.log(value); // value 3 bcz it will wait for the promise which will resolved first and it works similar to Promise.race(promises)
})



let promiseResolve = Promise.resolve(6);
promiseResolve.then((value)=>{
    console.log(value); // value 3 bcz it will wait for the promise which will resolved first and it works similar to Promise.race(promises)
})


let promiseReject = Promise.reject(new Error("Error bcz promise is rejected"));
promiseReject.then((value)=>{
    console.log(value); // value 3 bcz it will wait for the promise which will resolved first and it works similar to Promise.race(promises)
})