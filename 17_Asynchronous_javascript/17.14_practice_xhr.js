const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        // console.log(data);
        // suppose we want 4th id from posts(json)
        // const id = data[3]; // print the whole data of 4th id
        const id = data[3].id; // print id only
        console.log(id);

        // but we don't use this old method bcz it is just like callback hell we will use promise 
        // now request the id to url 
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2); // https://jsonplaceholder.typicode.com/posts/4
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();

    }else{
        console.log("something went wrong");
    }
}

xhr.onerror = () => {
    console.log("network error");
}

xhr.send();  