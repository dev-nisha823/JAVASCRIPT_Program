// get multiple element using getElements by class name

// getElementsByClassName will give HTMLCollection
/*
<div class="form-group">...</div>
<div class="form-group">...</div>
<div class="form-group">...</div>
<div class="form-group">...</div>
<div class="form-group">...</div>
<div class="form-group">...</div>
*/ 

const formGroup = document.getElementsByClassName("form-group");
console.log(formGroup);
/*
output:
HTMLCollection(6) [div.form-group, div.form-group, div.form-group, div.form-group, div.form-group, div.form-group]
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







// get multiple elements using querySelectorAll
// querySelectorAll will give NodeList
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



// what is the difference between HTMLCollection and NodeList ??
/*
->
->
->
*/