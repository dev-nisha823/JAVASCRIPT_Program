// Lexical Scope or lexical environment


// lexical envt. is the place where the function is declared.

const myvar = "value3";
function myApp(){
    const myvar = "value1";
    function myfunc(){
        const myvar = "value2";
        console.log("inside myfunc", myvar);
        //console.log("inside myfunc", myvar,myvar2); // ReferenceError: myvar2 is not defined bcz we are trying to access myvar2 from child scope which is not possible
        const myfunc2 = () => {
         const myvar2 = "value2";
         console.log(myvar);
        }
        myfunc2();
    }
    console.log("starting of function");
    console.log(myvar);
    myfunc();
}
myApp();
/*
output: 
starting of function
value1
inside myfunc value2
value2
*/


// const lastName = "krishna";
// Define a function:
function showLastName() {
    const lastName = "Sofela";
    return lastName;
  }
  
  // Define another function:
  function displayFullName() {
    const fullName = "Oluwatobi " + lastName;
    return fullName;
  }
  
  // Invoke displayFullName():
  console.log(displayFullName());
  
// The invocation above will return: Uncaught ReferenceError: lastName is not defined
// here, we are trying to access the lastName which is not defined globally or inside displayFullName() local scope but
// lastName is defined inside the local scope of showLastName() function which we can't access.
// most impt line : hmm sirf aur sirf usi code ko access kar sakte hain jo uss item ke lexical scope mein present ho yaa phir define kiya gaya ho
// lekin agar hmm kisi aur variable jo kii dusre function mein define hain or uss variable ko hmm kisi dusre function mein access karna chahte hain 
// to vo possible nahi hain hmm aisa nahi kar sakte agar karna hain to hame uss function ko nested karna hoga tbhi kar sakte hain 






