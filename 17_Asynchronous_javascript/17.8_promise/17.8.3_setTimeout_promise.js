// promise && setTimeout

// After 2second either resolve or reject the promise
function myPromise(){
    return new Promise((resolve,reject) => {
        // const value = true; // resolved will be printed
        const value = false; // rejected will be printed
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        }, 2000);
    });
}

myPromise()
        .then(() => {console.log("resolved");})
        .catch(() => {console.log("rejected");})