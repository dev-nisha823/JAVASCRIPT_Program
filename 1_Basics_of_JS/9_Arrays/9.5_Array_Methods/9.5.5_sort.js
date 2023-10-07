// sort method
// arranging values in either ascending or descending order.
// in javascript, we have sort method -> to arrange these values in any of the order.
// sort() method changes the original array and give new changed array
// sort() method can take callback as an input in the argument.
// sort() method in JavaScript arranges values in ascending order by default.


// ASCII code
// ASCII Table

// '0' : 48 
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// capital alphabet
// 'A' : 65
//  : 
//  :
// 'Z' : 90

// small alphabet 
// 'a' : 97
//  :
//  :
// 'z' : 122



const numbers = [5,200,100,700,1,4,0];
// expectation from sort : 0,1,2,5,100,200,700
numbers.sort();
console.log(numbers); // [0, 1, 100, 200, 4, 5, 700] // very weird answer given by sort.

// Javascript sorting not sorting these numbers but it is behaving these numbers as a string and then applying sort method.
// ["5","200","100","700","1","4","0"]  <- like this

// How we sort strings - > use ASCII code.
/*
step 1 : javascript pick only the first character of string and search for its ASCII code value. 
eg : "500" search the ASCII code value of 5 only and write the numbers it will not search for 0
 */

/*------------------------------*/
/*
numbers_Array = [5,200,110,700,1,4,0]
javascript undestand it as string : ["5","200","110","700","1","4","0"]
javascript search for ascii code of only first character of string:
[53,50,49,55,49,52,48] 
Now javascript arrange these numbers into ascending order
[48,49,49,50,52,53,55] = [0,1,110,200,4,5,700] final result
*/

// pros and cons of sort method
// cons -> it is not sorting the numbers but it understands numbers as string then searching for ASCII code of these string then arranging them in ascending order.
// pros -> 


const userNames = ['harshit', 'ayush', 'aabc','Nisha', 'satyender'];
userNames.sort();
console.log(userNames); //[ 'Nisha', 'aabc', 'ayush', 'harshit', 'satyender' ] 
// arranging the userNames perfectly.



const array_number = [5,9,1200,450,300];
array_number.sort((a, b) => {
    return a-b;     //(sorting in ascending order)
  //return b-a; //(sorting in descending order)
});
console.log(array_number); //[ 5, 9, 300, 450, 1200 ] sorting in ascending order




// How a-b(ascending order) working in above code ? 
// eg : 1200, 410 <- a=1200, b=410
// if-> a-b ---> positive(greater than 0)----> b, a ----> means put b in first place and a after b.
// if-> a-b ---> negative(less than 0)----> a, b ----> means put a in first place and b after a.
// if-> a-b ---> 0 (means they are equal)




// real word examples : 
// price option in ecommerce website either from (low to high) or (high to low) 
// to sort these price they are using sorting method

const userCart = [
    {
        productId : 1,
        productName : "Mobile",
        price : 20000
    },
    {
        productId : 2,
        productName : "Laptop",
        price : 54000
    },
    {
        productId : 3,
        productName : "TV",
        price : 10200
    },
    {
        productId : 4,
        productName : "Iphone Smartphone",
        price : 175000
    },
    {
        productId : 5,
        productName : "Grinder",
        price : 25000
    },
    {
        productId : 6,
        productName : "Teddy Bear",
        price : 300
    },
]
// sort the price from low to high
// here a and b are the objects
const lowToHigh = userCart.sort((a,b) => {
    return a.price-b.price;
});
console.log(lowToHigh);
/*
[
  { productId: 6, productName: 'Teddy Bear', price: 300 },
  { productId: 3, productName: 'TV', price: 10200 },
  { productId: 1, productName: 'Mobile', price: 20000 },
  { productId: 5, productName: 'Grinder', price: 25000 },
  { productId: 2, productName: 'Laptop', price: 54000 },
  { productId: 4, productName: 'Iphone Smartphone', price: 175000 }
]
*/

// print price from high to low from userCart array
const highToLow = userCart.sort((a,b) => {
    return a.price-b.price;
});
console.log(highToLow);



// clone an array 
const product = userCart.slice(0).sort((a,b) => {
    return a.price-b.price;
});
console.log(userCart);
