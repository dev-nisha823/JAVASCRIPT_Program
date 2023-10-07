// Attaching multiple handlers to promise.
// we can attach multiple handlers to one promise.
// they don't pass the result to each other, instead they proces it independently.

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
})
// both the handlers are independent to each other and runs seperately/independently
// both the handler will execute at the same time 
p.then(()=>{
    console.log("first Handler");
})
p.then(()=>{
    console.log("second Handler");
})



