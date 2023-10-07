// Event capturing
// boolean value -> we want to capture event or not 
// we are making third argument of addEventListener as true for capturing the event


const body = document.body;
const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capturing the events
child.addEventListener("click",()=>{
    console.log("capture child");
}, true);

parent.addEventListener("click",()=>{
    console.log("capture parent");
}, true);

grandParent.addEventListener("click",()=>{
    console.log("capture grandParent");
}, true);

body.addEventListener("click",()=>{
    console.log("capture body");
}, true);

// how capturing bubbling cycle works
/*
capturing                                                       Bubbling
        capturing                                       Bubbling
                capturing                       Bubbling
                        capturing       Bubbling
*/ 


// not capturing the events
child.addEventListener("click",()=>{
    console.log("Bubbling starts child");
});

parent.addEventListener("click",()=>{
    console.log("Bubbling starts parent");
});

grandParent.addEventListener("click",()=>{
    console.log("Bubbling starts grandParent");
});

body.addEventListener("click",()=>{
    console.log("Bubbling starts body");
});

