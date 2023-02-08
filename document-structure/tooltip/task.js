/*const hasTooltipEls = Array.from(document.querySelectorAll('.has-tooltip'))
let tooltipEl

hasTooltipEls.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target

    tooltipEl = document.createElement('div')
    tooltipEl.className = 'tooltip'
    if (!tooltipEl.classList.contains('.tooltip_active')) {
      tooltipEl.classList.add('tooltip_active')
    } else {
      tooltipEl.classList.remove('tooltip_active')
    }

    tooltipEl.innerHTML = target.getAttribute('title')
    target.after(tooltipEl)
    let coords = target.getBoundingClientRect()
    let left = coords.left + (target.offsetWidth - tooltipEl.offsetWidth) / 2
    if (left < 0) {
      left = 0
    }
    let bottom = coords.top + target.offsetHeight
    console.log(coords.top)
    tooltipEl.style.left = left + 'px'
    tooltipEl.style.top = bottom + 'px'
  })
})

hasTooltipEls.forEach((item) => {
  item.addEventListener('mousemove', (e) => {
    if (tooltipEl) {
      tooltipEl.remove()
      tooltipEl = null
    }
  })
})*/
//другой вариант
const elem = Array.from(document.querySelectorAll('.has-tooltip'));
elem.forEach(item => item.addEventListener('click', clickTooltip));
function clickTooltip(e) {
	e.preventDefault();
	const clickElem = e.target;
	const {bottom, left} = clickElem.getBoundingClientRect();
	
	if (clickElem.nextElementSibling === null || clickElem.nextElementSibling.classList.contains('tooltip') === false) {
		closeActiveTooltip();
		clickElem.insertAdjacentHTML('afterEnd', `\n<div class="tooltip tooltip_active" style="left: ${Math.round(left)}px; top: ${Math.round(bottom)}px;">${clickElem.title}</div>\n`);
	} else {
		const isActive = clickElem.nextElementSibling.classList.contains('tooltip_active');
		closeActiveTooltip();
		if (isActive === false) {
			clickElem.nextElementSibling.classList.add('tooltip_active');
		}
	}
}
function closeActiveTooltip() {
	const arrActivTooltip = document.querySelectorAll('.tooltip_active');
	arrActivTooltip.forEach(item => item.classList.remove('tooltip_active'));
}
