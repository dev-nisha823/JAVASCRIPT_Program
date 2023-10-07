// reduce method
// as input it will take callback function.
// reduce doesn't give an array it gives value after reducing the array.

const numbers = [1,2,3,4,5];
// aim : sum of all the numbers in array to understand reduce
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initials = 100);

/*
---------------- How initial value work------------
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},initials = 100);

we can also set the initial value and this initial value will assign to the accumulator first value.
means the first value of accumulator will become 100 instead of 1 from numbers_array 
and current value will start from starting value of numbers_Array

accumulator ,  currentvalue , return
100                1            101
101                2            103
103                3            106
106                4            110
110                5            115
*/
console.log(sum);


/* ------------------------THIS IS HOW reduce() function work-----------------------*/

//           accumulator , currentvalue , return(sum kar rahe hain)
//first time:      1              2          3
//(return value will become the value of accumulator after first time callback function called)
//second time:     3              3          6
//Third time :     6              4          10
//Fourth time:     10             5          15(last return bcz after this there is no numbers in array)


// real life examples: we can use reduce in ecommerce website
const userCart = [
    {
        productId : 1,
        productName : "Mobile",
        price : 20000
    },
    {
        productId : 2,
        productName : "Laptop",
        price : 50000
    },
    {
        productId : 3,
        productName : "TV",
        price : 10000
    },
]
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return currentProduct.price + totalPrice;
     
}, totalPrice = 0);
console.log(totalAmount);

// totalPrice  ,      currentvalue             ,    return
// 0                {}1st_object_price-20000        20000
// 20000               50000                        70000
// 70000               10000                        80000
  