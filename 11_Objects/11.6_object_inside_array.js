// objects inside array
// very useful in real world application

const users = [
    {userId : 1, firstName : "nisha", gender : "female"},
    {userId : 2, firstName : "sachin", gender : "male"},
    {userId : 3, firstName : "satyender", gender : "male"},
    {userId : 4, firstName : "ayush", gender : "male"},
    {userId : 5, firstName : "rahul", gender : "male"},
];

for(let user of users){
    console.log(user); // give all the objects
    console.log(user.userId); // give only the userid
    console.log(user.firstName); // give only the firstname
    console.log(user.gender); // give only the gender
}

for(let key in users){
    console.log(users[key]);
}
