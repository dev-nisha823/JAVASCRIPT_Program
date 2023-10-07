// intro to events
// click event is basically a string whatever we will write it will be inside double quotes

/*  fire events means add events*/ 




// there are three ways to add events
// 1) -> adding events directly inside html elements
/*
<button class="button" type="button" onclick = "console.log('you clicked me!!')">Learn More</button>
output: print you clicked me!! on console whenever we click the button

but we don't use it more 
*/ 



// 2) -> using onclick inside javascript file
/*
const btn = document.querySelector(".button");
console.dir(btn);
btn.onclick = function(){
    console.log("you clicked me !!!!!");
} 
*/
// but this method also we don't use 





// 3) -> method: addEventListener 
// syntax: addEventListener("EventName", function_associated with this event);
// <button type="submit" class="submit-btn">Submit</button>
const btn = document.querySelector(".button");
// const clickMefunc = () => {console.log("you clicked me!!!")};
// submitBtn.addEventListener("click", clickMefunc);

// using function
btn.addEventListener("click", function(){
    console.log("you clicked me!!!");
});

// using arrow function
/*submitBtn.addEventListener("click", () => {
    console.log("you clicked me!!!");
});
*/ 





















