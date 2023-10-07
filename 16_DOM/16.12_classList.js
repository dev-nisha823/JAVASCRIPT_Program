// classList

/*
<section class="section-signup container">
    <h2>section heading</h2>
</section>
*/


// how to find how many number of classes we have given to any particular html element
const sectionSignup = document.querySelector(".section-signup");
console.log(sectionSignup.classList); // 16.13_classList.js:5 DOMTokenList(2) ['section-signup', 'container', value: 'section-signup container']
console.log(sectionSignup.classList.length); // 2 bcz we have given two class to "section-signup"
// above code will give how many classes in section-signup



// how we add class to any html element using javascript
sectionSignup.classList.add('bg-dark');


// how to remove class to any html element using javascript
sectionSignup.classList.remove('bg-dark');

// whether any class existing or not in classList
const ans = sectionSignup.classList.contains('container');
console.log(ans); // true bcz there is an another class in sectionSignup whose name is container
const ans1 = sectionSignup.classList.contains('containers');
console.log(ans1); // false bcz there is no class in sectionSignup whose name is containers



// toggle -> jo class hai usko remove kar deta hai or jo class nahi hai usko add kar deta hai
sectionSignup.classList.toggle("bg-dark"); // toggle will add the class if it is not present 
sectionSignup.classList.toggle("bg-dark"); // toggle will remove the class bcz "bg-dark" class is already present


// browser always see css from top to bottom
