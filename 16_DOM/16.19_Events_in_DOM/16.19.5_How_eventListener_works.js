// How eventListener work behind the browser ?????

console.log("Script start!!!");

const allButtons = document.querySelectorAll(".buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i=0; i<= 1000000000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    });
});

let outerVar = 0;
for(let i=0; i<= 100000000; i++){
    outerVar += i;
}
console.log("value of outerVariable is", outerVar);

console.log("script End!!!");


/*
output:
Script start!!!
value of outerVariable is 5000000050000000
script End!!!
// after clicking button instantly one by one
Button One 500000000067109000
Button Two 500000000067109000
Button Three 500000000067109000
*/
 
/*
How it is happening ???
-> Browser has Js Engine + WebAPI
-> Js Engine is vary from browser to browser 
-> but how js works it is same in all the js Engine despite of difference between them
-> Js Engine has global execution context and callstack where callstack has function execution context
-> js is single threaded -> do only one task at a time -> that's y js Engine will not execute event of addEvenetListener.
-> browser will save these events for each button in webAPI until and unless the other code is not completed by jsEngine.
-> since in callstack global execution context is in queue and when the callstack is empty then event loop will send the callback of each buttons to callstack for execution
-> this is how above code is working
*/ 


// change the bg color and text color of button when we click the button
allButtons.forEach((button) => {
    button.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "yellow";
        event.target.style.color = "red";
    });
});