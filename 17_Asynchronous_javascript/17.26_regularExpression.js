// Regular expressions are patterns used to match character combinations in strings. 
// In JavaScript, regular expressions are also objects.
// syntax:  /character that you want to replace/g
// https://regexr.com/  website to learn regular expression 

const regex = /very/g
const text = "Nisha is a very very nice awesome nice very girl";
// now replace the very with good and nice with beautiful.
// console.log(text.replace("very", "VERY")); // handle only one replacement

// to handle the multiple replacement in strings
console.log(text.replace(regex, "good")); // Nisha is a good good nice awesome nice good girl























