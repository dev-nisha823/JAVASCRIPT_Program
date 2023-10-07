// setInterval
// print statement again and again after a particular inteval of time

 console.log("Script start");
setInterval(()=>{
    let total = 0;
    for(let i=0; i<100; i++){
        total += i;
    }
    console.log(total);
    console.log(Math.random());
});
console.log("Script end");



