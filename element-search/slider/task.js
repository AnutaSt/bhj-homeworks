let arraySlids = Array.from(document.querySelectorAll('.slider__item'));

document.querySelector('.slider__arrow_prev').addEventListener('click', () => changeSlide('prev'));
document.querySelector('.slider__arrow_next').addEventListener('click', () => changeSlide('next'));

function changeSlide(param) {
	let indexActiveSlide = removeActiveSlide();
	let index;
	if (isNaN(param)){
		if (param === 'prev'){
			indexActiveSlide === 0 ? index = (arraySlids.length - 1) : index = (indexActiveSlide - 1);
		}
		if (param === 'next'){
			indexActiveSlide === (arraySlids.length - 1) ? index = 0 : index = (indexActiveSlide + 1);
		}
	} else {
		index = param;
	}
	arraySlids[index].classList.add('slider__item_active');
}

function removeActiveSlide() {
	let index = arraySlids.findIndex(item => item.classList.value.indexOf('slider__item_active') >= 0);
	arraySlids[index].classList.remove('slider__item_active');
	return index;
}