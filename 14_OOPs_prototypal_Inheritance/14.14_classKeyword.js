// class keyword
// introduced in 2015 ES6
// in javascript classes are fake bcz internally in js the work happens is same as happens in constructor function

class product{
    // in constructor function we have written this.propertyName = PropertyName;  but here we will use constructor
    // create object and in this constructor we will pass the property which we are passing as a parameter in constructor function
    // constructor will also return the object as well 
    constructor(productName, productId, productColor, productSize, productPrice){ 
        console.log("constructor called");
        this.productName = productName;
        this.productId  = productId;
        this.productColor = productColor;
        this.productSize = productSize;
        this.productPrice = productPrice;
    }
    // we can also define object() methods inside the class as well 
    // no need to do outside as we do in object() methods.
    // called as methods
    about(){
        return `${this.productName} having ${this.productId} color is ${this.productColor} and productsize is ${this.productSize} and price of product is ${this.productPrice}`;
    }
    isPrice(){
        return this.productPrice <= 2000;
    }
    func(a){
        console.log(a);
    }
}
// class constructor can't be invoked without 'new' keyword means we have to call class using new keyword
const product1 = new product("Laptop", 12012, "silver", "Medium", 60000);
console.log(product1);
console.log(product1.about());
console.log(product1.isPrice());
// if we want to see the prototype of product1 then
console.log(Object.getPrototypeOf(product1)); // {}
/* Output:
{constructor: ƒ, about: ƒ, isPrice: ƒ}
about: ƒ about()
constructor: class product
isPrice: ƒ isPrice()
[[Prototype]]: Object
*/
product1.func("laptop");
console.log(product1);

