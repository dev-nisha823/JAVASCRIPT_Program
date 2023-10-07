// using click event on multipleButton

/*
<div class="buttons">
        <button type="button" id="buttonOne">Button One</button>
        <button type="button" id="buttonTwo">Button Two</button>
        <button type="button" id="buttonThree">Button Three</button>
</div>
*/ 

// adding events on each button
const allButtons = document.querySelectorAll(".buttons button");
for(let button of allButtons){
    button.addEventListener("click", function(){
        // here despite of using for of loop but the addEeventListener applied to button is different that's why the value of 'this' keyword will be changed after each iteration 
        console.log(this);
        console.log(this.textContent); // content which is written inside each and every button will be printed
        console.log("You clicked me !!!!");
    });
}


// when we use arrow function instead of normal function then 'this' keyword behave as window and window has no content and when we try to print the 'this.textContent' it will be undeined for all the buttons
for(let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener("click", () => {
        console.log(this);
        console.log(this.textContent);
    });
}


// using forEach method
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    });
});

