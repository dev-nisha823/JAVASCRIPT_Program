// how to get the dimensions(height and width) of html elements

const sectionTodo = document.querySelector(".section-todo");
// getBoundingClientRect will give the whole dimensions of any html elements -> // dimensions such as height, width, bottom, left, right, top, x, y
const dimensions = sectionTodo.getBoundingClientRect(); // give an object
console.log(dimensions);  
/* -> OUTPUT:
DOMRect {x: 0, y: 50.60000228881836, width: 1519.2000732421875, height: 227.1999969482422, top: 50.60000228881836, …}
bottom: 277.79999923706055
height: 227.1999969482422
left: 0
right: 1519.2000732421875
top: 50.60000228881836
width: 1519.2000732421875
x: 0
y: 50.60000228881836
[[Prototype]]: DOMRect
*/


// if we want any particular dimension of any html element
const heightDimensions = sectionTodo.getBoundingClientRect().height;
console.log(heightDimensions); // give the value of height of section whose class is "section-todo"
// output: 227.1999969482422
