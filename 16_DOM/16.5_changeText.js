// change Text

// textContent -> use to change the content written inside html element
// textContent also gives the hidden content which is not visible on the main page by using css-display property to "none";
const heading = document.getElementById("main-heading");
console.log(heading.textContent); // return the content written inside html element whose id is "main-heading"
heading.textContent = "Now the content will be changed";
console.log(heading.textContent); // it will change the content in the main page as well


// innerText -> don't show the hidden content 
