// every method - check each and every elements
// 
// check whether each and every element of this array is even or not.
const numbers = [2,3,4,5,8,1,0,10];
const ans = numbers.every((number) => {
    return number%2 === 0 ;
});
console.log(ans); // false
// callback function of every() -----------> either give true/false 

// every() return -------> boolean-----> 
// but return true when callback function will be applied to each an every element means when every element will be even return true.
// but if one of them will be different then every() will return false.



// real world examples:
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
// check whether each product has price less than 200000.
// price < 200000

const productPrice = userCart.every((product) => {
    return product.price < 200000;
});
console.log(productPrice); //true