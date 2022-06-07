'use strict'


// 01
let childElem = document.querySelector('.mt-0');
let parentElem = childElem.parentNode;
console.log(childElem);
console.log(parentElem);

// 02
let div = document.querySelector('#block');
let elem = document.createElement('h3');
elem.innerHTML = 'Hello World!';
div.appendChild(elem);

// 03
let parent = document.querySelector('body');
let child1 = document.querySelector('.btn-outline-warning');
let child2 = document.querySelector('.btn-outline-dark');
parent.removeChild(child1);
parent.removeChild(child2);

// 04
let button = document.querySelector('.btn-info');
button.textContent = 'Button';