"use strict"


//Part A --- ES5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (anyText) {
    this.text = anyText;
}

const elem = new Post('R.Kipling', 'Mowgli', '07.07.1894');
elem.edit('The Jungle Book');
console.log(elem);






//Part A --- ES6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(anyText) {
        this.text = anyText;
    }
}

const elem = new Post('R.Kipling', 'Mowgli', '07.07.1894');
elem.edit('The Jungle Book');
console.log(elem);
