// Event Bubbling is also called as Event Propagation

const body = document.body;
const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// click event on child
/*
output:
you clicked on child
you clicked on parent
you clicked on grandParent
you clicked on body
*/
child.addEventListener("click",()=>{
    console.log("you clicked on child");
});

// click event on parent
/*
output:
you clicked on parent
you clicked on grandParent
you clicked on body
*/
parent.addEventListener("click",()=>{
    console.log("you clicked on parent");
});

// click event on grandParent
/*
output:
you clicked on grandParent
you clicked on body
*/
grandParent.addEventListener("click",()=>{
    console.log("you clicked on grandParent");
});

// click event on body
/*
output:
you clicked on body
*/
body.addEventListener("click",()=>{
    console.log("you clicked on body");
});

// when grandParents, parents and child all have same event name then if we click on any one of them all will be called
// but event bubbling happens from bottom to top or we can say that from inside to outside
// i.e., when we click on child its parent, grandparents, parents of grandparents will be also called
