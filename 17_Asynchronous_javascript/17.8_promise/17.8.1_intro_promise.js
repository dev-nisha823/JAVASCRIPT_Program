// promise
// aisi value jo mujhe avi nahi pta lekin baad mei pta chalegi

console.log("script start");
const bucket = ['coffee', 'lays', 'chocolate', 'salt', 'rice', 'vegetables'];

// to create promise we have to first define it 
// promise is basically an object which has two things 
// 1. status -> pending
// 2. value -> undefined/null

// 1. status -> fulfilled
// 2. value -> whatever we want to make 

// producing/creating a promise
const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        // we can also pass object inside resolve 
        resolve({value: "friedRice"});
        resolve("fried rice");
    }else{
        // we can also pass object, array, promise inside reject
        // reject(new Error("sth is missing"));
        reject("couldn't make it bcz of missing of ingredients");
    }
});

// consume the promise but how
// in js promise is produce less but consume more
// we can pass 2 callback function in then(), 1st one will check resolve() and second one will check reject 
// and we can pass anything inside the callback as an input
/*
friedRicePromise.then(
    // we can make this callback function as null
    // if it is null then it will not check resolve
    // when promise will be resolve
    (myfriedRice)=>{
    console.log("lets eat", myfriedRice);
    }, 
    // there is no need to write the second callback function
    // when promise will be reject
    (error)=>{console.log(error)}
);
*/


// promise adds in microtask queue
// browser will consume the promise
// after execution of all the code in js file then promise code will be executed by the browser
friedRicePromise.then(
    (myfriedRice)=>{
    console.log("lets eat", myfriedRice);
}).catch(
    (error)=>{console.log(error)}
);

// promise is the feature of browser but not the js 
// above code of promise will work asynchronously


// setTimeout will add inside callback queue
setTimeout(()=>{console.log("setTimeout")}, 1000);

for(let i=0; i<=10; i++){
    console.log(Math.random(), i);
}

console.log("script end");



// How above code will work
// if callback queue and microtask queue both has some thing then event loop will first give priority to microtask queue

