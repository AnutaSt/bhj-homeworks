const elements = Array.from(document.querySelectorAll('input.interest__check'));
elements.forEach(item => item.addEventListener('change', clickCheckbox));

function clickCheckbox() {
	const isCurrentChecked = this.checked;
	const conteiner = this.closest('li.interest');
	
	
	childsChecked(conteiner);
	
	function childsChecked(elem) {
		const arrayChilds = Array.from(elem.querySelectorAll('ul > li'));
		if (arrayChilds === 0) return;
		arrayChilds.forEach(item => (isCurrentChecked === true ? item.querySelector('input').checked = true : item.querySelector('input').checked = false));
	}
	
	parentChecked(conteiner);
	
	function parentChecked(elem){
		if (elem.tagName === 'DIV') return;
		const arrayChilds = Array.from(elem.closest('ul').querySelectorAll('input'));
		const arrayChildsChecked = arrayChilds.filter( el => el.checked );
		if (elem.parentElement.closest('li.interest') === null) return;
		const parent = elem.parentElement.closest('li.interest').querySelector('input');
		if (isCurrentChecked) {
			if (arrayChilds.length === arrayChildsChecked.length) {
				parent.indeterminate = false;
				parent.checked = true;
			} else {
				parent.indeterminate = true;
			}
		} else {
			if (arrayChildsChecked.length === 0) {
				parent.indeterminate = false;
				parent.checked = false;
			} else {
				parent.indeterminate = true;
			}
		}
		parentChecked(parent.closest('li.interest'));
	}