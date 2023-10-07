// Task :  whenever we click on button the bg color of body changed to any color

const mainButton = document.querySelector("#buttonOne");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

mainButton.addEventListener("click", () => {
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
    currentColor.style.color = randomColor;
})

// Math.random() * 10 -> give number from 1.012467678 to 9.9000  but not give 10
// Math.floor(Math.random() * 10) -> remove the decimal value but this code will also give number from 1 to 9 but not 10
// if we want number from 1 to 255 then 
// Math.floor(Math.random() * 256) // it will not give 256