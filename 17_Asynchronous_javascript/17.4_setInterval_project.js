// Task : change the background color again and again after each second itself.
// after clicking the button stop changing the color of body

const body = document.body;
const button = document.querySelector(".color-stopper");

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = rgb;
}, 1000);

button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent = body.style.backgroundColor;
});
