// Real world application of closure

// for how many times we can call a function 
function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hii you called Me !!");
            counter++;
        }else{
            console.log("You have already called me one time !!");
        }  
    }
}
const myFunc = func();
// calling myFunc() more than one time
myFunc();
myFunc();


const myFunction = func();
myFunction();
myFunction();