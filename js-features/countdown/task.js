let timer = document.getElementById('timer'); 
let currentTime = 30; // стартовое значение обратного отсчета
let counter = setInterval(countDown, 500); //метод для интервала

function countDown(){  // функция обратного отсчета
    currentTime--; // уменьшаем число на единицу -> можно передвинуть выше timer
     //дальше надо переменной timer, ее сву textContent присвоить счетчик 
    timer.textContent = currentTime;
    
    if (currentTime===0){ // тут сравнение с 0.
        //как только 0, таймер стоп и сообщение
        clearInterval(counter); 
        alert ("Вы победили в конкурсе!"); 
    }
}
