//Part B --- ES5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (anyText) {
    this.text = anyText;
}

function AttachedPost(author, text, date, highlited) {
    Post.call(this, author, text, date);
    this.highlited = highlited;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlited = true;
}

const elem = new AttachedPost('R.Kipling', 'Mowgli', '07.07.1894', false);
console.log(elem);
elem.edit('The Jungle Book');
elem.makeTextHighlighted();
console.log(elem);





//Part B --- ES6

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


class AttachedPost extends Post {
    constructor(author, text, date, highlited) {
        super(author, text, date);
        this.highlited = highlited;
    }

    makeTextHighlighted() {
        this.highlited = true;
    }

}

const elem = new AttachedPost('R.Kipling', 'Mowgli', '07.07.1894', false);
console.log(elem);
elem.edit('The Jungle Book');
elem.makeTextHighlighted();
console.log(elem);
