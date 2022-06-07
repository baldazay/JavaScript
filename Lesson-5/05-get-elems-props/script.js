'use strict'


// 01
let images = document.querySelectorAll('img');
images.forEach(image => console.log(image));

// 02
let elems = document.getElementsByClassName('one');
for (let elem of elems) {
    console.log(elem.tagName.toLowerCase());
}

// 03
let headers = document.getElementsByTagName('h2');
for (let header of headers) {
    console.log(header.className);
}

// 04
let divEl = document.querySelector('div');
let classes = divEl.classList;
classes.forEach(element => {
    console.log(element);
});

// 05
let div = document.querySelector('div');
console.log(div.classList.contains('hidden'));

// 06
let cards = document.querySelectorAll('.card');
cards.forEach(card => {
    if (card.classList.contains('hidden')) {
        // не совсем понял, нужно удалить карточкy или класс
        card.remove('hidden'); //удаление карточки
        //card.classList.remove('hidden');  удаление класса hidden
    }
})

// 07
let links = document.querySelectorAll('a');
links.forEach(link => {
    if (link.innerHTML != 'ссылка') {
        link.innerHTML = 'ссылка';
    }
})

// 08
let boldTexts = document.querySelectorAll('b');
boldTexts.forEach(boldText => {
    if (!boldText.classList.contains('sign')) {
        boldText.classList.add('sign');
    }
});

// 09
let greenTexts = document.querySelectorAll('i');
greenTexts.forEach(greenText => {
    greenText.classList.toggle('green');
});
