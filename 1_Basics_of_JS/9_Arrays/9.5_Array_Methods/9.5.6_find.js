// find method
// as a input it will also take callback function


const myArray = ["frog", "cat", "dog", "Lion", "tiger","Leopard"];
// callback function
function isLength(string){
    return string.length === 3;
}

// it will only take the first occurence wherever the condition will true
const string_of_3Character = myArray.find(isLength);
console.log(string_of_3Character); // cat 
// find() method will not give the other string which is also having the same length character but 
// it will only take the first occurence wherever the condition will true


// we can also put this callback function inside find() method asan arrow function


// real world examples :
const users = [
    {
        firstName: "nisha", 
        userId : 1
    },
    {
        firstName: "rahul", 
        userId : 2
    },
    {
        firstName: "sachin",
        userId : 3
    },
    {
        firstName: "akash", 
        userId : 4
    },
    {
        firstName: "ayush",
        userId : 5
    },
    {
        firstName: "satyender",
        userId : 6
    },
];
// now we want to find the user whose userId is 3 bcz this will be unique
const myuserId = users.find((user) => {
    return user.userId === 3;
});
console.log(myuserId);
