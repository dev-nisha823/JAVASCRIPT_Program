// while loop 

// print sum of first n-natural number using while loop
// it will execute line by line which increases the execution time.

let num = +prompt("enter any natural number from 1 to 100");
let sum = 0;
while(num <= 100){
  sum = sum + num;
  num = num + 1;
}
console.log(`Total = ${sum}`);


let number = 1;
let total = 0;
while(number <= 100){
    total = total + number;
    number = ++number;
}
console.log(total);

// without while-loop
// this will took less time than above one
let num1 = 10;
let naturalNumber = (num1*(num1 + 1))/2 ;
console.log(naturalNumber);

// print sum of first 10 prime number using while loop.
/*
 1>  check whether a number is prime or not.
 2>  then add these prime number and return it to the console.
*/


// const n1 = 11;
// for(; n1<=12;++n1){
//     console.log(n1); // error like Assignment to constant variable.
// }



// for loop
// print sum of first n-natural number using for loop
let numTotal = 0;
for(let num1 = 1; num1 <= 10;){
    numTotal = numTotal + num1;
    ++num1;
}
console.log(numTotal);



// do while loop
// How do while work??
/*
   1. do block will be executed whether the statement is false.
   2. print whatever is written inside do block
   3. while block will check the condition whether the loop should execute further or not.

*/
// kaam ko karo kb tk! jb tk ki condition fulfill naa ho jaaye

let i = 6;
do{   //kaam ko karo
    console.log(i);  // 6 according to rule.
    i++;
}while(i<=5); //jb tk ki condition fulfill naa ho jaaye
console.log(`value of i is ${i}`); // value of i is 7

// How above code is executed??
/*
 1. do block will be executed 
 2. i value will be printed in the console and then its value will be incremented.
 3. while loop will check whether i<=6 or not.
*/


