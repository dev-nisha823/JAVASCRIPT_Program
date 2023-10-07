// nested destructuring

const users = [
    {userId : 1, firstName : "nisha", gender : "female"},
    {userId : 2, firstName : "sachin", gender : "male"},
    {userId : 3, firstName : "satyender", gender : "male"},
    {userId : 4, firstName : "ayush", gender : "male"},
    {userId : 5, firstName : "rahul", gender : "male"},
];

// syntax : const [kaha se destructure karna hain] = jisko destructure karna hain
const [user1, user2, user3, user4, user5] = users;
console.log(user1,user2);

// to access firstName of user1 and gender of user3 then we will do object destructuring
// object ko destructure karna hain 
const [{firstName}, , {gender}] = users;
console.log(firstName);
console.log(gender);

// by giving a new variable name to key here we are skipping 2nd user we are only accesing user1 gender and user3 firstname
const [ {gender : user1gender, userId}, ,{firstName : user3firstName}] = users;
console.log(user1gender,userId);
console.log(user3firstName);



