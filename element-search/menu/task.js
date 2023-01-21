'use strict';
const link = document.querySelector('.menu_main');
link.addEventListener('click', e => {
  const item = e.target
  if (!item.classList.contains('menu__link')) return
  const menu__item = item.closest('.menu__item')
  if (!menu__item.querySelector('.menu_sub')) return
  e.preventDefault();
  let menu_active = menu__item.querySelector('.menu_active')
  if (menu_active) {
   menu_active.classList.remove('menu_active');
    return
  } 
  menu_active = link.querySelector('.menu_active')
  if (menu_active) menu_active.classList.remove('menu_active');
  menu__item.querySelector('.menu_sub').classList.add('menu_active')
})
