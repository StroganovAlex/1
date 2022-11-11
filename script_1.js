let age = prompt('Привет! Сколько тебе лет?', 10);
let headText = "<h1 class="header__title">Попробуй еще раз, только на этот раз укажи возраст цифрами";
if (age <= 20) {  // Тебе меньше 20 лет!;
    headText = "<h1 class="header__title">Еще совсем зеленый!";
    alert(`Тебе ${age}!`);
} else if (age <= 50) {  // Тебе в интервале от 20 до 50 лет!; 
    headText = "<h1 class="header__title">В самом расцвете сил!";
    alert(`Тебе ${age}!`); 
} else {  // Тебе больше 50 лет!;
    headText = "<h1 class="header__title">Пора привыкать к земле!";
    alert(`Тебе ${age}!`); 
}
document.body.innerHTML = headText;
