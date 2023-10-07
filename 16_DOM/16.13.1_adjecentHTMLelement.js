// insertAdjacentHTML/Text/Element 
// This method is used to insert HTML. The first parameter is a code ondrag, specifying where to insert. 

// 1 -> "beforebegin" : insert html immediately before element
// 2 -> "afterbegin" : insert html into element at the beginning
// 3 -> "beforeend" : insert html into element at the end
// 4 -> "afterend" : insert html immediately after element

// the second parameter is an html string.
// eg: 

const containerdiv = document.querySelector(".container");
containerdiv.insertAdjacentHTML('beforeend', '<h2 class="h2">beforeend</h2>');
console.log(containerdiv);  // add h2 just before ending of div whose class is container

containerdiv.insertAdjacentHTML('beforebegin', '<h3 class="h3">beforebegin</h3>');
console.log(containerdiv); // add h3 just before opening of div tag whose class is container

containerdiv.insertAdjacentHTML('afterend', '<h4 class="h4">afterend</h4>');
console.log(containerdiv); // add h3 just after closing of div tag whose class is container 

containerdiv.insertAdjacentHTML('afterbegin', '<h5 class="h5">afterbegin</h5>');
console.log(containerdiv); // add h5 just after starting of opening div tag whose class is container

/* output: 

"I am start of this container(outer)"
<h3 class="h3">beforebegin</h3>
<div class="container">
    <h5 class="h5">afterbegin</h5>
    "i am start of this container (inner)"
    <div id="first">Iam the first element</div>
    "i am end of this container (inner)"
    <h2 class="h2">beforeend</h2>
</div>
<h4 class="h4">afterend</h4>
"I am end of this container (outer)"
*/



// Node removal -> to remove a node, there is a method node.remove()
// remove div whose id="first" 
const firstdiv = document.querySelector("#first");
firstdiv.remove(); // remove the node from dom

/* output: 

"I am start of this container(outer)"
<h3 class="h3">beforebegin</h3>
<div class="container">
    <h5 class="h5">afterbegin</h5>
    "i am start of this container (inner)"
    "i am end of this container (inner)"
    <h2 class="h2">beforeend</h2>
</div>
<h4 class="h4">afterend</h4>
"I am end of this container (outer)"
*/