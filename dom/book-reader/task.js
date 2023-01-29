const bookControl = document.querySelector('.book__controls');
const book = document.getElementById('book');
bookControl.addEventListener('click', changeContent);
function changeContent(event) {
	const elem = event.target;
	if (elem.tagName !== "A") return;
	event.preventDefault();
	const parent = elem.closest('.book__control');
	const typeControl = parent.classList[1].slice(14);
	const arrElem = Array.from(parent.querySelectorAll('a'));
	const arrayClass = book.classList.value.split(' ');
	switch (typeControl) {
		case "font-size":
			arrElem.forEach(item => item.classList.remove('font-size_active'));
			elem.classList.add('font-size_active');
			removeClassName('book_fs');
			if (elem.dataset.size !== undefined) {
				book.classList.add('book_fs-' + elem.dataset.size);
			}
		break;
        default:
		break;
	}
	function removeClassName(str) {
		let className = arrayClass.find(item => item.includes(str) === true);	
		if (className !== undefined){
			book.classList.remove(className);
		}
	}
}