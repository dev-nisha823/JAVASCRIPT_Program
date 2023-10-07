const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // check whether element existing or not
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                console.log("your element doesn't exist");
                reject("element not found");
            }
        }, time)
    }); 
}

// Convert nested Callbacks to flat code using promises
changeText(heading1, "one", "red", 1000)
    // then method also return promise but here it will return undefined bcz we haven't pass any value in resolve
    .then(() => {
        // changeText is returning a promise that's y we will return changeText so that we can do chaining
        return changeText(heading2, "two", "purple", 2000)
    }) 
    .then(() => {
        return changeText(heading3, "three", "green", 1000)
    })
    .then(() => {
        return changeText(heading4, "four", "pink", 3000)
    })
    .then(() => {
        return changeText(heading5, "five", "grey", 1000)
    })
    .then(() => {
        return changeText(heading6, "six", "blue", 2000)
    })
    .then(() => {
        return changeText(heading7, "seven", "green", 1000)
    })
    .then(() => {
        return changeText(heading8, "eight", "pink", 3000)
    })
    .then(() => {
        return changeText(heading9, "nine", "grey", 1000)
    })
    .then(() => {
        return changeText(heading10, "ten", "blue", 2000)
    })
    .then(() => {
        return changeText(heading11, "eleven", "blue", 2000)
    })
    .catch((error) => {alert(error);}) // it will not run the next then and execute the catch block

