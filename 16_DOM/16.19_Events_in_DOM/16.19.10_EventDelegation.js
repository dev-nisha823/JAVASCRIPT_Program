// Event Delegation
const grandParent = document.querySelector(".grandParent");
grandParent.addEventListener("click", ()=>{
    console.log("you clicked sth!!!");
});

// How this code is working ????
/*
Step by step
1 -> when we click the grandParents it will print you clicked sth!!!
2 -> but when we click on child of the grandParents then also "you clicked sth!!!" will be printed
3 -> since, we have only added the event listener to grandParent but how child is also showing 
4 -> event bubbling is happening,
5 -> when we click on child it will check for the click event whether it is in its parent or grandParents or not 
6 -> click event is present in either of them child will call the callback function of its parent or either grandparents -> then it will print the statement
*/ 

// Benefits of using Event Delegation -> 
// there is no need to add event listener to child, parents and grandParents.
// if we click on child also the event will be listened and callback function will be called
// but if we want only child statement we will use event object


grandParent.addEventListener("click", (e)=>{
    console.log(e);
    console.log(e.target);
    console.log(e.target.textContent);
});
/* 
-> when we click on grandparents div it will pointerEvent, div of the grandParent, and the all child of grandParents 
PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
<div class=​"grandParent box">​…​</div>​
            grandParent div
                Parent div
                    Child div
*/  
