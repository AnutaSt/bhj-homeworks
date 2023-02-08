const textField = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
document.getElementById('tasks__form').addEventListener('submit', sendTask);

function sendTask(e) {
	e.preventDefault();
	if (textField.value.trim().length < 1) {
		textField.value = '';
		return;
	}
	const conteiner = document.createElement('div');
	conteiner.classList.add('task');
	const task = document.createElement('div');
	task.classList.add('task__title');
	tasksList.prepend(conteiner);
	conteiner.prepend(task);
	task.textContent = textField.value;
	conteiner.insertAdjacentHTML('beforeEnd', '<a href="#" class="task__remove">&times;</a>');
		
	const remove = conteiner.querySelector('.task__remove');
	remove.addEventListener('click', removeTask);
	textField.value = '';
}

function removeTask(e) {
	e.preventDefault();
	const elemRemove = e.target.closest('.task');
	elemRemove.remove();
}
