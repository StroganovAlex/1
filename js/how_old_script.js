let age = prompt('Привет! Сколько тебе лет?', 35);
let headText = (age <= 16) ? headText = `Тебе ${age}! <br>Еще совсем зеленый!` : // Тебе в интервале до 16 лет!;
(age <= 55) ? `Тебе ${age}! <br>В самом расцвете сил!` : // Тебе в интервале от 16 до 55 лет!; 
(age <= 120) ? `Тебе ${age}! <br>Солидный возраст!` : // Тебе в интервале от 55 до 120 лет!; 
(age <= 500) ? `Тебе ${age}! <br>Дункан Маклауд, ты?` : // Тебе в интервале от 120 до 500 лет!; 
(age <= 9000000000000000) ? `Тебе ${age}! <br>Не может этого быть!` : // Тебе в интервале от 500 до 9000000000000000 лет!; 
`Ты ввел ${age}! <br>Попробуй еще раз, только на этот раз укажи возраст цифрами!`; // Тебе либо больше 9000000 млрд лет, либо возраст введен с ошибкой!;    
document.getElementById("ages").innerHTML = headText;

/*  То же самое но без тернарного (условного) оператора:
let age = prompt('Привет! Сколько тебе лет?', 35);
let headText = "Попробуй еще раз, только на этот раз укажи возраст цифрами";
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
    headText = `Ты ввел ${age}! <br>Попробуй еще раз, только на этот раз укажи возраст цифрами!`;
};
document.getElementById("ages").innerHTML = headText;
*/
