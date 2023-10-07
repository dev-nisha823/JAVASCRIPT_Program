// how callback is used in asynchronous programming ???
// callbacks, callback hell, pyramid of doom

// change the H1 content from Heading to Heading1
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");

setTimeout(()=>{
    heading1.textContent = "Heading 1"; 
    heading1.style.backgroundColor = "red";
    // we can write like this to maintain the order of execution 
    // first heading 1 content will be change then heading 2 will change just aafter 1 sec
    setTimeout(()=>{
        heading2.textContent = "Heading 2"; 
        heading2.style.backgroundColor = "yellow";
    }, 1000);
}, 1000);


// after 1sec of Heeading 1 the Heading 2 should changed
// setTimeout(()=>{
//     heading2.textContent = "Heading 2"; 
//     heading2.style.backgroundColor = "yellow";
// }, 1000);

// above code can dis maintain the order of execution of code and changes of style after implementing
// first heading 2 will change then heading 1 will change so it is not the way we want to execute the code
