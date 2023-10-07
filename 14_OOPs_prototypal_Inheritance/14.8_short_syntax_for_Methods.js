// short syntax for object methods

const user = {
    firstName : "harshit",
    age : 23,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

// shortcut of above code
const users = {
    firstName : "harshit",
    age : 23,
    about(){
        console.log(this.firstName, this.age);
    }
}
users.about();// harshit 23

// both the codes written above are same