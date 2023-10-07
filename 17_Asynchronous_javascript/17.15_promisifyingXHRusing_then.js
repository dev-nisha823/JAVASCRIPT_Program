// promisifying xhr using then method and chaining inside it

const URL = "https://jsonplaceholder.typicode.com/posts";
 
// function will take two parameters
function sendRequest(method, url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }else{
                reject(new Error("something whent wrong"));
            }
        }
        xhr.onerror = () => {
            reject(new Error("something whent wrong"));
        }
        xhr.send();
    })
}


// chaining of promise using then method 
sendRequest("GET", URL) // return promise
    // return promise and resolve the value with the promise which is given in then method
    .then( (response) => {
        const data = JSON.parse(response);
        return data;
    })
    .then(data => {
        console.log(data);
        const id = data[3].id;
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error => {
        console.log(error);
    })