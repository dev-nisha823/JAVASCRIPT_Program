// firstElementChild will returns the first html element of body tag 
// firstElementChild will not consider the spaces but firstChild will consider the space
// lastElementChild


// previousElementSibling -> previous sibling which is an element
// nextElementSibling -> next sibling which is an element


// Task : change the bg color of ul1
let docBody = document.body;
const nav = docBody.firstElementChild.nextElementSibling.nextElementSibling;
const ul1 = nav.firstElementChild.nextElementSibling;
console.log(ul1);
ul1.style.backgroundColor = "red";


// childElementNodes
// Task : now i want the all child of ul1
console.log(ul1.childElementCount); // it will count how many children node present in the ul1
console.log(ul1.hasChildNodes()); // ul1 has 3 li means it has childNode
console.log(ul1.children); // list the child of any html element which is in HTMLCollection
