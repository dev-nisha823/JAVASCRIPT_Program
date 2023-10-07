
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // create data
    // JSON.stringify will convert object key-value pair into json
  body: JSON.stringify({ // creating inside body
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: { // header is very important to write and inside it charset is not mandatory to write but telling the content-type is necessary
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    .then(response => {
        // when url will be right then ok = "True" and if url is wrong ok = "false" in response
        console.log(response); 
        if(response.ok){
            // we have to call json method to see the json data
            // json method also return promise
            return response.json();
        }
        else{
            // now catch block will execute bcz we are using throw 
            throw new Error("something went wrong");
            // but if we don't throw an error then undefined will be printed
            // but if we don't use throw then when we disconnect internet then catch block will be executed means then fetch will reject the promise
        }
    })
    .then(data => {
        console.log(data); // {title: 'foo', body: 'bar', userId: 1, id: 101}
    })
    .catch(error => {
        console.log("inside catch block");
        console.log(error);
    })