"use strict"


//LESSON 2, TASK 1

var a = 1, b = 1, c, d;

c = ++a;
alert(c); // результат 2. Как нам известно в префиксной форме инкрементирование производится сразу, следовательно т.к. a = 1, сразу же прибавляем 1(получаем 2) и затем присваеваем это значение переменной с.

d = b++;
alert(d); // результат 1. B постфиксной форме инкрементирование производится после присваивания значения переменной, следовательно т.к. b = 1, присваеваем это значение переменной d(d = 1), после увеличиваем b нa 1(b = 2).

c = (2 + ++a);
alert(c); // результат 5. Помним, что после первого действия а = 2, аналогично, увеличиваем значение а(прединкремент) на 1(a = 3), затем уже к 2 прибавляем а(a = 3).

d = (2 + b++);
alert(d); // результат 4. Помним, что после первого действия b = 2, в данном примере у нас постинкрементирование, значит мы к 2 прибавляем b(b = 2), присваеваем полученный результат переменной d(d = 4), а затем увеличиваем b на 1 (b = 3)

alert(a); // результат 3. Bыводим в диалоговом окне ранее полученный результат a = 3.

alert(b); // результат 3. Bыводим в диалоговом окне ранее полученный результат b = 3.

/*
*
*
*
*/

//LESSON 2, TASK 2
/* 
1. Первым выполняем действие в скобках(a *= 2).Раскроем это выражение(a = a * 2).
2. Значит новое значение а равно изначальное значение а(2) умноженное на 2.(a = 2 * 2), получаем 4(a = 4).
3. Затем уже вычисляем чему будет равен х.
4. x = 1 + a.Подставлем новое значение а, получаем x = 1 + 4
5. Pезультат - x = 5.
 */
let a = 2;
let x = 1 + (a *= 2);

/*
*
*
*
*/

//LESSON 2, TASK 3
let a = parseInt(prompt("Введите число 'a'"));
let b = parseInt(prompt("Введите число 'b'"));

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b)
} else {
    alert(a + b);
}

//Вместо else можно подставить этот кусок кода, работает аналогично
/* else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    alert(a + b);
} */

/*
*
*
*
*/

//LESSON 2, TASK 4
let a = parseInt(prompt("Введите число 'a'"));
let b = parseInt(prompt("Введите число 'b'"));

//функция сложения
function add(num1, num2) {
    return num1 + num2;
}

//функция вычетания
function subtract(num1, num2) {
    return num1 - num2;
}

//функция умножения
function multiply(num1, num2) {
    return num1 * num2;
}

//функция деления
function divide(num1, num2) {
    return num1 / num2;
}

alert(add(a, b));
alert(subtract(a, b));
alert(multiply(a, b));
alert(divide(a, b));

/*
*
*
*
*/

//LESSON 2, TASK 5
let a = parseInt(prompt("Введите число 'a'"));
let b = parseInt(prompt("Введите число 'b'"));
let operation = parseInt(prompt("Введите номер операции: \n1 - сложение \n2 - вычетание \n3 - умножение \n4 - деление"));

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 1:
            return add(arg1, arg2);
            break;
        case 2:
            return subtract(arg1, arg2);
            break;
        case 3:
            return multiply(arg1, arg2);
            break;
        case 4:
            return divide(arg1, arg2);
            break;
        default:
            return ('Неверный номер операции!');
    }
}

alert(mathOperation(a, b, operation));

/*
*
*
*
*/

//LESSON 2, TASK 6

// Vol.1
let money = prompt("Введите сумму, которую вы желаете внести на свой банковский счет");
let lastSymbol = money[money.length - 1];
if (lastSymbol == '1') {
    alert(`Ваша сумма в ${money} рубль успешно зачислена.`);
} else if (lastSymbol == '2' || lastSymbol == '3' || lastSymbol == '4') {
    alert(`Ваша сумма в ${money} рубля успешно зачислена.`);
} else {
    alert(`Ваша сумма в ${money} рублей успешно зачислена.`);
}

// Vol.2
let money = prompt("Введите сумму, которую вы желаете внести на свой банковский счет");
let lastSymbol = money[money.length - 1];
switch (lastSymbol) {
    case '1':
        alert(`Ваша сумма в ${money} рубль успешно зачислена.`);
        break;
    case '2':
    case '3':
    case '4':
        alert(`Ваша сумма в ${money} рубля успешно зачислена.`);
        break;
    case '0':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        alert(`Ваша сумма в ${money} рублей успешно зачислена.`);
        break;
};