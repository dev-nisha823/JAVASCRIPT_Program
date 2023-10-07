// new keyword

// new keyword does 3 work
// 1) creating empty object i.e,. 'this = {}' means this refers to an empty object
// 2) return 'this'
//  by default new keyword will set the value of __proto__ of object to prototype of function
// 3) __proto__ or [[prototype]] will set the value equal to prototype of function

function myfunc(firstKey, secondKey){
    // new keyword will automatically link the __proto__ and prototype 
    // this = {} <------  like this
    // now no need to write  const objectName = Object.create(funcName.prototype);
    this.firstKey = firstKey;
    this.secondKey = secondKey;
}

// function gives free space which is an object and called as prototype
// adding key value pair to prototype
myfunc.prototype.about = function(){
    console.log(this.firstKey, this.secondKey);
}

// creating object using new keyword
const object1 = new myfunc("firstValue", "secondValue");
console.log(object1); // myfunc { firstKey: 'firstValue', secondKey: 'secondValue' }

// new keyword will create a link and set the value of __proto__ equal to object.
// we are doing it manually in prototype like const objectName = Object.create(funcName.prototype); 
// javascript ko agar myfunc() mein naa mile to vo funcName.prototype mein jakar dhundh le
// to ye saaram kaam this keyword khud hii kar dega yaani relation bana dega


object1.about(); // Output: firstValue secondValue
// when we use new keyword then this thing happens
// const objectName = Object.create(funcName.prototype); === 'this = {}'


// suppose we are creating a library then how the developer will know that the constructor function must called by using new keyword
// then use the convention----> whenever we are using new keyword then make the first letter of function name in capital



// example of above concepts: 
// constructor function which create objects for us
function UserCart(productName, productId, productColor, productSize, productPrice){
    
    // this = {}; // no need to write new keyword khud se bana dega 

    // adding key-value pair to object products
    this.productName = productName;
    this.productId  = productId;
    this.productColor = productColor;
    this.productSize = productSize;
    this.productPrice = productPrice;

    // we don't need to return this bcz new keyword return it by own.
    // return this;
}

// creating object methods in object products using prototype
UserCart.prototype.about = function(){
    return `${this.productName} having ${this.productId} color is ${this.productColor} and productsize is ${this.productSize} and price of product is ${this.productPrice}`;
}
UserCart.prototype.isPrice = function(){
    return this.productPrice <= 2000;
}

// now create products by using new keyword
const product1 = new UserCart("Laptop", 12012, "silver", "Medium", 60000);
console.log(product1); // Output: UserCart {productName: 'Laptop', productId: 12012, productColor: 'silver', productSize: 'Medium', productPrice: 60000}
console.log(product1.about()); // Output: Laptop having 12012 color is silver and productsize is Medium and price of product is 60000
console.log(product1.isPrice()); // Output: false

// now we will print the key of product1 using 'for in' loop
for(let key in product1){
    console.log(key);
}
/*
Output: 
productName
productId
productColor
productSize
productPrice
about
isPrice 

key of prototype as well as function both will be printed
but if we want to print the properties of constructor functions only then 
*/ 
for(let key in product1){
    if(product1.hasOwnProperty(key)){
        console.log(key);
    }
}
// hasOwnProperty will give boolean and here it will check kya product1 kii khud kii property hain ye 
// means it will print true for khud kii property and 
// false for the key which is inside prototype
/*
productName
productId
productColor
productSize
productPrice

it will not print the key of prototype bcz that key is not in the product object but it is of prototype.
*/