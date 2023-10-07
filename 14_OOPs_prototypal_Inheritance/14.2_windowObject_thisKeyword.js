
// console.log(window); // both the code will print the same thing
// console.log(this); // print window object
/* 
output : 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/
// window object is the global object of javascript
// when we run javascript in browser or we write this console.log(this) in other file then it will give window object
// in this window object there will be lots of object method
// console.log(this === window); // true




// either use 'use strict' in the top of main file or anywhere in the function
function myfunc(){
    "use strict"
    console.log("hello world");
    console.log(this); // print window object and the function is called by window object 
    // if the function is not called by window then also it will print window object
    // but sometime it gives problem that's why developer uses 'use strict' method to avoid printing window object
    // if we call the function by writing 'use strict' then it will give undefined
}
// both the code willgive same output
myfunc(); // hello world
window.myfunc();  // hello world
// this 'myfunc' function will be added in the window object.


