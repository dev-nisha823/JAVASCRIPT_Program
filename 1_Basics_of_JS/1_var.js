"use strict";

var a = 10;
//console.log(a); // 10 but when it is uncommented.
//it means console.log always give prefernce to the variable which is just declared above it.
var a = 20;
//console.log(a); 20 
// if i comment the 6th line then also 40 will be printed.
a = 30;
a = 40;
console.log(a); // 40 bcz of 4th line statement


//variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on

//declaring a variable means creating a variable.
var firstname = "nisha";
console.log(firstname);



/*

Initialization is the process of assigning a value to the Variable. 
Every programming language has its own method of initializing the variable. 
If the value is not assigned to the Variable, then the process is only called a Declaration.

*/

var second;
second = "NISHA KUMARI";
console.log(second);


// changing the value of a variable from nisha to rahul
firstname = "rahul"; 
console.log(firstname);


// when we don't write var then also our code will be executed but this is not the good way for a developer.
// that's why we use "use strict" if we missed writing var then it will automatically throw an error and tell us about it.



// var is a global and function scope(block scope)
var a = "nisha";
var a = "naina"; //var can be declared again and again with same variable name
{
  var a = 10;
  console.log(a); //block scope var will be executed output:10
}
//var a = "nisha";
console.log(a); // output: 10


var value = 4;
console.log(value ** 4);  // ** it is the power of any number like 4^4 = 256

var value1 = 4;
console.log(value ** 0.5); // it will square root of a number


/*
-------------------> Rules for naming VARIABLE <----------------------
1> you can't start with a number
  eg)  1value (invalid)
       value1 (valid)
       first1name (valid)


2> you can use only underscore _ or dollar symbol
 eg)  first_name (snake case writing), _firstname (valid)
      first$name , $firstname (valid)

      // we can't use &,*,%,^ 

3> you can't use spaces
 eg)  first name (invalid)

4> CONVENTION : start with small letter and use camelcase


*/