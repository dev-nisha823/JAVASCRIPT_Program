// some method ---> 


// check is there any number in this array is even.
// kya ek bhi number esa hain jo even hain
const numbers = [3,5,2,9];

// return true ------> agar ek bhi mil gaya jo condition ko fulfill kar rha to true dega
// return false -----> agar ek bhi naa mila to false return karega

const ans = numbers.some((number) => number%2 === 0);
console.log(ans); // true


// real world example
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
];
// check -> is there any product in this cart which price > 10200
const productPrice = userCart.some((product) => product.price > 200000);
console.log(productPrice);