'use strict'


// 01
let ulElem = document.querySelector('ul');
ulElem.classList.add('one');

// 02
let toggleElem = document.querySelector('.nav-link');
toggleElem.classList.toggle('active');

// 03
let dropDownMenu = document.querySelector('.dropdown-menu');
dropDownMenu.classList.remove('dropdown-menu');

// 04
let divElem = document.querySelector('#menu');
divElem.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

// 05
let btn = document.querySelector('.close');
console.log(btn.getAttribute('data-dismiss'));
console.log(btn.getAttribute('aria-label'));

// 06
let title = document.querySelector('h1');
title.setAttribute('data-one', 'one');
title.setAttribute('data-two', 'two');

// 07
let articleTitle = document.querySelector('#title');
articleTitle.setAttribute('id', 'hello');