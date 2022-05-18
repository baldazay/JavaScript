//Lesson 1, Task 1

/* let elem = document.querySelector('input');
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    alert(elem.value + ' C is equal to ' + Math.round((9 / 5) * elem.value + 32) + ' F');
}) */

let tempCel = 21;
let tempFar = (9 / 5) * tempCel + 32;
alert(Math.round(tempFar));