// simple for loop
// for of 
// forEach
// we can't use forEach mmethod to iterate through HTMLCollection
// array like object -> can use only indexing(we can access the element by using its index) and length property


/*
<nav>
    <h1 id="logo">LOGO</h1>
    <ul>
        <li><a href = "">Home</a></li>
        <li><a href = "">Todo</a></li>
        <li><a href = "">Sign Up</a></li>
    </ul>
</nav>
*/


const formGroup = document.getElementsByClassName("form-group");
// console.log(formGroup.length);
for(let i=0; i<formGroup.length; i++){
    console.log(formGroup[i]); // print each div item which is having form-group class by using its index
    // storing in a variable 
    const formGroupItem = formGroup[i];
    formGroupItem.style.background = "red";
}


// we want to change the style of nav anchor tag by using for loop
let navLink = document.getElementsByTagName("a");
for(let i=0; i<navLink.length; i++){
    const navLinkItem = navLink[i];
    navLinkItem.style.background = "red";
    navLinkItem.style.color = "yellow";
}

// by using for of loop
for(let navLinkItem of navLink){
    navLinkItem.style.background = "red";
    navLinkItem.style.color = "yellow";
}

// by using forEach 
// this code will give error that we can't use forEach method
navLink.forEach((navLinkItem) => {
    navLinkItem.style.background = "red";
    navLinkItem.style.color = "yellow";
})

// but we can do other thing such as by changing the HTMLCollection into array
// we can't do assignment in const so, we will use let instead of const to see the changes
navLink = Array.from(navLink);
console.log(Array.isArray(navLink)); // true
navLink.forEach((navLinkItem) => {
    navLinkItem.style.background = "red";
    navLinkItem.style.color = "yellow";
})







// we can perform all the loops in NodeList
let navLinks = document.querySelectorAll("a");
console.log(navLinks);
// by using simple for loop
for(let i=0; i<navLinks.length; i++){
    const navLinkItem = navLinks[i];
    navLinkItem.style.background = "red";
    navLinkItem.style.color = "yellow";
}
// by using for of loop
for(let navLinkItem of navLinks){
    navLinkItem.style.background = "red";
    navLinkItem.style.color = "yellow";
}
// by using forEach method
navLink.forEach((navLinkItem) => {
    navLinkItem.style.background = "red";
    navLinkItem.style.color = "yellow";
})
// we can also change the NodeList to array
navLinks = Array.from(navLinks);
console.log(Array.isArray(navLinks)); // true
