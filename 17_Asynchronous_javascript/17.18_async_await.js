// async await
// we can remove .then method which we uses in fetch API

// here we are consuming the promise by using .then method
/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
*/

// we can make any function async and wait for the promise 
// it is not a normal function, this function will always return promise
// await-> hamlog apne code ko wait karwa sakte hai or alag alag function variable ke value ke return hone kaa wait kar sakte hai

/*
async function getPosts(){
    // call fetch
    // await will wait till fetch is resolved 
    // jb tk await line finish nahi hogi tb tk uske aage kii lines execute nahi hogi 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok){
        throw new Error("something went wrong");
    }
    const data = await response.json();
    return data;
}
*/

// can also use arrow function
const getPosts = async() => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok){
        throw new Error("something went wrong");
    }
    const data = await response.json();
    return data;
}

getPosts()
    .then(myData => {console.log(myData);})
    .catch(error => {console.log(error);})





