function update_header() { //функция обновления содержимого элемента header при нажатии на ссылку "Скрипт №1: Сколько тебе лет?"
    let headText;
    let age = prompt('Привет! Сколько тебе лет?', 35);
    if (age === null) {  // пользователь отказался вводить возраст
        headText = "Привет<br>мир!";
    } else { // пользователь ввел возраст
        headText = (age <= 16) ? headText = `Тебе ${age}! <br>Еще совсем зеленый!` : // Тебе в интервале до 16 лет!;
        (age <= 55) ? `Тебе ${age}! <br>В самом расцвете сил!` : // Тебе в интервале от 16 до 55 лет!; 
        (age <= 120) ? `Тебе ${age}! <br>Солидный возраст!` : // Тебе в интервале от 55 до 120 лет!; 
        (age <= 500) ? `Тебе ${age}! <br>Дункан Маклауд, ты?` : // Тебе в интервале от 120 до 500 лет!; 
        (age <= 9000000000000000) ? `Тебе ${age}! <br>Не может этого быть!` : // Тебе в интервале от 500 до 9000000000000000 лет!; 
        `'${age}' - что это? <br>Укажи свой возраст цифрами!`; // Тебе либо больше 9000000 млрд лет, либо возраст введен с ошибкой!;    
    }
    document.getElementById("ages").innerHTML = headText; // обновление содержимого в элементе с id="ages"
};
document.querySelector('.howOld').addEventListener('click', function() {
    update_header();
})  

function reverse() { //функция обновления содержимого элемента header при нажатии на ссылку "Скрипт №2: ОЛЯ-ЯЛО"
    let headText = '';
    let str = prompt('Привет! Какое слово перевернуть?', '');
    if (str === null) {  // пользователь отказался вводить слово
      headText = "Привет<br>мир!";
    } else { // пользователь ввел слово которое нужно инвертировать
    let i = str.length - 1;
    while (i > -1) {
      headText = headText + str[i];
      i = i - 1;
      }
    }    
    document.getElementById("ages").innerHTML = headText; // обновление содержимого в элементе с id="ages"
};
document.querySelector('.apoj').addEventListener('click', function() {
    reverse();
}) 



/* Как бы выглядело условие без тернарного оператора:
let headText;
let age = prompt('Привет! Сколько тебе лет?', 35);
if (age === null) {  // пользователь отказался вводить возраст
    headText = "Привет мир!";
} else {
    if (age <= 16) {  // Тебе меньше 16 лет!;
        headText = `Тебе ${age}! <br>Еще совсем зеленый!`;
    } else if (age <= 55) {  // Тебе в интервале от 16 до 55 лет!; 
        headText = `Тебе ${age}! <br>В самом расцвете сил!`;
    } else if (age <= 120) {  // Тебе в интервале от 55 до 120 лет!; 
        headText = `Тебе ${age}! <br>Солидный возраст!`;
    } else if (age <= 500) {  // Тебе в интервале от 120 до 500 лет!; 
        headText = `Тебе ${age}! <br>Дункан Маклауд, ты?`;
    } else if (age <= 9000000000000000) {  // Тебе в интервале от 500 до 9000000000000000 лет!; 
        headText = `Тебе ${age}! <br>Не может этого быть!`;
    } else {  // Тебе либо больше 9000000 млрд лет, либо возраст введен с ошибкой!;
        headText = `'${age}' - что это? <br>Укажи свой возраст цифрами!`;
};
document.getElementById("ages").innerHTML = headText;
*/
