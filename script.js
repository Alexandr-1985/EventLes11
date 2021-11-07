"user strict";

const btn = document.getElementById("btn");
const range = document.getElementById("range");
const text = document.getElementById("text");
const span = document.getElementById("range-span");
const square = document.getElementById("square");
const circle = document.getElementById("circle");
const eBtn = document.getElementById("e_btn");

/*Работать должно так: ввели в input[type=text] yellow, по нажатию на кнопку значение input[type=text] попадает в свойство style="backgroundColor: yellow" и фон квадрата должен поменяться*/
btn.addEventListener("click", function() {
    square.style.backgroundColor = text.value;
});

/* В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "*/
eBtn.style.display = "none";

/*при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!) */
range.addEventListener("input", function(event) {
    span.textContent = event.target.value;
});

range.addEventListener("input", function() {
    circle.style.width = range.value + "%";
    circle.style.height = range.value + "%";
});