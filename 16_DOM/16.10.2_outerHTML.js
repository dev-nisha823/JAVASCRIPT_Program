// console.log() shows the element DOM Tree
// console.dir() shows element as an object with its properties. 
console.dir(document.getElementsByTagName("span")[0]);  // [0] 1st span tag inside body

// tagName -> used to read tag name of an element
//         -> only exists for element nodes
// nodeName -> defined for any node(text, comment , etc)


// outerHTML property -> contains the full HTML, innerHTML + the element itself

console.log(document.body.firstChild.nodeName); // #text
console.log(document.body.firstElementChild.nodeName); // SPAN

const span = document.getElementById("span");
console.log(span.innerHTML); //<b>Hey i am span</b>
span.innerHTML = "<i>Hey</i>";
console.log(span.innerHTML); //<i>Hey</i>


// both the code will give same result
console.log(document.body.firstChild.data); // return white spaces and text 
console.log(document.body.firstChild.nodeValue); // Hello world


console.log(span.outerHTML); //<span id="span"><i>Hey</i></span>

