"use strict"

//LESSON 1, TASK 1

let tempCel = 25;
let tempFar = (9 / 5) * tempCel + 32;
alert(Math.round(tempFar));

/*
*
*
*
*/

//LESSON 1, TASK 2

let admin, name;
name = 'Vasily';
admin = name;
console.log(admin);

/*
*
*
*
*/

//LESSON 1, TASK 3

/* 
1. C помощью console.log выводим в консоль результат выражения 10 + 10 + '10'
2. K 10(число) прибавляется 10(число) получается 20(число) ... (оба значения числовые, следовательно, числа просто складываются)
3. K 20(число) прибавляется '10'(строка) получается '2010'(строка) ... (в данном случае срабатывает приведение типов, т.е.при сложении числа и строки, число приводится к типу строка, и следовательно строки склеиваются)
 */
console.log(10 + 10 + '10');

/* 
1. C помощью console.log выводим в консоль результат выражения 10 + '10' + 10
2. K 10(число) прибавляется '10'(строка) получается '1010'(строка)
3. K '1010'(строка) прибавляется 10(число) получается '101010'(строка)
4. Принцип тот же, что и в предыдущем примере
 */
console.log(10 + '10' + 10);


/* 
1. C помощью console.log выводим в консоль результат выражения 10 + 10 + +'10'
2. K 10(число) прибавляется 10(число) получается 20(число)
3. При использовании знака + перед числом записанным как строка (+'10'), строка приводится к типу число, следовательно +'10' = 10
4. K 20(число) прибавляется +'10' (или 10(число)) получается '30'(число)
*/
console.log(10 + 10 + +'10');

/* 
1. C помощью console.log выводим в консоль результат выражения 10 / -''
2. ''(пустая строка) дает нам 0, следовательно выражение преобретает вид 10 / -0
3. Т.к.на 0 делить нельзя и у нас есть унарный минус перед пустой строкой мы получаем отрицательную бесконечность
4. Получаем -Infinity
 */
console.log(10 / -'');

/* 
1. C помощью console.log выводим в консоль результат выражения 10 / +'2,5'
2. C помощью унарного плюса выражение должно из строки перейти в число, но мы знаем, что дробное число отделяется точкой.B идеале выражение должно выглядеть так 10 / +'2.5'
3. Но из - за запятой '2,5'(строка) преобретает значение NaN
4. Любые математические операции при наличии NaN дадут результат NaN
 */
console.log(10 / +'2,5');