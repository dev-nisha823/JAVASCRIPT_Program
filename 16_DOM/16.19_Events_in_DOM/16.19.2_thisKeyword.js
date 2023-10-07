// this keyword 
// checking the value of this keyword in each case



// case 1 : 
// using simple function inside the addEventListener
const btn = document.querySelector(".button");
/*
btn.addEventListener("click", function(){
    console.log("you clicked me!!!");
    console.log("value of this -> ",this); 
    // value of 'this' keyword will indicate to the button only
    // output : value of this -> <button class="button" type="button">Learn More</button>
});
*/


// case 2 :
// Either we use arrow function outisde or inside the addEventListener the value of 'this' keyword will be window
// value of this ->  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
const clickArrowFunction = () => {
    console.log("you clicked me!!!");
    console.log("value of this -> ",this);
}
btn.addEventListener("click", clickArrowFunction);

