// change style of an element

// changing the style of heading of h2 tag which is inside the section whose class is section-heading
const heading = document.querySelector("section.section-heading h2"); // select the child element of section 
console.log(heading.style); // style is also an object
heading.style.color = "blue";
heading.style.backgroundColor = "black"; 
// we can't write background-color bcz js will give error. That's why in js we pefer to write css property in camelcase
heading.style.border = "2px solid red";