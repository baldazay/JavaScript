"use strict"


//ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.discountPercent = function (percent) {
    this.price -= (this.price / 100 * percent);
}

const fruit = new Product('apple', 250);
fruit.discountPercent(25);
console.log(fruit);





//ES6
class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    discountPercent(percent) {
        this.price -= (this.price / 100 * percent);
    }
}

const car = new Vehicle('Subaru', 30000);
car.discountPercent(25);
console.log(car);
