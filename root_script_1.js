let userNameRequest = prompt('Как тебя зовут?', '');
alert(`Твое имя - ${userNameRequest}!`); // Твое имя!
let isBoss = confirm(`${userNameRequest} ты здесь главный?`); // запрос у пользователя, главный ли он?
alert( isBoss ); // true, если нажата OK
