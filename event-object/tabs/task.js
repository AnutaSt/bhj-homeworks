const arrayTab = Array.from(document.querySelectorAll('div.tab'));
const arrayTabContent = Array.from(document.querySelectorAll('div.tab__content'));

arrayTab.forEach((item, index) => item.addEventListener('click', () => changeTab(index)));

function changeTab(index) {
	arrayTab.forEach(item => item.classList.remove('tab_active'));
	arrayTabContent.forEach(item => item.classList.remove('tab__content_active'));
	arrayTab[index].classList.add('tab_active');
	arrayTabContent[index].classList.add('tab__content_active');
}