// Iterables -------------->
/*
String and array are iterables
jispe hmm for of loop laga sakein
*/

// strings are also iterables
const firstName = "Nisha";
for(let character of firstName){
    console.log(character);
}


// arrays are iterables
const arrayitems = ["item1" , "item2" , "item3"];
for(let item of arrayitems){
    console.log(item);
}

// objects are not iterable
/*
const users = {
    userName : "Nisha",
    userage : 23, 
}
for(let user of users){
    console.log(user); // TypeError: users is not iterable
}
*/

// Array like objects ------------------->
/* 
jinke pass length property hoti 
aur jisko hmm index se access kar sakte hain
example : string
*/

console.log(firstName.length);
console.log(firstName[2]);