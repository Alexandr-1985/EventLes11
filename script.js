"user strict";

const btn = document.getElementById("btn");
const inputText = document.getElementById("text").value;
const square = document.getElementById("square").style.backgroundColor;
const ebtn = (document.getElementById("e_btn").style.display = "none");
const range = document.getElementById("range").value;
const spanRange = document.getElementById("range-span");
const circle = (document.getElementById("circle").style.width =
    range.currentTarget.procent);
document.getElementById("circle").style.height = range.currentTarget.procent;

const btnClick = function(event) {
    event.target.value;
};

const squareColor = function(event) {
    event.target.classList.squareColor(colorClick);
};

let colorSquare = null;

const colorClick = function(event) {
    if (colorSquare) {
        colorSquare.classList.remove("green");
        colorSquare.classList.remove("yelow");
        colorSquare.classList.remove("blue");
    }
    colorSquare = event.currentTarget;
    colorSquare.classList.add(inputText.target.classList());
};

const logger = function(event) {
    spanRange.textContent = event.target.value;
};

btn.addEventListener("click", btnClick);
inputText.addEventListener("input", colorClick, true);
square.addEventListener("input", squareColor, true);
range.addEventListener("input", logger);