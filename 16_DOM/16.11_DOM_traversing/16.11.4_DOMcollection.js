// Notes on DOM collections
// -> they are read-only
// -> they are live. elem.childNodes variable(reference) will automatically update if childNodes of element is changed.
// -> they are iterable using "for of loop" 


// siblings and the parent : siblings are nodes that are children of the same parent
// eg: <body> and <head> are siblings

// $0 -> whatever the element we will select in the html code that will be the $0
// $1 -> previous element that we were selected

// document.documentElement.parentNode   -> return node
// document.documentElement.parentElement -> 
// return null when it is not a valid html element 



// Task: i want the parent of signupForm
const signUpForm = document.querySelector(".signup-form");
console.log(signUpForm.parentElement); // <section class="section-signup container"></section>
console.log(signUpForm.parentNode); // <section class="section-signup container"></section> 

console.log(document.body.parentNode); // html
console.log(document.body.parentElement); // html
console.log(document.body.firstChild.nextSibling); 