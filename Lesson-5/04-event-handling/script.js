'use strict'


// 01
document.addEventListener('DOMContentLoaded', function () {
    alert('All tags has been downloaded on this page');
});


// 02
window.addEventListener('load', function () {
    alert('All images has been downloaded');
});


// 03
let btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    alert('Click!');
})


// 04
let text = document.querySelector('textarea');
text.addEventListener('mouseover', function () {
    alert('You hovered over the textarea')
})