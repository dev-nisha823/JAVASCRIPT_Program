// searching the dom
// DOM navigation properties are helpful when elements are close to each other.
// If they are not close to each other we have some more methods to search the DOM


// document.getElementById("IdName")
// document.getElementsByClassName("className")
// document.getElementsByTagName("TagName")
// document.getElementByName("attributeName") -> searches elements by name attribute


// querySelector for a particular class or id
// document.querySelector(".className") or document.querySelector("#IdName")
//-----> querySelector returns first element for the given css selector
// -----> efficient version of element.querySelectorAll("")[index]

// querySelectorAll is used for selecting the element having same class name
// document.querySelectorAll(".className") or ("#idName")


let a = document.querySelectorAll(".aclass");
a[0].style.color = "blue";
a[1].backgroundColor = "red";



