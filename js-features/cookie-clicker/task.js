//cookieID - в качестве кнопки
//clicker__counterID - хранит значение счетчика 

let cookieID = document.getElementById ('cookie');//позволяет получить контент
//getElementByID - данный метод берет значение теги при помощи идентификатора 
let clicker__counterID = document.getElementById('clicker__counter');

let counter = 0; //начальное значение счетчика

cookieID.addEventListener('click', function(){
    //addEventListener - метод, который регистрирует определенный обработчик событий 
    //в данном случае событие -click. Данный метод содержит два значения (событие и что будем выполнять)
    counter++;//обновление счетчика 
    clicker__counterID.textContent = counter; //меняем контент тега

    if (counter % 2 == 0) {
      cookieID.width = '250';
    } 
    if (counter % 2 !== 0) 
      cookieID.width = '202';
});


