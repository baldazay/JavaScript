let button = document.querySelector('button');
let text = document.querySelector('textarea');

button.addEventListener('click', function () {
    this.style.fontSize = '30px';
    text.style.backgroundColor = 'green';
});