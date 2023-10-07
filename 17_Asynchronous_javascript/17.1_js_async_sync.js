// synchronous programming vs asynchronous programming

// synchronous programming
// until and unless the earlier code is not finished till then later code will not start to execute.
// ealier code can block the further code which will be executed after finishing of earlier code
// javasript is synchronous as well as single threaded scripting language
console.log("script start");
for(let i=0; i<10; i++){
    console.log("inside for loop");
}
console.log("script end");


// but how js work as asynchronous see the setTimeout file

