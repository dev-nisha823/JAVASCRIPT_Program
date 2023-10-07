// methods to select element using DOM

// select element using get element by id
console.log(document.getElementById("idName")); // return an object 
console.log(typeof document.getElementById("idName")); // object
const idName = document.getElementById("idName");
console.log(idName);


// select element using query selector
// work for all the "CSS selectors" 
// for id
const id_Name = document.querySelector("#idName");
console.log(idName);
// for class
const className = document.querySelector(".className");
console.log(className); // this will return the first html element whose class is "className" but not return the other html element of same class
// if we want all the html element which is having same class then
const class_Name = document.querySelectorAll(".class_Name");
console.log(class_Name);  


// selecting any child element of parent element using class or id
/*
<section class="section-signup">
        <h2>SignUp</h2>
</section>
*/
// line 30 will select the first section html element from the complete html page
const section = document.querySelector("section"); 
const signup = document.querySelector("section.section-signup h2"); // select the child element of section 
console.log(signup); // print the h2 




