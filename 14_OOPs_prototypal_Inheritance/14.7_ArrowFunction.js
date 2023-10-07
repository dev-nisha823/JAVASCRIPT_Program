// arrow function

// arrow function kaa 'this' nahi hota, 
// arrow function apne surrounding(1 level up) se 'this' leta hain

const user1 = {
    firstName : "harshit",
    age : 23,
    about : () => {
        // here this of arrow function should be window object 
        console.log(this); // print window object but not the user1 object
        console.log(this.firstName, this.age); // undefined undefined
    }
}
user1.about(); user1.about().call(user1); // both will print undefined undefined

