const modal_show = document.querySelector('.show-success');
const modal_window = document.getElementById('modal_main');
const modal_success = document.getElementById ('modal_success');
const modal_close = document.querySelector('.modal__close');

 modal_window.classList.add("modal_active"); 

modal_show.addEventListener('click', function (event) {
    event.preventDefault(); 
    modal_window.classList.add('modal-success'); 
      event.target.classList.toggle('btn_success');
      this.textContent =('Хорошо сделано!');
   }
 )

 modal_close.onclick = function () {
    modal_window.classList.remove('modal_active');
 }