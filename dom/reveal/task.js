/*другой вариант
const arrayReveal = Array.from(document.querySelectorAll('div.reveal'));
const windowHeight = window.innerHeight;

window.addEventListener('scroll', function () {
	arrayReveal.forEach(item => {
		const {top, bottom} = item.getBoundingClientRect();
		if (top > 20 && bottom < windowHeight - 20 ) {
			if (item.classList.contains('reveal_active') === false){
				item.classList.add('reveal_active');
			}
		} else {
			if (item.classList.contains('reveal_active') === true){
				item.classList.remove('reveal_active');
			}
		}
	});
});*/

const reveals_arr = Array.from(document.querySelectorAll('div.reveal'));
const windowHeight = window.innerHeight;

document.addEventListener('scroll', function() {
  for(let i = 0; i <= reveals_arr.length - 1; i++) {
  revealTop = reveals_arr[i].getBoundingClientRect().top;
  revealBottom = reveals_arr[i].getBoundingClientRect().bottom;
  if ((revealTop < window.innerHeight) && (revealBottom > window.innerHeight)) {
  reveals_arr[i].classList.add('reveal_active');
  }
  }
  });