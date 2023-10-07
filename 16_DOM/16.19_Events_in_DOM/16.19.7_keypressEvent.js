// keypress event
// mouseover event

// Task : press any key of keyboard and print it on console using keypress event
const body = document.body;
body.addEventListener("keypress", (e) => {
    console.log("You have pressed key", e.key);
});


const button = document.querySelector("#buttonOne");
button.addEventListener("mouseover", () => {
    console.log("You have mouseover");
});

button.addEventListener("mouseleave", () => {
    console.log("You have mouseleave");
});

