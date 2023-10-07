// key valuepair seperated by (-) dash
// all the cookies are seperated from each other by semi-colon (;)
// there can be more than one cookie on a page

// alert(document.cookie); // access all the cookies

// console.log(document.cookie);
// // how to set cookies on our own page
// document.cookie = "name=nisha12390909878";
// console.log(document.cookie); //// name=nisha12390909878; name2=rahul12390909878
// document.cookie = "name2=rahul12390909878";
// document.cookie = "name=nisharahulmanipal";
// console.log(document.cookie);  // name2=rahul12390909878; name=nisharahulmanipal


// writing to cookie 
// an assignment to document.cookie is treated specially in a way that a write operation doesn't touch other cookies
// only update the cookie name and add to the previous cookie


// print all the cookies on twitter.com
// document.cookie


// suppose we are entering key as "a;" then it will not added to key 
let key = prompt("enter key");
let value = prompt("enter value");
// eg : key = hello;; then it will not print the key and value pair
// document.cookie = `${key} = ${value}`; 
// use encodeURIComponent
// eg: key= a;; and value = b
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie); // a%3B%3B=b

// how to decode uri
console.log(decodeURIComponent("a%3B%3B")); // a;;
