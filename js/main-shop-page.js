// делаем обработчик событий для сортировки данных в таблице
table1.onclick = function(e) {
    if(e.target.tagName != 'TH') return
    let th = e.target
    sortTable(th.cellIndex, th.dataset.type, 'table1')
}
table2.onclick = function(e) {
    if(e.target.tagName != 'TH') return
    let th = e.target
    sortTable(th.cellIndex, th.dataset.type, 'table2')
}

// создаем функцию для сортировки данных в таблице
function sortTable(colNum, type, id) {
    let elem = document.getElementById(id)
    let tbody = elem.querySelector('tbody')
    let rowsArray = Array.from(tbody.rows)
    let compare
    switch (type) {
        case 'number': // сравниваем числа в столбце
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
            }
            break;
        case 'string': // сравниваем текст в столбце
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
            }
            break
    }
    rowsArray.sort(compare)
    tbody.append(...rowsArray)
}

// проверяем условие отсутствия значений для элемента 'goods' в локальном хранилище 
if(!localStorage.getItem('goods')) { // пытаемся получить значение элемента из локального хранилища
    // и если значение элемента отсутствует - то добавляем его как пустую строку в квадратных скобках
    localStorage.setItem('goods', JSON.stringify([])) 
}

// создаем переменную - элемент модального окна
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'),{
    keyboard: false
})

// объявление параметров поиска для формы с кодом от ListJS
let options = {
    valueNames: ['name','price'] // поиск будет проводиться по имени и цене
}
let userList

/* ищем элемент кнопка с классом add_new и проверяем событие - 
клик на кнопке с текстом "сохранить" в модальном окне для добавления нового товара в локальное хранилище */
document.querySelector('button.add_new').addEventListener('click', function(e) { // при срабатывании события выполняется функция function(e)
    let name = document.getElementById('good_name').value // задаются три переменных - название
    let price = document.getElementById('good_price').value // задаются три переменных - цена
    let count = document.getElementById('good_count').value // задаются три переменных - количество
    if(name && price && count) { // проводим проверку на заполнение всех трех переменных
        // если все три переменные заполнены, то сбрасываем значения до изначального состояния
        document.getElementById('good_name').value = '' 
        document.getElementById('good_price').value = ''
        document.getElementById('good_count').value = '1' 
        // а переменную goods трансформируем в массив js goods
        let goods = JSON.parse(localStorage.getItem('goods')) 
        // далее записываем в js массив goods введенные пользователем значения названия, цены и количества товара, а также номер товара
        goods.push(['good_' +goods.length, name, price, count, 0, 0, 0])
        // заменяем в локальном хранилище значение элемента goods (пустая строка) на введенное пользователем и записанное в массив 
        localStorage.setItem('goods', JSON.stringify(goods))
        // обновляем отображение интерфейса 
        update_goods()
        // скрываем модальное окно
        myModal.hide()
    }   else { // если хотя бы одна переменная не заполнена, то вызывается окно сообщающее об ошибке (js код от sweetalert2)
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Пожалуйста заполните все поля!',
        })
    }
})

update_goods()

// функция обновления графического интерфейса
function update_goods() {
    let result_price = 0
    let tbody = document.querySelector('.list') 
    tbody.innerHTML = "" // очищаем значение левой таблицы 
    document.querySelector('.cart').innerHTML = "" // очищаем значение правой таблицы
    let goods = JSON.parse(localStorage.getItem('goods')) // присваиваем переменной данные из массива локального хранилища
    if(goods.length) { // проверяем наличие элементов (товаров) в локальном хранилище, и если они есть выполняем следующее
        table1.hidden = false // таблицы товаров не скрыты
        table2.hidden = false
        for(let i=0; i<goods.length; i++) { // цикл заполняет таблицы введенной в модальном окне в локальное хранилище информацией о товарах 
            tbody.insertAdjacentHTML('beforeend',
            `
            <tr class="alighn-middle">
                <td>${i+1}</td>
                <td class="name">${goods[i][1]}</td>
                <td class="price">${goods[i][2]}</td>
                <td>${goods[i][3]}</td>
                <td><button class="good_delete btn btn-danger" data-delete="${goods[i][0]}">&#10006;</button></td>
                <td><button class="good_delete btn btn-primary" data-goods="${goods[i][0]}">&#10149;</button></td>
            </tr>
            `
            )
            if(goods[i][4]>0) { // если товар перемещен в корзину (правая таблица cart), то она также отрисовывается 
                goods[i][6] = goods[i][4]*goods[i][2] - goods[i][4]*goods[i][2]*goods[i][5]*0.01
                result_price += goods[i][6] // цена товаров с учетом скидки прибавляется к итоговой цене
                document.querySelector('.cart').insertAdjacentHTML('beforeend',
                `
                <tr class="alighn-middle">
                  <td>${i+1}</td>
                  <td class="price_name">${goods[i][1]}</td>
                  <td class="price_one">${goods[i][2]}</td>
                  <td class="price_count">${goods[i][4]}</td>
                  <td class="price_discount"><input data-goodid="${goods[i][0]}" type="text" value="${goods[i][5]}" min="0" max="100"></td>
                  <td>${goods[i][6]}</td>
                  <td><button class="good_delete btn btn-danger" data-delete="${goods[i][0]}">&#10006;</button></td>
                </tr>
                `
                )
            }
        }
        userList = new List ('goods', options); 
    }   else { // если данных в локальном хранилище нет - таблички скрыты
        table1.hidden = true
        table2.hidden = true
    }
    document.querySelector('.price_result').innerHTML = result_price + ' &#8381;' // отображение итоговой цены
}

