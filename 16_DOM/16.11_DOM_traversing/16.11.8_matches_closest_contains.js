// There are three important methods to search the DOM
// matches 
/*
element.matches(css) -> to check if element matches the given css selector
*/ 

// element.closest(css) -> to look for the nearest ancestor that mathes the given css selector. The element itself is also checked.
// elementA.contains(elementB) -> returns true if elementB is inside elementA(a descendant of elementA) or when elementA === elementB
// The contains() method is used to find whether the specified node is a descendant of the given node. This descendant can be a child, grandchild, great-grandchild, and so on. 
// syntax: node.contains(othernode)

const div1 = document.getElementById("div1");
console.log(div1.matches(".container")); // true bcz div tag of id div1 is having class container
console.log(div1.matches(".container1")); // false bcz div tag of id div1 is not having class container1


const signupForm = document.querySelector(".signup-form");
console.log(signupForm.closest(".section-signup")); // section.section-signup.container
console.log(signupForm.closest(".signup-form"));


const sectionSignup = document.getElementsByClassName("section-signup");
const formGroup = document.querySelector(".form-group");
const userName = document.getElementsByName("username");

console.log(div1.contains(formGroup)); // false
console.log(formGroup.contains(formGroup)); // true
console.log(document.body.contains(formGroup)); // true
console.log(signupForm.contains(formGroup)); //true
