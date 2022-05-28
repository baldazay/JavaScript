"use strict"


//LESSON 3, TASK 1

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}

/*
*
*
*
*/

//LESSON 3, TASK 2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
/*
*
*
*
*/

//LESSON 3, TASK 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

//анонимная функция
products.forEach(function (elem) {
    elem.price *= 0.85; // elem['price'] *= 0.85
});
console.log(products);

//функция discount()
/* function discount(elem) {
    elem.price *= 0.85; //elem[0]['price']
}
products.forEach(discount);
console.log(products); */

/*
*
*
*
*/

//LESSON 3, TASK 4

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]

    },
    {
        id: 8,
        price: 78,
    },
];

// Part 1
let productWithImg = products.filter(function (product) {
    return product.photos !== undefined && product.photos.length > 0;
})
console.log(productWithImg);


// Part 2
products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
})
console.log(products);

//Alternative part 2
/* products.sort(function (a, b) {
    return a.price - b.price;
});

console.log(products); */


/*
*
*
*
*/

//LESSON 3, TASK 5

for (let i = 0; i < 10; console.log(i++)) { };

/*
*
*
*
*/

//LESSON 3, TASK 6

let symbol = '';
for (let i = 0; i <= 20; i++) {
    symbol += 'x';
    console.log(symbol);
}