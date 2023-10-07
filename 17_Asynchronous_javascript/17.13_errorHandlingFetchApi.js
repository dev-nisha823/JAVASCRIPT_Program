// error handling in fetch api

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }else{
        console.log("something went wrong");
    }
}

// to handle the network related error
// it will execute when internet diconnected or error in network 
xhr.onerror = () => {
    console.log("network error");
}

xhr.send();  