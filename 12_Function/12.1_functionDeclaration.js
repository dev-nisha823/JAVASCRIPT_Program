// declaring a function

/*

function function_name(parameters means jo argument hamne daala hain vo parameters kii ho jaayengi){
    // jo bhi kaam function se karwana hain vo yaha likho
    // console.log();
    // return sth;
}
function_na me() //to call,invoke and return the function

const returnedValue = function_name(arguments means jo hmm pass kar rahe hain);
console.log(returnedValue);

// don't repeat yourself = dry means function ko baar baar nahi likhna hain

*/




// sum of 2 numbers using function
function sum(num1, num2, num3){
    return num1 + num2 + num3;
}
//sum(8,9); //it will add the numbers but not return anything bcz for returning we have to write it inside console.log
console.log(sum(8,9,6)); // 23
const returnedValue = sum(10,90,80);
//const returnedValue = sum(10,90); NaN bcz third argument is missing that's why 10+90+undefined = NaN
//const returnedValue = sum(); // Nan(Not a Number) bcz undefined + undefined = NaN
console.log(returnedValue); // 180

// WAP to print true or false if number is even or not
function even(num){

    if(num%2 == 0){
        // console.log("Entered number is even");
        return true;
    }
    else{
        // console.log("Entered number is not even");
        return false;
    }
    // return false; write this instead of else
    // after writing below code no need to write if-else condition
    // return num%2 == 0; //it will give either true or false
}
console.log(even(5));




// WAP to print first character of a string.
function first_character(string){
    console.log(string[0]);
}
first_character("Nisha Kumari");


// WAP to print index of target number if present in array and if not present then return -1
function targetarray(array, target_num){
    // for of and for in loop or simple for loop can also work here
    // for(let i=0; i<array.length; i++)
  for(let i in array){
      if(target_num == array[i]){
        return i;
      }
    }
    return -1;
}
console.log(targetarray([2, 4, 5, 1, 8, 9],5));

