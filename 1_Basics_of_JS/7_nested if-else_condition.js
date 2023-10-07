// prompt() -> used to take the input from user.
//          -> always take input in string not in number .
//          -> Eg: input = 12 but typeof 12 will be string "12"

// nested-if-else happens in else block of the if-else statement.

// Nested-if-else syntax :
/*

// Outer if condition
if (condition 1) {
    // inner if condition
    if (condition 2) {
        // Block of Code and Statements
    }
    // inner else condition
    else {
        // Block of Code and Statements
    }
 }
 // Outer else statement
 else {
    // inner if condition
    if (condition 3) {
        // Block of Code and Statements
    }
    // inner else condition
    else {
        // Block of Code and Statements
    }
 }

*/




// creating a game.
/*
  winning number 19
  if user guess 19 means he is right.
  otherwise number < 19 -> "guess is too low"
  number > 19 -> " guess is too high "
*/

let winningNumber = 19;
// + to make string into number
let guessNumber = +prompt("Guess a Number");
if(guessNumber === winningNumber){
    console.log("Your guess is right!!");
    console.log(guessNumber);

}else{
    // nested-if-else
    if(guessNumber < winningNumber){
        console.log("Guess number is too low",guessNumber);
    }
    else{
        console.log("Guess number is too high",guessNumber);
    }
}








// if-else if-else condition 
// we can write more than one condition in it.
// wherever the else if condition will be true after that no else if condition will be executed.

let tempInDegree = 30;

if(tempInDegree < 0){
    console.log("extremely cold outside Don't go");
}else if(tempInDegree < 20){
    console.log(" cold outside");
}else if(tempInDegree <30){
    console.log(" Moderate climate outside");
}else if(tempInDegree < 40){
    console.log("lets go for swimming");
}else if(tempInDegree < 50){
    console.log("turn on AC");
}else{
    console.log("too hot!!!");
}
console.log("Hello");



// printing week day using if-else if-else
let weekDay = +prompt("Enter your favourite day number from 0 to 6");
if(weekDay === 0){
    console.log("SUNDAY");
}else if(weekDay === 1){
    console.log("MONDAY");
}else if(weekDay === 2){
    console.log("TUESDAY");
}else if(weekDay === 3){
    console.log("WEDNESDAY");
}else if(weekDay === 4){
    console.log("THURSDAY");
}else if(weekDay === 5){
    console.log("FRIDAY");
}else if(weekDay === 6){
    console.log("SATURDAY");
}else {
    console.log("Invalid day number you have entered");
}




//switch statement 
//  whatever the thing we want to check put it inside parenthesis 
// syntax :  switch(x){
/*
    let x;
    switch(x){
        case a: console.log();
        case b: console.log();
        default: console.log();
    }

    in switch statement if we don't write break then it will print all the statements from where the condition is true 
    break is impt. to write in switch-case statement.
-> when the value is -1 or anything which is not according to the case then it will print the default statement.
*/

let day = 1;
switch(day){
    case 0: console.log("SUNDAY");
             break;
    case 1: console.log("MONDAY");
             break;
    case 2: console.log("TUESDAY");
             break;
    case 3: console.log("WEDNESDAY");
             break;
    case 4: console.log("THURSDAY");
             break;
    case 5: console.log("FRIDAY");
             break;
    case 6: console.log("SATURDAY");
             break;
    default: console.log("INVALID DAY");
}

// break & continue keyword
/*
break keyword will stop executing the next statement wherever the condition is true & jump out of the loop/block and will not print the value of the variable wherever condition is fulfilled.
continue will not stop the execution wherever the condition met but it will not print the value of the fulfilled condition but it will again start from the begining from where the condition was true.
*/
let i = 1;

for(; i<=10; i++){
    if(i===5){
        break;
    }
    console.log(i); // 1 2 3 4
}

for(; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i); // 1 2 3 4 6 7 8 9 10 
}