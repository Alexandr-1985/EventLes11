//мы можем повесить обработчик события на самом документе
//ТАК ЖЕ ИСПОЛЬЗУЮТ 1 ЗАГРУЗКА ВСЕЙ СТРАНИЦЫ, 2 ДАЛЕЕ ЗАГРУЖАЮТСЯ ВСЕ СКРИПТЫ. И ПРОПИСЫВАЕТСЯ ПЕРЕД 'use strict' и закрывается в самом-самом конце кода });
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page is loaed");

    ("use strict");

    let square = document.querySelector(".square");

    square.onclick = function() {
        console.log("Кликаем на квадрат и количество кликов будет отмечаться");
    };
    //все методы обработчиков событий начинаются на on
    console.dir(square);

    //Ограничение пользователя по колличеству кликов
    let count = 0;
    square.onclick = function() {
        if (count === 3) {
            console.log("Упс");
            square.onclick = null;
            return;
        }
        count++;
        console.log("Кликаем на квадрат и количество кликов будет отмечаться");
    };

    //Две функции будут запускаться по одному клику (делаем обуртку -навешивание слущателя)
    square.addEventListener("click", function() {
        console.log("Произошел кик по квадрату");
    });
    square.addEventListener("click", function() {
        console.log("Произошел кик по квадрату 2");
    });
    square.addEventListener("click", function() {
        console.log("Произошел кик по квадрату 3");
    });
    square.addEventListener("click", function() {
        console.log("Произошел кик по квадрату 4");
    });

    //Ограничения колличества кликов (используется именная ФУИ)
    let clicked = function() {
        count++;
        if (count === 3) {
            square.removeEventListener("click", clicked);
        }
    };
    square.addEventListener("click", clicked);

    //У каждого событтия есть объект события (event) - type-click
    square.addEventListener("click", function(event) {
        console.log(event);
    });

    //выносим функцию отдельно
    let eventFunc = function(event) {
        console.log(event.type);
    };
    square.addEventListener("click", eventFunc); //событие составное и состоит из двух событий: mouseup, mousedown
    //square.addEventListener('mouseup', eventFunc);
    //square.addEventListener('mousedown', eventFunc);
    //square.addEventListener('mousemove', eventFunc);
    //square.addEventListener('moeseenter', eventFunc);
    //square.addEventListener('moeseleave', eventFunc);
    //это показывается на пирмере кружка находящегося поверх квадрата
    square.addEventListener("moeseover", eventFunc);
    square.addEventListener("moeseout", eventFunc);

    /////////////////////////////////////
    let eventFunc1 = function(event) {
        console.log(event.type);
        console.log(event.target.value); //вывод значения
    };
    //У нас есть input по id
    document.querySelector("#text").addEventListener("input", eventFunc1);
    document.querySelector("#text").addEventListener("change", eventFunc1);
    //событие срабатывает принажатиии и отпускании на кнопку
    document.querySelector("#text").addEventListener("keyup", eventFunc1);
    document.querySelector("#text").addEventListener("keydown", eventFunc1);

    //получаем шкалу
    document.querySelector("#range").addEventListener("change", eventFunc1);

    //////////////////
    //можно спросить вы уверены что хотите уйти со страницы или сохранили данные (всплывающее окно как alert)
    /*   window.onbeforeunload = function() {
        return 'Вы уверены что хотите уйти сос траницы';
    };
*/
    /////////////////
    //Метод который отменяет стандартное поведение браузера
    //ПОВТОРНО ПОЛУЧАЕМ КНОПКУ
    document.querySelector("#link").addEventListener("click", function(event) {
        event.preventDefault(); //таким образом при клике на ссылку google ничего не происходит
        //мы можем прописывать свои команды чтобы что то произошло
        console.log("click");
    });

    //навешиваем на document обработчик события contextmenu
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        console.log("click");
    });

    /////////////////////////////////////

    //Всплытие событий и Захват событий
    let clickElem = null;
    //эта фуи срабатывает при нажатии на кнопку 'Жми на меня'
    function greenHundler(event) {
        if (clickElem) {
            clickElem.classList.remove("green"); //удаляем класс
        }
        //далее присваиваем новый элемент и присваиваем класс
        clickElem = event.currentTarget;
        clickElem.classList.add("green");
    }
    //пишем обработчик событий для элементов
    document.querySelector(".event-btn").addEventListener("click", greenHundler);
    document.querySelector(".circle").addEventListener("click", greenHundler);
    document.querySelector(".square").addEventListener("click", greenHundler);
    document.querySelector(".body").addEventListener("click", greenHundler);
    //захват события передается третьим параметром - true
    document
        .querySelector(".event-btn")
        .addEventListener("click", greenHundler, true);
    document
        .querySelector(".circle")
        .addEventListener("click", greenHundler, true);
    document
        .querySelector(".square")
        .addEventListener("click", greenHundler, true);
    document.querySelector(".body").addEventListener("click", greenHundler, true);
});