// оживляем кнопку удалить через делегирование
document.querySelector('.list').addEventListener('click', function(e) {
    if(!e.target.dataset.delete) { // если клик не по кнопке, то ничего не происходит - идет возврат через return
        return
    }
    Swal.fire({ 
        title: 'Внимание!',
        text: 'Вы действительно хотите удалить товар?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
    }).then((result) => { // иначе включается стрелочная функция с подтверждением удаления 
        if(result.isConfirmed) {
            let goods = JSON.parse(localStorage.getItem('goods'))
            for(let i=0; i<goods.length; i++) {
                if(goods[i][0] == e.target.dataset.delete) {
                    goods.splice(i, 1) // удаляем 1 элемент массива с индекса i
                    localStorage.setItem('goods', JSON.stringify(goods)) // помещаем в локальное хранилище новый массив без удаленного элемента
                    update_goods()
                }
            }
            Swal.fire(
                "Удалено!",
                "Выбранный товар был успешно удален.",
                "success"
            )
        }
    })
})

// делаем обработчик событий нажатия кнопки добавления товара из магазина в корзину - синяя стрелка 
document.querySelector('.list').addEventListener('click', function(e) {
    if(!e.target.dataset.goods) {
        return
    }
    let goods = JSON.parse(localStorage.getItem('goods'))
    for(let i=0; i<goods.length; i++) {
        if(goods[i][3]>0 && goods[i][0] == e.target.dataset.goods) {
            goods[i].splice(3,1, goods[i][3]-1)
            goods[i].splice(4,1, goods[i][4]+1)
            localStorage.setItem('goods', JSON.stringify(goods))
            update_goods()
        }
    }
})    

// делаем обработчик событий нажатия кнопки возврата товара из корзины в магазин - красный крестик в правой таблице 
document.querySelector('.cart').addEventListener('click', function(e) {
    if(!e.target.dataset.delete) {
        return
    }
    let goods = JSON.parse(localStorage.getItem('goods'))
    for(let i=0; i<goods.length; i++) {
        if(goods[i][4]>0 && goods[i][0] == e.target.dataset.delete) {
            goods[i].splice(3,1, goods[i][3]+1)
            goods[i].splice(4,1, goods[i][4]-1)
            localStorage.setItem('goods', JSON.stringify(goods))
            update_goods()
        }
    }
})    

// делаем обработчик событий заполнения поля скидки
document.querySelector('.cart').addEventListener('input', function(e) {
    if(!e.target.dataset.goodid) {
        return
    }
    let goods = JSON.parse(localStorage.getItem('goods'))
    for(let i=0; i<goods.length; i++) {
        if(goods[i][0] == e.target.dataset.goodid) {
            goods[i][5] = e.target.value
            goods[i][6] = goods[i][4]*goods[i][2] - goods[i][4]*goods[i][2]*goods[i][5]*0.01
            localStorage.setItem('goods', JSON.stringify(goods))
            update_goods()
            let input = document.querySelector(`[data-goodid="${goods[i][0]}"]`)
            input.focus()
            input.selectionStart = input.value.length
        }
    } 
})