// create an object using xhr(xmlHTTPRequest)

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr, typeof xhr); // output: 'object'
// output : XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}


// step 1 : use open method on xhr
// open method will take 2 things 
// we can write http request either in bold or capital letter but according to convention we should write it in uppercase
xhr.open("GET", URL);



// browser will call this function whenever the state will change
/*
xhr.onreadystatechange = function(){
    console.log(xhr); // here it is calling xhr 3 times and everytime the readyState is changing
    console.log(xhr.readyState); // print the value of readyState
    if(xhr.readyState === 4){  
        console.log(xhr.response, typeof xhr.response); // we will get the response i.e,. we will get the api
        // typeof xhr response is string but we will convert it in javascript object 
        const response = xhr.response;
        // js has library json and we can parse it
        const data = JSON.parse(response); // JSON.parse will convert response from string to object
        console.log(data, typeof data); // now typeof data will be object 
        // output: (100) [{...}, {...}, {...} .....]
    }
}
*/




// we can write above code of xhr.onreadystatechange like this
// onload will work only when xhr.readyState === 4
xhr.onload = function(){
    console.log(xhr.readyState); // print readyState value
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data, typeof data);
}

// step 4 : send the request
xhr.send(); 

// status : 404 means it will give an empty object in response 


