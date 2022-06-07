'use strict'


// 01
let btn1 = document.querySelector('button');
btn1.addEventListener('click', event => {
    console.log(event.target);
});


// 02
let paragraph = document.querySelector('p');
paragraph.addEventListener('click', event => {
    console.log(event.target.classList);
    event.target.classList.forEach(element => {
        console.log(element);
    });
});


// 03
let div = document.querySelector('div');
div.addEventListener('click', event => {
    let attrs = event.target.attributes;
    for (let attr of attrs) {
        console.log(attr.value);
    }
});


// 04
let product = document.querySelector('.product');
let item = product.querySelector('.productName');
product.addEventListener('click', event => {
    product.innerHTML = '<div>Another item</div>\n <div>Another description</div>';
});


// 05
let clickEl = document.querySelector('ul');
clickEl.addEventListener('click', event => {
    console.log(event.target);
});