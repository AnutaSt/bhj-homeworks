let timerId = null;
document.onclick = function (e) {
	const className = e.target.className;
	if (className === 'chat-widget__side-text'){
		document.querySelector('.chat-widget').classList.add('chat-widget_active');
		timerId = setTimeout(setTimer, 30000);
	}else if (className.includes('chat-widget') === true) {
		return;
	} else {
		document.querySelector('.chat-widget').classList.remove('chat-widget_active');
		clearTimeout(timerId);
		timerId = null;
	}
}
const textField = document.getElementById('chat-widget__input');
const eventSend = textField.addEventListener('keyup', sendMessage);
const chat = document.getElementById('chat-widget__messages');

function sendMessage(event) {
	let send = event.key;
	if (send !== "Enter") return;
	const time = new Date();
	/*if (textField.value.length > 0){
		chat.innerHTML += `
		  <div class="message message_client">
			<div class="message__time">${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}</div>
			<div class="message__text">
			  ${textField.value}
			</div>
		  </div>
		`;*/
		if (textField.value.trim()) {
			chat.innerHTML += `
			  <div class="message message_client">
				<div class="message__time">${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}</div>
				<div class="message__text">
				  ${textField.value.trim()}
				</div>
			  </div>
			`;
		textField.value = '';
		setMessageBot(false);
		chat.parentElement.scrollTop = chat.parentElement.scrollHeight;
		clearTimeout(timerId);
		timerId = setTimeout(setTimer, 30000);
	}
}

function setTimer() {
	setMessageBot(true);
	chat.parentElement.scrollTop = chat.parentElement.scrollHeight;
	timerId = setTimeout(setTimer, 30000);
}

function setMessageBot(isMessageTimer) {
	let message = '';
	isMessageTimer === false ? message = getMessage() : message = "Напишите что-нибудь. Или закройте чат!";
	const time = new Date();
	chat.innerHTML += `
	  <div class="message">
		<div class="message__time">${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}</div>
		<div class="message__text">
		  ${message}
		</div>
	  </div>
	`;
}
function getMessage() {
	const messageList = [
		"К сожалению, все операторы сейчас заняты. Не пишите нам больше.",
		"Кто тут?",
		"Где ваша совесть?",
		"Что-то плохо слышно...",
		"Мы ничего не будем вам продавать",
		"Все спят. Зайдите через 10 лет.",
		"Не пишите нам больше!",
		"Иди своей дорогой, юзер",
		"Все кожаные заняты",
		"Не видите, у нас обед"
	];
	const index = Math.floor(Math.random() * 10);
	return messageList[index];
}
