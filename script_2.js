function testIf(a, b) {   // скрипт функции вычисяющий и выводящий значение суммы переменных "a" и "b" в случае если  a > b или их произведение в остальных случаях
    let x;
    if (a > b) {
    x = (a+b); 
    } else {
    x = (a*b);
    }
    return x;
    }

function testIf(a, b) {   // скрипт функции вычисяющий и выводящий значение суммы переменных "a" и "b" - в случае если  a < b, разность "a" и "b" - в случае если  a > b, и их произведение в остальных случаях
    let x;
if (a < b) {
   x = (a + b);
}  else if (a > b) {
   x = (a - b);
}  else {
   x = (a * b);
}
    return x;
}

function testCase(a) {   // скрипт выводящий по-русски текст значения переменной в диапазоне от 0 до 9
    let x;
    switch (a) {
      case 0:
        x = "Ноль";
        break;
      case 1:
        x = "Один";
        break;
      case 2:
        x = "Два";
        break;
      case 3:
        x = "Три";
        break;
      case 4:
        x = "Четыре";
        break;
      case 5:
        x = "Пять";
        break;
      case 6:
        x = "Шесть";
        break;
      case 7:
        x = "Семь";
        break;
      case 8:
        x = "Восемь";
        break;
      case 9:
        x = "Девять";
        break;
}
    return x;
}

function testFactorial(a) {   // скрипт функции вычисяющий и выводящий факториал для числа, передаваемого в функцию
    let x;
    x = 1
    for (i = 1; i <= a; i = i + 1) {
    x = x*i;
}
    return x;
}

function testWhile(a) {   // скрипт функции цикла выводящий последовательность из четных цифр от 1 до заданного значения
    let x=0;
    let y=0;
    while (y<=a) {
    z=y%2;
        if (z==0) {
        x=x+y;
        }
    y=y+1;
    }
    return x;
}

function my_function(n) {   // скрипт рекурсивной функции выводящий последовательность цифр от 1 до заданного значения
  if (n==1) return n;
  return my_function(n-1) + " " + n;
}

function testArray(a, b) { // скрипт для суммирования элементов массивов
    x = a.unshift();
    y = b.unshift();
    z = 0;
    w = 0;
    for (i = 0; i < x; i = i + 1) {
    z = z + a[i];
}
    for (i = 0; i < y; i = i + 1) {
    w = w + b[i];
}
    return z + w;
}

function testArray(a, b) { //функция преобразовывающая две строки в один массив, добавляющая элемент и, реверсирующая и выдающая объединенную строку элементов массива
   myStringA = new String(a);
   myStringB = new String(b);
   let myArray = new Array();
   let ab = myStringA.concat(myStringB);
   for (let i = 0; i < ab.length; i=i+1)
   {
     myArray[i] = ab.charAt(i)
   }
   myArray.unshift('Иванов');
   myArray.reverse();
   return myArray.join(''); 
}

let userNameRequest = prompt('Как тебя зовут?', '');  // скрипт взаимодействия с пользователем
alert(`Твое имя - ${userNameRequest}!`); // Твое имя!
let isBoss = confirm(`${userNameRequest} ты здесь главный?`); // запрос у пользователя, главный ли он?
alert( isBoss ); // true, если нажата OK
