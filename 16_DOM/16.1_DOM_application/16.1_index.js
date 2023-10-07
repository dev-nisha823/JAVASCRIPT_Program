// DOM -> Document Object Model

console.log(window.document);
console.log(document);

const logo = document.getElementById("logo");
console.log(logo);

const formGroup = document.getElementsByClassName("form-group");
console.log(formGroup);
/*
output:
HTMLCollection(6) [div.form-group, div.form-group, div.form-group, div.form-group, div.form-group, div.form-group]
// expand it
0: div.form-group
1: div.form-group
2: div.form-group
3: div.form-group
4: div.form-group
5: div.form-group
length: 6
[[prototype]]: HTMLCollection

// array like object means we can do indexing and length but it doesn't have all the array methods
*/
// if we want 1st form-group then write index 
console.log(formGroup[0]); // output: div.form-group
console.log(typeof formGroup); // object
console.log(Array.isArray(formGroup)); // false


const form_group = document.querySelectorAll(".form-group");
console.log(form_group); 
/*
output: 
NodeList(6) [div.form-group, div.form-group, div.form-group, div.form-group, div.form-group, div.form-group]
0: div.form-group
1: div.form-group
2: div.form-group
3: div.form-group
4: div.form-group
5: div.form-group
length: 6
[[prototype]]: NodeList
*/ 

console.log(form_group[0]); // output: div.form-group
console.log(typeof form_group); // object
console.log(Array.isArray(form_group)); // false


for(let i=0; i<formGroup.length; i++){
    console.log(formGroup[i]); // print each div item which is having form-group class by using its index
}


// we want to change the style of nav anchor tag by using for loop
let navLink = document.getElementsByTagName("a");
for(let i=0; i<navLink.length; i++){
    const navLinkItem = navLink[i];
    navLinkItem.style.background = "red";
    navLinkItem.style.color = "yellow";
}


navLink = Array.from(navLink);
console.log(Array.isArray(navLink));
// navLink.forEach((navLinkItem) => {
//     navLinkItem.style.background = "red";
//     navLinkItem.style.color = "yellow";
// })


// we can perform all the loops in NodeList
let navLinks = document.querySelectorAll("a");
console.log(navLinks);
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

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.innerHTML);

sectionTodo.innerHTML += "<button> Learn More </button>";
console.log(sectionTodo.innerHTML);
