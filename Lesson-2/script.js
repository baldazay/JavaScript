"use strict"

/*  */

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
