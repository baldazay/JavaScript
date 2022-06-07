'use strict'


// 01
let link = document.getElementById('four');
console.log(link);
//console.log(document.getElementById('four')); вариант без переменной, в дальнейшем буду использовать только один вариант.

// 02
let elems = document.getElementsByClassName('one');
console.log(elems);

// 03
let cards = document.querySelectorAll('.card-body .card-link');
console.log(cards);

// 04
let divBlock = document.querySelector('div[aria-valuenow="50"]');
console.log(divBlock);

// 05
let title = document.querySelector('title');
console.log(title.innerHTML);