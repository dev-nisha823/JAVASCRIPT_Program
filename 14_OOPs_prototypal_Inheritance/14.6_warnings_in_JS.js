// some warnings in javascript
// don't do this mistake

const user1 = {
    firstName : "harshit",
    age : 23,
    about : function(){
        console.log(this.firstName, this.age);
    }
}
//it will give undefined undefined untill and unless we don't bind the 'this' to this function
// const myfunc = user1.about;
const myfunc = user1.about.bind(user1); // Output: harshit 23
myfunc();