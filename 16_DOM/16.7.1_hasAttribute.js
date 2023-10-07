// kya style attribute span mei set kiya gaya hai 

const span = document.querySelector("#span");
span.getAttribute("id");
span.setAttribute("class", "spanclass");
console.log(span.hasAttribute("id")); // true means span has id attribute
console.log(span.hasAttribute("class")); // true means span has class attribute
console.log(span.hasAttribute("href")); // false bcz span don't have href attribute

const element = document.querySelector("#element");
console.log(element.hasAttribute("hidden")); // true bcz div has hidden attribute
