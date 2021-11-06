"user strict";

/*Работать должно так: ввели в input[type=text] yellow, по нажатию на кнопку значение input[type=text] попадает в свойство style="backgroundColor: yellow" и фон квадрата должен поменяться*/
document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("square").style.backgroundColor =
        document.getElementById("text").value;
});

/* В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "*/
document.getElementById("e_btn").style.display = "none";

/*при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!) */
const range = document.getElementById("range");
const span = document.getElementById("range-span");
const square = document.getElementById("square");
const circle = document.getElementById("circle");

range.addEventListener("input", function(event) {
    span.textContent = event.target.value;
});

document.getElementById("range").addEventListener("input", function() {
    document.getElementById("circle").style.width = range.value + "%";
    document.getElementById("circle").style.height = range.value + "%";
});

/*or variant 
range.addEventListner('inpup', () => {
    const circleSize = range.value;
    circle.style.width = circleSize + '%';
    circle.style.height = circleSize + '%';
})
*/