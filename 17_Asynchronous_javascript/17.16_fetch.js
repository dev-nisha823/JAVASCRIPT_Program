// fetch
// fetch return promise it means we can use then method on fetch
// we don't require to write all the codes that we written in promise by using then method 

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    // we can write anything in place of response and data
    .then(response => {
        // when url will be right then ok = "True" and if url is wrong ok = "false" in response
        console.log(response); 
        if(response.ok){
            // we have to call json method to see the json data
            // json method also return promise
            return response.json();
        }else{
            // now catch block will execute bcz we are using throw 
            throw new Error("something went wrong");
        }
    })
    .then(data => {
        console.log(data);
    })
    // catch block will not execute here
    // in case of fetch catch block will only execute when there will be network related error not in the case of http status error
    .catch(error => {
        console.log("inside catch block");
        console.log(error);
    })



// fetch is having 2nd parameter also which is an object having key-value pair
