// className -> add classes to a particular element
const divcontainer = document.querySelector(".container");
divcontainer.className = "yellow text";

// to specifically remove the class using classList
console.log(divcontainer.classList); // DOMTokenList(2) ['yellow', 'text', value: 'yellow text']
divcontainer.classList.remove("text"); //remove the class text from div whose id is element

// to add class using classList
divcontainer.classList.add("red");

// className and classList 
// If we assign something to Element.className, it replaces the whole string of classes. 
// often we want to add/remove/toggle a single class.

// 1. element.classList.add/remove("class") -> add/remove a class
// 2. element.classList.toggle("class") -> adds the class if it doesn't exist, otherwise removes it 
// 3. element.classList.contains("class") -> checks for the given class, returns true/false


console.log(divcontainer.classList.contains("text")); //false bcz text class is removed from div
console.log(divcontainer.classList.contains("yellow")); // true bcz yellow class is set to the div whose id is element