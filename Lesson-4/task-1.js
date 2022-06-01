"use strict"


//LESSON 4, TASK 1

let object = {};
let number = parseInt(prompt('Write a number from 0 to 999:'));
if (number < 999 && number > 0 && number != NaN) {
    object.units = number % 10;
    object.tens = Math.floor(number / 10) % 10;
    object.hundreds = Math.floor(number / 100);
    console.log(object);
} else {
    console.log('Read one more time...A number from 0 to 999!!!')
}
