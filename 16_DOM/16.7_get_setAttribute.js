// get attribute -> method used to get the value of an attribute
// set attribute -> method used to set the value of an attribute
// link.setAttribute("AttributeName", "attributeValue");

// suppose we want to select the anchor tag of navbar 1st listitem "home"
// if we want to know what is the value of attribute of an html element then we can use the getAttribute method
/*
<nav>
    <ul>
        <li><a href = "#home">Home</a></li>
        <li><a href = "">Todo</a></li>
        <li><a href = "">Sign Up</a></li>
    </ul>
</nav>
*/
const link = document.querySelector("a");
console.log(link.getAttribute("href")); // output : #home  ->return the value of 1st attribute of anchor tag i.e., href



// we can also change the value of attribute by using setAttribute
link.setAttribute("href", "#Todo"); // output : #Todo
console.log(link.getAttribute("href"));


// if we want to remove # then use slice method
console.log(link.getAttribute("href").slice(1)); // output: Todo

