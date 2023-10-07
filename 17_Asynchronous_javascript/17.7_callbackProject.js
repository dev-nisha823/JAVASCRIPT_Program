// callback project 
// Task: change the h1 tag content & color by delaying one of them

// Text            Delay              Color
/*-------------------------------------------*/
// One              1s                Violet
// Two              2s                Purple
// Three            2s                red
// Four             1s                pink
// Five             2s                green
// Six              3s                blue
// Seven            1s                brown

// select the heading 
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
// callback hell -> nested callbacks 
// it is difficult to maintain these nested callbacks
// but in promises nested callback removes permanently
/*
setTimeout(()=>{
    heading1.textContent = "One"; 
    heading1.style.color = "violet";
    setTimeout(()=>{
        heading2.textContent = "Two"; 
        heading2.style.color = "purple";
        setTimeout(()=>{
            heading3.textContent = "Three"; 
            heading3.style.color = "red";
            setTimeout(()=>{
                heading4.textContent = "Four"; 
                heading4.style.color = "pink";
                setTimeout(()=>{
                    heading5.textContent = "Five"; 
                    heading5.style.color = "green";
                    setTimeout(()=>{
                        heading6.textContent = "Six"; 
                        heading6.style.color = "blue";
                        setTimeout(()=>{
                            heading7.textContent = "Seven"; 
                            heading7.style.color = "brown";
                        }, 1000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 2000);
},1000);
*/



// we can do this by simple function 
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        // check whether element existing or not
        if(element){
            element.textContent = text;
            element.style.color = color;
            // after a particular time pass a function and call it
            // onSuccessCallback(); // give error bcz we haven't pass a function it is undefined and when we call undefined it will give error
            // check whether we have pass a function or not
            if(onSuccessCallback){onSuccessCallback();}
        }else{
            if(onFailureCallback){onFailureCallback();}
            console.log("your element doesn't exist");
        }
    }, time);
}

/*
changeText(heading1, "one", "violet", 3000, ()=> {
    changeText(heading2, "two", 'green', 1000)
});
changeText(heading8, "eight", "purple", 5000);
// here heading8 is not present then it will print "your element doesn't exist" in console and no change of text and color in webpage
*/

// calling the callback function
// pyramid of doom bcz it looks like a pyramid


changeText(heading1, "one", "cyan", 1000, ()=>{
    changeText(heading2, "two", "red", 2000, ()=>{
        changeText(heading3, "three", "yellow", 2000, ()=>{
            changeText(heading4, "four", "orange", 1000, ()=>{
                changeText(heading5, "five", "grey", 2000, ()=>{
                    changeText(heading6, "six", "green", 3000, ()=>{
                        changeText(heading7, "seven", "purple", 1000, ()=>{
                            changeText(heading8, "eight", "blue", 2000, ()=>{
                                changeText(heading9, "nine", "hotpink", 2000, ()=>{
                                    changeText(heading10, "ten", "violet", 2000, ()=>{
    
                                    }, ()=>{console.log(`${element} doesn't exist`);});
                                }, ()=>{console.log(`${element} doesn't exist`);});
                            }, ()=>{console.log(`${element} doesn't exist`);});
                        }, ()=>{console.log(`${element} doesn't exist`);});
                    }, ()=>{console.log(`${element} doesn't exist`);});
                }, ()=>{console.log(`${element} doesn't exist`);});
            }, ()=>{console.log(`${element} doesn't exist`);});
        }, ()=>{console.log(`${element} doesn't exist`);});
    }, ()=>{console.log(`${element} doesn't exist`);});
}, ()=>{console.log(`${element} doesn't exist`);});


