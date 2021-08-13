// Получаем элемент из DOM дерева в HTML
const item = document.querySelector('.item') // Т.к. нужно получить один элемент то querySelector (.item - имя )
const placeholders = document.querySelectorAll('.placeholder') // Нужно получить все элемены то querySelectorAll (.placeholder)

item.addEventListener('dragstart', dragstart) // Добавляем событие по началу перетаскивания элемента 'item'
item.addEventListener('dragend', dragend) // Добавляем событие по окончанию перетаскивания элемента 'item'

// С помощью цикла 'for of' создаем на каждой итерации 'placeholder' из массива 'placeholders'
for (const placeholder of placeholders) {
    // console.log(placeholder) // создано 3 места 'placeholder' под каждой иконкой снизу
    // Создаем четыре события для 'placeholder'
    placeholder.addEventListener('dragover', dragover) // вызывается над элементом куда можем поместить 'placeholder', в скобках функция
    placeholder.addEventListener('dragenter', dragenter) // вызывается когда заходим на территорию 'placeholder' , в скобках функция
    placeholder.addEventListener('dragleave', dragleave) // вызывается когда перетащили но вышли (передумали) , в скобках функция
    placeholder.addEventListener('drop', dragdrop) // вызывается когда мы отпустили перетаскиваемый элемент , в скобках функция
}

// Создадим функции для соответсвующих действий
function dragstart(event) {
    event.target.classList.add('hold') // Добавление CSS класса при начале перетаскивания
    setTimeout(() => event.target.classList.add // callback функция для CSS, элемент пропадает после перетаскивания
    ('hide'), 0)
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide') // Удаление CSS класса при окончании перетаскивания
    // аналог верхней строки - event.target.className = 'item'
}

// Создаем функции для 4-ех событий для 'placeholder'
function dragover(event) {
    event.preventDefault() // Метод для фиксации перемещаемого объекта в HTML коде
}

function dragenter(event) {
    event.target.classList.add('hovered') // Добавление класса для подсветки места для перемещения элемента 
}

function dragleave(event) {
    event.target.classList.remove('hovered') // Удаление класса для подсветки места для перемещения элемента 
}

function dragdrop(event) {
    event.target.classList.remove('hovered') // Удаление класса для подсветки места для перемещения элемента 
    event.target.append(item) // Событие для фиксирования перемещаемого объекта в коде HTML
}

const colorDivs = document.getElementsByClassName('colDiv');
for (var i = 0; i < colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = "#AA0000";
}