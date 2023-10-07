// alert
// used to invoke a mini window wit a message
alert("You have landed the page successfully. Have a great learning!!!");





// prompt is used to take input from the user.
// by default input is in string so if we want to take input a number from user then we have to convert string into number

let num = prompt("Enter number you want","578");
// 578 is the default value argument entered in prompt
// until and unless we will not change the default value this number will be entered
document.write(num); // it will write the num on document page

// to convert string to number
num = Number.parseInt(num);







// confirm: shows a message and waits for the user to press OK or Cancel. 
//          returns true for OK and false for cancel.
let write = confirm("Do you want to write it to the page");
if(write){
    document.write(num);
}else{
    document.write("please allow me to write");
}

// limitations : it block the code of execution.
//               it gives older looks
// use it in admin panels
