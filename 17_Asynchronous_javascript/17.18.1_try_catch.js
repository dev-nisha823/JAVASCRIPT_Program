// why to use try and catch 

/*
-> try ... catch syntax allows us to catch errors so that the script instead of dying can do some thing more reasonable.
-> two main blocks:
try{
    // try the code
}
catch(error){  // the error variable contains an error object
    // error handling
}


It works like this : 
1> first the code in try is executed.
2> if there is no error, catch is ignored else catch is executed when try is having an error.
3> try catch works synchronously
4> if an exeception happens in scheduled code like setTimeout then try catch won't work it
/*
try{
    setTimeout(function(){
        // error code -> script dies and catch won't work
    });
}catch.....
that's because the function itself is executed later,when the engine has already left the try...catch construct
*/
/*try{
    // here try will not handle this error which is inside the setTimeout
        setTimeout(() => {
            console.log(execute_timeout);
        }, 1000);

        setTimeout(() => {
            // here try will handle the error which is inside the setTimeout bcz we have used try and catch 
            try{
                console.log(execute_timeout);
            }catch(error){
                console.log(error);
            }
        }, 3000);
    }
*/ 


// whenever we do any mistake while coding then if we want that code execution should not stop after the line where error has occured then we use try n catch
// for eg:
/*
setTimeout(() => {
    console.log("first timeout");
}, 1000);
console.log(nisha); // // if we did any code mistake outside setTimeout then further code execution will stop 
setTimeout(() => {
    console.log("first timeout");
    // if we did any code mistake inside setTimeout then code execution will not stop and give an error 
}, 2000);

setTimeout(() => {
    console.log("first timeout");
}, 3000);
*/ 

setTimeout(() => {
    console.log("first timeout");
}, 1000);


// try n catch will make further code execution smoothly and if we don't want to stop the script file then we will use catch so that error is printed on console and we can handle it 
try{
    console.log(nisha); 
}
catch(error){
    console.log(error);
    console.log("hey there is an error! plz resolve it");
}

setTimeout(() => {
    console.log("first timeout");
    // if we did any code mistake inside setTimeout then code execution will not stop 
}, 2000);

setTimeout(() => {
    console.log("first timeout");
}, 3000);