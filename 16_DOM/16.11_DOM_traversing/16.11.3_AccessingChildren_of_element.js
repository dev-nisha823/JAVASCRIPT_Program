// Note: document.body can sometimes be null if the js is written before the body tag

// children of an element : direct as well as deeply nested elements of an element are called its children
// child nodes -> elements that are direct children
// eg: head and body tag of direct children of html tag which is the root element

// Descendent nodes -> All nested elements, children, their children and so on....

// firstChild, lastChild & childNodes
/* textNodes(white space) is also count as firstChild 
-> element.firstChild -> first child element
-> element.lastChild -> lastst child element
-> element.childNodes -> All child nodes
*/ 


const div = document.querySelector(".container");
console.log(div.firstElementChild); // Returns the first child that is an element, and null otherwise.
// output: <h1>Heading</h1>
console.log(div.lastElementChild); // Returns the last child that is an element, and null otherwise.
// output: <p>some useful information</p> 


console.log(document.body.firstChild); // #text
console.log(document.body.lastChild); // #text
console.log(document.body.childNodes); // NodeList(9) [text, div.container, text, section.section-signup.container, text, comment, text, script, text]



// following is always true:
/*
either return true or false
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length-1] === elem.lastChild

There is also a method elem.hasChildNodes() to check whether there are any child nodes.
*/

// Note: childNodes looks like an array but it is not actually an array but a collection.
//       we can use Array from (collection) to convert it into an array -> Array methods wont work


let arr = Array.from(document.body.childNodes);
console.log(arr); // (9) [text, div.container, text, section.section-signup.container, text, comment, text, script, text]