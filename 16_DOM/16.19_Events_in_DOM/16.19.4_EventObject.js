// whenever we apply event listener to any html element 
// js Engine ---- line by line execute karta hai 
// browser ---- js Engine + extra features
// browser ---- js Engine + WebApi

// whenever we click any button then browser will do 2 works
// 1) -> callback function which is present inside addEventListener will be given to js Engine
// 2) -> whatever events happens with callback function browser will also give the information of that html element 
// whatever the info we get from the browser will be in object and we will recieve this object


const buttonOne = document.querySelector("#buttonOne");
buttonOne.addEventListener("click", function(event){
    console.log(event); //output: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
})
// we can write anything at the place of event suchas alphabets 
// either write event or e is preffered
function hello(abc){
    console.log(abc); // 16.19.4_EventObject.js:19 {firstKey: 'firstValue', secondKey: 'secondValue'}
}
// browser passing these key-value pair to the function
hello({
    firstKey : "firstValue",
    secondKey : "secondValue"
})






const allButtons = document.querySelectorAll(".buttons button");
for(let button of allButtons){
    button.addEventListener("click", function(e){
        // console.log(e); // print event object -> PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
        console.log(e.target);
        console.log(e.currentTarget);
    });
}
// target -> kis element ne event ko trigger kiya
// currentTarget -> kis element pe hamne event listener attach kiya 

