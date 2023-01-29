const arrayCards = Array.from(document.querySelectorAll('.card'));
const arrayRotator = [];

arrayCards.forEach(item => {
	const arr = Array.from(item.querySelectorAll('.rotator__case'));
	arrayRotator.push(arr);
});

arrayRotator.forEach((item, index) => {
	if (index === 0) {
		let indexActive = 0;
		const intervalId = setInterval(() => {
				item[indexActive].classList.remove('rotator__case_active');
				indexActive === item.length - 1 ? indexActive = 0 : indexActive++;
				item[indexActive].classList.add('rotator__case_active');
		}, 1500);
	} else {
		let indexActive = 0;
		let timerId = null;
		item[indexActive].style.color = item[indexActive].dataset.color;
		timerId = setTimeout(changeCase, item[indexActive].dataset.speed);
		function changeCase() {
			clearTimeout(timerId);
			item[indexActive].classList.remove('rotator__case_active');
			indexActive === item.length - 1 ? indexActive = 0 : indexActive++;
			item[indexActive].classList.add('rotator__case_active');
			item[indexActive].style.color = item[indexActive].dataset.color;
			timerId = setTimeout(changeCase, item[indexActive].dataset.speed);
		}
	}
	
});