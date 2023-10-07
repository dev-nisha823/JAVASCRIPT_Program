
/* ------------>  Using 'prototype' ----------------- */

// userCart is now become a constructor function
function userCart(productName, productId, productColor, productSize, productPrice){
   
    // creting a new object 'products' using 'Object.create()' and passing userCart prototype to it
    const products = Object.create(userCart.prototype);
    
    // adding key-value pair to object products
    products.productName = productName;
    products.productId  = productId;
    products.productColor = productColor;
    products.productSize = productSize;
    products.productPrice = productPrice;

    // returning the object products
    return products;
}

// creating object methods in object products using prototype
userCart.prototype.about = function(){
    return `${this.productName} having ${this.productId} color is ${this.productColor} and productsize is ${this.productSize} and price of product is ${this.productPrice}`;
}
userCart.prototype.isPrice = function(){
    return this.productPrice <= 2000;
}

// now create 3 products by calling function userCart
const product1 = userCart("Laptop", 12012, "silver", "Medium", 60000);
const product2 = userCart("Iphone", 134, "dark_black", "large", 150000);
const product3 = userCart("StudyTable", 12, "greyish black", "Large", 1500);

// print product1, product2, product3 and check the object methods such as 'about()' and 'isPrice'
console.log(product1); // Output: userCart {productName: 'Laptop', productId: 12012, productColor: 'silver', productSize: 'Medium', productPrice: 60000}
console.log(product1.about()); // Output: Laptop having 12012 color is silver and productsize is Medium and price of product is 60000
console.log(product1.isPrice()); // Output: false

console.log(product2);
console.log(product2.about());
console.log(product2.isPrice()); // Output: false

console.log(product3);
console.log(product3.about());
console.log(product3.isPrice()); // Output: true

/*
----> This is how prototype looks like--------->
userCart {productName: 'Laptop', productId: 12012, productColor: 'silver', productSize: 'Medium', productPrice: 60000}
productColor: "silver"
productId: 12012
productName: "Laptop"
productPrice: 60000
productSize: "Medium"
[[Prototype]]: Object
    about: ƒ ()
    isPrice: ƒ ()
    constructor: ƒ userCart(productName, productId, productColor, productSize, productPrice)
    [[Prototype]]: Object
*/







/* ------------> Using '__proto__' --------------  */
function createUser(firstName, lastName, email, age, address, state){
    // creating a new object 'users' using 'Object.create()' and passing 'userMethods' object reference to it by using '__proto__'
    const users = Object.create(userMethods);

    // 
    users.firstName = firstName;
    users.lastName = lastName;
    users.email = email;
    users.age = age;
    users.address = address;
    users.state = state;

    // 
    return users;
}
// creating object 'userMethods' so that it if we forget to write the reference of object methods about() and isAge_18() insid function createUser then __proto__  will provide the reference of the objectand its methods
const userMethods = {
    about : function(){
        return `${this.firstName} ${this.lastName} having emailId ${this.email} and age is ${this.age} years old living in ${this.address} ${this.state}`;
    },
    isAge_18 : function(){
        return this.age >= 18;
    }
}

// creating 3 user by calling function createUser()
const user1 = createUser('Nisha', 'Kumari', "nishakumaridav12@gmail.com", 23, "Aurangabad", "BIHAR");
const user2 = createUser('Neha', 'Kumari', "neha123@gmail.com", 21, "Aurangabad", "MAHARASHTRA");
const user3 = createUser('Naina', 'yadav', "naina12@gmail.com", 16, "Bhuj", "GUJARAT");

// printing all the 3 user and also there information
console.log(user1); // Output: {firstName: 'Nisha', lastName: 'Kumari', email: 'nishakumaridav12@gmail.com', age: 23, address: 'Aurangabad', …}
console.log(user1.about()); // Output: Nisha Kumari having emailId nishakumaridav12@gmail.com and age is 23 years old living in Aurangabad BIHAR
console.log(user1.isAge_18()); // Output: true 

console.log(user2);
console.log(user2.about());
console.log(user2.isAge_18());

console.log(user3);
console.log(user3.about());
console.log(user3.isAge_18());

/*
----------------> This is how __proto__ looks like
{firstName: 'Nisha', lastName: 'Kumari', email: 'nishakumaridav12@gmail.com', age: 23, address: 'Aurangabad', …}
address: "Aurangabad"
age: 23
email: "nishakumaridav12@gmail.com"
firstName: "Nisha"
lastName: "Kumari"
state: "BIHAR"
[[Prototype]]: Object
    about: ƒ ()
    isAge_18: ƒ ()
    [[Prototype]]: Object
*/

// main difference between '__proto__'  and 'prototype'  is 
/*
 * It is recommended to use prototype for setting up prototypal inheritance and avoid using __proto__ for better compatibility and maintainability.
 * 
 */

