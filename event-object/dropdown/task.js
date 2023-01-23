const values = Array.from(document.querySelectorAll('.dropdown__value'));
const lists = Array.from(document.querySelectorAll('.dropdown__list'));
const arrDropdownLinks = Array.from(document.querySelectorAll('a.dropdown__link'));

values.forEach(item => item.addEventListener('click', openList));
arrDropdownLinks.forEach(item => item.addEventListener('click', selectedElement));

function openList() {
	let list = this.closest('.dropdown').querySelector('ul.dropdown__list');
	if (list.classList.contains('dropdown__list_active') === false) {
		lists.forEach(item => item.classList.remove('dropdown__list_active'));
		list.classList.add('dropdown__list_active');
	} else {
		list.classList.remove('dropdown__list_active');
	}
}
function selectedElement(e) {
	e.preventDefault();
	this.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
	this.closest('.dropdown__list').classList.remove('dropdown__list_active');
}
