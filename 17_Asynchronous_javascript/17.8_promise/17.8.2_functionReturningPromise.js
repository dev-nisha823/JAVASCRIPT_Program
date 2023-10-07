// function returning promise

function returnPromise(){
    return new Promise((resolve, reject) => {
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve({value: "friedRice"});
        }else{
            reject("couldn't make it bcz of missing of ingredients");
        }
    });
}

// now we will use then() and catch()
// returnPromise.then is not a function so we can't call it
// we will use parenthesis like this returnPromise()
returnPromise().then(
    (myfriedRice)=>{
    console.log("lets eat", myfriedRice);
}).catch(
    (error)=>{console.log(error)}
);

